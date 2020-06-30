<template>
  <div class="main-container">
    <header>
      <my-header
        class="my-header"
        :class="{'on-top': $store.state.navOnTopSlide,
                       scrolled: !$store.state.navOnTopSlide}"
      />
    </header>

    <main>
      <div class="content">
        <router-view />
      </div>
    </main>

    <footer>
      <my-footer class="footer wrapper" />
    </footer>
  </div>
</template>

<script>
import MyHeader from "../components/Header";
import MyFooter from "../components/Footer";

export default {
  name: "MainLayout",
  components: {
    MyHeader,
    MyFooter
  },
  data() {
    return {
      isOnTop: true
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.$store.commit("setNavOnTopSlide", window.scrollY === 0);
    }
  }
};
</script>