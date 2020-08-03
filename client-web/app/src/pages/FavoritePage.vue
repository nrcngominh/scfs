<template>
  <div class="favorite-page">
    <div class="wrapper">
      <article class="menu-wrapper">
        <div class="food-container">
          <article class="food-item" v-for="food in getFoodsFiltered" :key="food._id">
            <div class="food-image">
              <div class="food-image-content">
                <img :src="food.img" alt="food" />
              </div>
            </div>
            <div class="food-content">
              <h3>{{food.name}}</h3>
              <p>Giá: {{food.price}} VNĐ</p>
            </div>
            <div class="action">
              <div class="buy" @click="addAndBuy(food)">
                <button>Buy</button>
              </div>
              <div class="add" @click="addFoodToCart(food)">
                <img src="@/assets/images/cart.svg" alt="favorite" />
              </div>
              <div :id="food._id" @click="toggleFavorite(food)" class="favorite">
                <img src="@/assets/images/heart2.png" alt="favorite" />
              </div>
            </div>
          </article>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "MenuPage",
  data() {
    return {
      dropdown: false,
    };
  },
  computed: {
    ...mapGetters("customer/food", ["getFoodsFiltered"]),
    ...mapGetters("customer/food", ["getFoodsFavorite"])
  },
  methods: {
    ...mapActions("customer/food", ["fetchAllFoods"]),
    ...mapActions("customer/cart", ["addToCart"]),
    async addAndBuy(food) {
      if (this.customerLoggedIn) {
        await this.addToCart(food);
        this.$router.push("/cart");
      } else {
        this.openLoginTab();
      }
    },
    toggleDropdown() {
      this.dropdown = !this.dropdown;
    },
    toggleFavorite(food) {
      console.log(food._id)
    },
    favoriteUrl(foodIsFavorite) {
      return foodIsFavorite
        ? require("@/assets/images/heart1.png")
        : require("@/assets/images/heart2.png");
    },
    async addFoodToCart(food) {
      if (this.customerLoggedIn) {
        await this.addToCart(food);
      } else {
        this.openLoginTab();
      }
    }
  },
  mounted() {
    this.fetchAllFoods();
  }
};
</script>
