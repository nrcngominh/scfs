<template>
  <div class="header-container">
    <div class="header-wrapper">
      <div class="header-content wrapper">
        <nav class="left-nav">
          <div class="logo">
            <img :src="logoUrl" alt="Logo" />
          </div>

          <div
            class="toggle-button padding-top-nav"
            @click="showDropdown = !showDropdown"
            :class="{'nav-dropped': showDropdown}"
          >
            <img :src="menuButtonUrl" alt="Logo" />
          </div>

          <ul class="nav-tabs-ul padding-top-nav">
            <li>
              <div>HOME</div>
            </li>

            <li>
              <div>ABOUT US</div>
            </li>
          </ul>
        </nav>

        <nav class="right-nav">
          <ul class="nav-icons-ul">
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
        </nav>
      </div>
    </div>

    <div class="dropdown-wrapper">
      <div class="nav-dropdown" :class="{'nav-dropdown-active': showDropdown}">
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
export default {
  name: "Header",
  data() {
    return {
      showDropdown: false
    };
  },
  computed: {
    menuButtonUrl() {
      return this.showDropdown
        ? require("@/assets/images/close-menu.svg")
        : require("@/assets/images/open-menu.svg");
    },
    logoUrl() {
      return this.$store.state.navOnTopSlide
        ? require("@/assets/images/logo-white.png")
        : require("@/assets/images/logo.png");
    }
  }
};
</script>