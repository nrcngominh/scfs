<template>
  <div class="landing-page">
    <landing-slide class="slide"></landing-slide>

    <section class="food">
      <div class="food-container wrapper">
        <div class="food-item" v-for="food in allFoods" :key="food.name">
          <div class="food-image">
            <div class="food-image-content">
              <img :src="food.img" alt="Food image" />
            </div>
          </div>
          <div class="food-body">
            <div class="food-content">
              <h3 class="title">{{ food.name }}</h3>
              <p class="description">{{ food.price }}</p>
              <p class="price">Giá: {{ food.price }} VNĐ</p>
            </div>
            <div class="order-buttons">
              <button class="buy">Mua</button>
              <button class="add-to-cart">Thêm vào giỏ</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="about-us">
      <div class="wrapper"></div>
    </section>
  </div>
</template>

<script>
import LandingSlide from "@/components/LandingSlide";
import { mapMutations, mapState, mapActions } from "vuex";

export default {
  name: "LandingPage",
  components: {
    LandingSlide
  },
  computed: {
    ...mapState("food", ["allFoods"])
  },
  methods: {
    ...mapMutations("header", ["enterLandingPage", "exitLandingPage"]),
    ...mapActions("food", ["fetchAllFoods"])
  },
  async mounted() {
    this.enterLandingPage();
    await this.fetchAllFoods();
  },
  beforeDestroy() {
    this.exitLandingPage();
  }
};
</script>