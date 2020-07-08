<template>
  <div class="main-container">
    <header>
      <my-header />
      <div class="keep-header-space"></div>
    </header>

    <main></main>

    <footer>
      <my-footer class="wrapper" />
    </footer>
  </div>
</template>

<script>
import MyHeader from "@/components/Header";
import MyFooter from "@/components/Footer";

export default {
  name: "MainLayout",
  components: {
    MyHeader,
    MyFooter
  }
};
</script>