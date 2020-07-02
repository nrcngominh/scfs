<template>
  <div class="header-container" :class="{transparent: transparentNav, solid: !transparentNav}">
    <div class="header-wrapper">
      <div class="header-content wrapper">
        <nav class="nav-left">
          <div class="toggle-button" @click="toggleDropdown()" :class="{'dropped': dropdown}">
            <img :src="menuButtonUrl" alt="Logo" />
          </div>

          <div class="logo">
            <img :src="logoUrl" alt="Logo" />
          </div>

          <ul class="nav-tab">
            <li>
              <div>HOME</div>
            </li>
            <li>
              <div>ABOUT US</div>
            </li>
          </ul>
        </nav>

        <nav class="nav-right">
          <ul class="nav-icon" :class="{'hidden': !loggedIn}">
            <li>
              <img src="@/assets/images/cart.svg" alt="Logo" />
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
              <div>REGISTER</div>
            </li>
            <li>
              <div @click="login()">LOGIN</div>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="dropdown-wrapper">
      <div class="nav-dropdown" :class="{'active': dropdown}">
        <ul>
          <li>
            <div>HOME</div>
          </li>
          <li>
            <div>ABOUT US</div>
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
    ...mapState("account", ["loggedIn"])
  },
  methods: {
    ...mapMutations("header", ["toggleDropdown"]),
    ...mapMutations("account", ["login"])
  }
};
</script>