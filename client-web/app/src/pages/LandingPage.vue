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
      <article class="wrapper">
        <h2>HOW TO ORDER</h2>
        <p>Follow the Steps</p>
        <article class="wrapper-container">
          <div class="wrapper-content">
            <div class="logo-content">
              <img src="@/assets/images/momo.png" alt="momo" />
            </div>
            <div class="number-content">1</div>
            <div class>Choose your location</div>
          </div>
          <div class="wrapper-content">
            <div class="logo-content">
              <img src="@/assets/images/momo.png" alt="momo" />
            </div>
            <div class="number-content">1</div>
            <div class>Choose your location</div>
          </div>
          <div class="wrapper-content">
            <div class="logo-content">
              <img src="@/assets/images/momo.png" alt="momo" />
            </div>
            <div class="number-content">1</div>
            <div class>Choose your location</div>
          </div>
          <div class="wrapper-content">
            <div class="logo-content">
              <img src="@/assets/images/momo.png" alt="momo" />
            </div>
            <div class="number-content">1</div>
            <div class>Choose your location</div>
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
    ...mapMutations("customer/header", ["enterLandingPage", "exitLandingPage"])
  },
  mounted() {
    this.sockets.listener.subscribe("SERVER_SAY_HI", data => {
      console.log(data.message);
    });

    this.$socket.emit("CLIENT_SAY_HI", "Hello from client");
    this.enterLandingPage();
  },
  beforeDestroy() {
    this.exitLandingPage();
  }
};
</script>