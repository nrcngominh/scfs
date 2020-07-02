<template>
  <div class="main-container">
    <header>
      <my-header class="my-header" />
    </header>

    <main>
      <div class="content">
        <router-view />
      </div>
    </main>

    <footer>
      <my-footer class="footer wrapper" />
    </footer>

    <account-modal></account-modal>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
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
  created() {
    window.addEventListener("scroll", this.scroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scroll);
  },
  methods: {
    ...mapMutations("header", ["scroll"])
  }
};
</script>