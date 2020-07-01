<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
    <!-- header-home -->
    <nb-header searchBar rounded>
      <nb-item>
        <nb-icon active name="search" />
        <nb-input placeholder="Search" />
        <nb-icon active name="people" />
      </nb-item>
      <nb-button transparent>
        <nb-text>Search</nb-text>
      </nb-button>
    </nb-header>

    <!-- content -->
    <nb-content padder>
      <nb-grid>
        <nb-row><intro-slide class="intro_slide"/></nb-row>
        <nb-row><tab-category/></nb-row>
      </nb-grid>
    </nb-content>

  </nb-container>
</template>

<script>
import IntroSlide from "./introSlide.vue"
import TabCategory from "./tabCategory.vue"
export default {
  props: {
    navigation: {
    type: Object
    }
  },
  components: { IntroSlide, TabCategory },
  data() {
    return {
    };
  },
};
</script>

<style>
.badge-3-bg {
  background-color: green;
}
.mt-5 {
  margin-top: 5px;
}
.intro_slide {
  height: 220;
}
.title {
  font-size: 10;
}
</style>
