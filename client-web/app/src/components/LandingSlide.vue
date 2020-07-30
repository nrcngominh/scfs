<template>
  <div class="slide-container">
    <img src="@/assets/images/slide2.webp" />
    <div class="slide-content">
      <div class="wrapper">
        <h1 class="full-title">Welcome to BKFOOD</h1>
        <h1 class="short-title">BKFOOD</h1>
        <p>Smart Food Court System for HCMUT</p>
        <!-- <button>Order Now!</button> -->
        <article class="order-button">
          <button @click="goToMenu()">Order Now!</button>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingSlide",
  methods: {
    goToMenu(){
      this.$router.push("/menu");
    }
  }
};
</script>