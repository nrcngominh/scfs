<template>
  <div class="main-container">
    <header>
      <my-header />
      <div :class="{'keep-header-space': !landingPage}"></div>
    </header>

    <main>
      <div class="content">
        <router-view />
      </div>
    </main>

    <footer>
      <my-footer class="wrapper" />
    </footer>

    <account-modal></account-modal>
  </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from "vuex";
import MyHeader from "@/components/Header";
import MyFooter from "@/components/Footer";
import AccountModal from "@/components/AccountModal";

export default {
  name: "MainLayout",
  components: {
    MyHeader,
    MyFooter,
    AccountModal
  },
  computed: {
    ...mapState("header", ["landingPage"])
  },
  created() {
    window.addEventListener("scroll", this.scrollHandler);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollHandler);
  },
  methods: {
    ...mapMutations("header", ["scroll"]),
    scrollHandler() {
      this.scroll(window.scrollY === 0);
    },
    ...mapActions("customer/cart", ["fetchCart"])
  },
  mounted() {
    this.fetchCart();
  }
};
</script>