<template>
  <div class="main-container">
    <my-header
      class="my-header"
      :class="{'on-top': $store.state.navOnTopSlide,
                       scrolled: !$store.state.navOnTopSlide}"
    />

    <div class="content">
      <router-view />
    </div>

    <my-footer class="footer wrapper" />
  </div>
</template>

<script>
import MyHeader from "../components/Header";
import MyFooter from "../components/Footer";

export default {
  name: "MainLayout",
  components: {
    MyHeader,
    MyFooter
  },
  data() {
    return {
      isOnTop: true
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.$store.commit("setNavOnTopSlide", window.scrollY === 0);
    }
  },
  async beforeCreate() {
    try {
      const foodRes = await this.$http.get("/api/food");
      this.$store.commit(
        "setCategories",
        foodRes.data.map(obj => {
          return {
            label: obj.category,
            _id: obj.foods[0].categoryId
          };
        })
      );

      let foods = [];
      foodRes.data.forEach(obj => {
        foods = foods.concat(obj.foods);
      });
      this.$store.commit("setFoods", foods);
    }
    catch (error) {
      console.log(error);
    }

    try {
      const cartRes = await this.$http.get("/api/cart");
      this.$store.commit("setCart", cartRes.data);
    }
    catch (error) {
      console.log(error);
    }
  }
};
</script>