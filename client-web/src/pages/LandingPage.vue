<template>
  <div class="landing-page">
    <landing-slide class="slide"></landing-slide>
    <section class="food-container wrapper">
      <div class="food-item" v-for="food in foods" :key="food.name">
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
            <div class="btn btn-primary">Mua</div>
            <div class="btn btn-success">Thêm vào giỏ</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import LandingSlide from "@/components/LandingSlide";

export default {
  name: "LandingPage",
  components: {
    LandingSlide
  },
  data() {
    return {};
  },
  computed: {
    foods() {
      return [];
    }
  }
};
</script>