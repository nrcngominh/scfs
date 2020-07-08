<template>
  <div
    class="header-container"
    :class="{transparent: transparentNav, solid: !transparentNav, 'modal-active': modalActive}"
  >
    <div class="header-wrapper">
      <div class="header-content wrapper">
        <div class="toggle-button-wrapper">
          <div class="toggle-button" id="nav-toggle-button" @click="toggleDropdown()">
            <img :src="menuButtonUrl" alt="Logo" />
          </div>
        </div>

        <div class="logo-wrapper">
          <div class="logo" @click="goToHome()">
            <img :src="logoUrl" alt="Logo" />
          </div>
        </div>

        <nav class="nav-left" :class="{'nav-dropdown': dropdown}">
          <ul class="nav-tab" id="nav-dropdown">
            <li @click="goToHome()">
              <div>HOME</div>
            </li>
            <li @click="goToMenu()">
              <div>MENU</div>
            </li>
            <li @click="goToVendor()">
              <div>VENDOR</div>
            </li>
            <li>
              <div>ABOUT</div>
            </li>
          </ul>
        </nav>

        <nav class="nav-right">
          <ul class="nav-icon" :class="{'hidden': !customerLoggedIn}">
            <li @click="goToCart()">
              <img src="@/assets/images/cart.svg" alt="Logo" />
            </li>
            <li>
              <img src="@/assets/images/heart.svg" alt="Logo" />
            </li>
            <li>
              <img src="@/assets/images/notification.svg" alt="Logo" />
            </li>
            <li @click="performLogout()">
              <img src="@/assets/images/user.svg" alt="Logo" />
            </li>
          </ul>

          <ul class="nav-login-register" :class="{'hidden': customerLoggedIn}">
            <li @click="register()">REGISTER</li>
            <li class="login" @click="login()">LOGIN</li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  name: "Header",
  computed: {
    isTop() {
      return window.scrollY === 0;
    },
    menuButtonUrl() {
      return this.dropdown
        ? require("@/assets/images/close-menu.svg")
        : require("@/assets/images/open-menu.svg");
    },
    logoUrl() {
      return this.transparentNav
        ? require("@/assets/images/logo-white.png")
        : require("@/assets/images/logo.png");
    },
    ...mapState("header", ["dropdown", "transparentNav"]),
    ...mapState("account", ["customerLoggedIn"]),
    ...mapState("customer/accountModal", ["modalActive"])
  },
  methods: {
    ...mapMutations("customer/accountModal", [
      "openRegisterTab",
      "openLoginTab"
    ]),
    ...mapMutations("header", ["toggleDropdown", "closeDropdown"]),
    ...mapActions("account", ["customerLogout"]),
    // Router
    goToHome() {
      this.$router.push("/");
    },
    goToMenu() {
      this.$router.push("/menu");
    },
    goToVendor() {
      this.$router.push("/vendor");
    },
    goToCart() {
      this.$router.push("/cart");
    },
    register() {
      this.openRegisterTab();
    },
    login() {
      this.openLoginTab();
    },
    performLogout() {
      this.customerLogout();
    }
  },
  beforeCreate() {
    window.addEventListener("click", e => {
      const headerContainer = document.getElementById("nav-dropdown");
      const toggleButton = document.getElementById("nav-toggle-button");
      if (
        !toggleButton.contains(e.target) &&
        !headerContainer.contains(e.target)
      ) {
        this.closeDropdown();
      }
    });
  }
};
</script>