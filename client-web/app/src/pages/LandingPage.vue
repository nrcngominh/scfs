<template>
  <div class="landing-page">
    <landing-slide class="slide"></landing-slide>

    <section class="categories">
      <article class="description wrapper">
        <h2>
          MORE THAN
          <span>200 FOODS</span> TO ORDER
        </h2>
        <p>Welcome to Smart Food Court System of Ho Chi Minh University of Technology</p>
      </article>

      

       <div class="wrapper">
        <div class="category-container">
          <!-- line1 -->
          <article class="category-item">
            <div class="category-image">
              <div class="category-image-content">
                <img src="@/assets/images/breakfast.png" alt="category" />
              </div>
            </div>
            <div class="category-content">
              <h3>BREAKFAST</h3>
              <p>Provides enough nutrition for the start of a new day</p>
            </div>
          </article>
          <!-- line2 -->
          <article class="category-item">
            <div class="category-image">
              <div class="category-image-content">
                <img src="@/assets/images/rice.jpg" alt="category" />
              </div>
            </div>
            <div class="category-content">
              <h3>RICE</h3>
              <p>The perfect dish to blend everything</p>
            </div>
          </article>
          <!-- line3 -->
          <article class="category-item">
            <div class="category-image">
              <div class="category-image-content">
                <img src="@/assets/images/vegetarian.jpg" alt="category" />
              </div>
            </div>
            <div class="category-content">
              <h3>VEGETARIAN DISHES</h3>
              <p>As healthy and nutritous as you can get</p>
            </div>
          </article>
          <!-- line4 -->
          <article class="category-item">
            <div class="category-image">
              <div class="category-image-content">
                <img src="@/assets/images/drink.jpg" alt="category" />
              </div>
            </div>
            <div class="category-content">
              <h3>DRINK</h3>
              <p>Stay hydrated and refreshed</p>
            </div>
          </article>
        </div>
      </div>
      
      <article class="category-button-wrapper">
        <button @click="goToMenu()">MORE CATEGORIES</button>
      </article>
    </section>

    <section class="how-to-order">
      <article class="wrapper">
        <h2>HOW TO ORDER</h2>
        <p>Follow the Steps</p>
        <article class="wrapper-container">
          <div class="wrapper-content">
            <div class="logo-content">
              <img src="@/assets/images/search.png" alt="step1" />
            </div>
            <div class="number-content">1</div>
            <div class>Select Item</div>
          </div>
          <div class="wrapper-content">
            <div class="logo-content">
              <img src="@/assets/images/vendor.png" alt="step2" />
            </div>
            <div class="number-content">2</div>
            <div class>Choose Vendor</div>
          </div>
          <div class="wrapper-content">
            <div class="logo-content">
              <img src="@/assets/images/payment.png" alt="step3" />
            </div>
            <div class="number-content">3</div>
            <div class>Make your order</div>
          </div>
          <div class="wrapper-content">
            <div class="logo-content">
              <img src="@/assets/images/takeaway.png" alt="step4" />
            </div>
            <div class="number-content">4</div>
            <div class>Take away</div>
          </div>
        </article>
      </article>
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
    ...mapMutations("header", ["enterLandingPage", "exitLandingPage"]),
    goToMenu() {
      this.$router.push("/menu");
    }
  },
  mounted() {
    this.enterLandingPage();
  },
  beforeDestroy() {
    this.exitLandingPage();
  }
};
</script>