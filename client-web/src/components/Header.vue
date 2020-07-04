<template>
  <div
    class="header-container"
    :class="{transparent: transparentNav, solid: !transparentNav, 'modal-active': modalActive}"
  >
    <div class="header-wrapper">
      <div class="header-content wrapper">
        <nav class="nav-left">
          <div class="toggle-button" @click="toggleDropdown()">
            <img :src="menuButtonUrl" alt="Logo" />
          </div>

          <div class="logo" @click="goToHome()">
            <img :src="logoUrl" alt="Logo" />
          </div>

          <ul class="nav-tab">
            <li>
              <div @click="goToHome()">HOME</div>
            </li>
            <li>
              <div @click="goToMenu()">MENU</div>
            </li>
            <li>
              <div>ABOUT</div>
            </li>
          </ul>
        </nav>

        <nav class="nav-right">
          <ul class="nav-icon" :class="{'hidden': !loggedIn}">
            <li @click="goToCart()">
              <img src="@/assets/images/cart.svg" alt="Logo" />
            </li>
            <li>
              <img src="@/assets/images/heart.svg" alt="Logo" />
            </li>
            <li>
              <img src="@/assets/images/notification.svg" alt="Logo" />
            </li>
            <li>
              <img src="@/assets/images/user.svg" alt="Logo" />
            </li>
          </ul>

          <ul class="nav-login-register" :class="{'hidden': loggedIn}">
            <li>
              <div class="register" @click="register()">REGISTER</div>
            </li>
            <li>
              <div class="login" @click="login()">LOGIN</div>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="dropdown-wrapper">
      <div class="nav-dropdown" :class="{'active': dropdown}">
        <ul>
          <li>
            <div @click="goToHome()">HOME</div>
          </li>
          <li>
            <div @click="goToMenu()">MENU</div>
          </li>
          <li>
            <div>ABOUT</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

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
    ...mapState("account", ["loggedIn"]),
    ...mapState("account/modal", ["modalActive"])
  },
  methods: {
    ...mapMutations("account/modal", ["openRegisterTab", "openLoginTab"]),
    ...mapMutations("header", ["toggleDropdown"]),
    // Router
    goToHome() {
      this.$router.push("/");
    },
    goToMenu() {
      this.$router.push("/menu");
    },
    goToCart() {
      this.$router.push("/cart");
    },
    register() {
      this.openRegisterTab();
    },
    login() {
      this.openLoginTab();
    }
  }
};
</script>