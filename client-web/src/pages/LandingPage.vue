<template>
  <div class="landing-page">
    <landing-slide class="slide"></landing-slide>

    <section class="categories">
      <article class="description">
        <h2>
          MORE THAN
          <span>200 FOODS</span> TO ORDER
        </h2>
        <p>Welcome to Smart Food Court System of Ho Chi Minh University of Technology</p>
      </article>

      <div class="wrapper">
        <div class="category-container">
          <article class="category-item" v-for="item in arr" :key="item">
            <div class="category-image">
              <div class="category-image-content">
                <img src="/images/1592813725496.jpg" alt="category" />
              </div>
            </div>
            <div class="category-content">
              <h3>BREAKFAST</h3>
              <p>Description</p>
            </div>
          </article>
        </div>
      </div>

      <article class="category-button-wrapper">
        <button>MORE CATEGORIES</button>
      </article>
    </section>

    <section class="how-to-order">
      <div class="wrapper">HOW TO ORDER</div>
    </section>
  </div>
</template>

<script>
import LandingSlide from "@/components/LandingSlide";
import { mapMutations } from "vuex";

export default {
  name: "LandingPage",
  data() {
    return {
      arr: [1, 2, 3, 4]
    };
  },
  components: {
    LandingSlide
  },
  methods: {
    ...mapMutations("header", ["enterLandingPage", "exitLandingPage"])
  },
  mounted() {
    this.enterLandingPage();
  },
  beforeDestroy() {
    this.exitLandingPage();
  }
};
</script>