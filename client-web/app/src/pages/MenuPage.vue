<template>
  <div class="menu-page">
    <div class="wrapper">
      <div class="menu-filter-wrapper">
        <nav class="menu-filter">
          <div class="search">
            <h3>Search</h3>
            <div class="search-container">
              <input type="text" v-model="searchPattern" placeholder="Search..." />
            </div>
          </div>

          <div class="dropdown-button" @click="toggleDropdown()" :class="{dropdown: dropdown}">
            <img src="@/assets/images/dropdown-arrow.svg" alt="dropdown-button" />
          </div>

          <div class="mobile-dropdown" :class="{hidden: !dropdown}">
            <div class="price">
              <h3>Price Filter</h3>
              <div class="price-filter">
                <div>
                  <div>Min</div>
                  <div>
                    <input type="text" v-model="moneyMinValue" />
                    <span>.000đ</span>
                  </div>
                </div>
                <div>
                  <div>Max</div>
                  <div>
                    <input type="text" v-model="moneyMaxValue" />
                    <span>.000đ</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="category">
              <h3>Category</h3>
              <div class="checkbox-wrapper">
                <div class="item" v-for="category in allCategories" :key="category._id">
                  <input type="checkbox" v-model="category.checked" />
                  <label>{{ category.name }}</label>
                </div>
              </div>
            </div>
            <div class="tag">
              <h3>Tag</h3>
              <div class="tag-wrapper">
                <div>Bò</div>
                <div>Xào</div>
                <div>Trà sữa</div>
                <div>Canh</div>
                <div>Chiên</div>
                <div>Bún</div>
                <div>Bánh</div>
                <div>Bún</div>
                <div>Bún</div>
                <div>Bánh</div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <article class="menu-wrapper">
        <article class="sort-wrapper">
          <div class="select-container">
            <select>
              <option value="">Sort by price: low to high</option>
              <option value="">Sort by price: high to low</option>
              <option value="">Sort by latest</option>
            </select>
          </div>
        </article>
      
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
                <img :src="favoriteUrl(food.isFavorite)" alt="favorite" />
              </div>
            </div>
          </article>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";
import { mapFields } from "vuex-map-fields";

export default {
  name: "MenuPage",
  data() {
    return {
      dropdown: false,
    };
  },
  computed: {
    ...mapState("customer/food", ["allCategories"]),
    ...mapState("account", ["customerLoggedIn"]),
    ...mapFields("customer/food", [
      "searchPattern",
      "moneyMinValue",
      "moneyMaxValue"
    ]),
    ...mapGetters("customer/food", ["getFoodsFiltered"])
  },
  methods: {
    ...mapMutations("customer/accountModal", ["openLoginTab"]),
    ...mapMutations("customer/food", ["setMoneyMinMax"]),
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
