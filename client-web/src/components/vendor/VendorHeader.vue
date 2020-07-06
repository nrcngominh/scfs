<template>
  <div class="header-container solid">
    <div class="header-wrapper">
      <div class="header-content wrapper">
        <div class="toggle-button-wrapper">
          <div class="toggle-button" id="nav-toggle-button">
            <img :src="menuButtonUrl" alt="Logo" />
          </div>
        </div>

        <div class="logo-wrapper">
          <div class="logo" @click="goToHome()">
            <img :src="logoUrl" alt="Logo" />
          </div>
        </div>

        <nav class="nav-left">
          <ul class="nav-tab" id="nav-dropdown">
            <li @click="goToDashboard()">
              <div>DASHBOARD</div>
            </li>
            <li>
              <div>ABOUT</div>
            </li>
          </ul>
        </nav>

        <nav class="nav-right">
          <ul class="nav-icon">
            <li>
              <img src="@/assets/images/user.svg" alt="Logo" />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  computed: {
    isTop() {
      return window.scrollY === 0;
    },
    menuButtonUrl() {
      return require("@/assets/images/open-menu.svg");
    },
    logoUrl() {
      return require("@/assets/images/logo.png");
    }
  },
  methods: {
    goToHome() {
      this.$router.push("/");
    },
    goToDashboard() {
      this.$router.push("/vendor");
    }
  }
};
</script>