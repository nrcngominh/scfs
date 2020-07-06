<template>
  <div class="main-container">
    <header>
      <vendor-header />
      <div class="keep-header-space"></div>
    </header>

    <main>
      <div class="content">
        <router-view />
      </div>
    </main>

    <footer>
      <my-footer class="wrapper" />
    </footer>

    <vendor-account-modal></vendor-account-modal>
  </div>
</template>

<script>
import VendorHeader from "@/components/vendor/VendorHeader";
import VendorAccountModal from "@/components/vendor/VendorAccountModal";
import MyFooter from "@/components/Footer";

export default {
  name: "MainLayout",
  components: {
    VendorHeader,
    VendorAccountModal,
    MyFooter
  }
};
</script>