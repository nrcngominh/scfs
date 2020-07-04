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
          <div class="price">
            <h3>Price Filter</h3>
            <div class="price-filter">
              <div>Min</div>
              <div>Max</div>
              <div>
                <input type="text" v-model="moneyMinValue" />
                <span>.000đ</span>
              </div>
              <div>
                <input type="text" v-model="moneyMaxValue" />
                <span>.000đ</span>
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
        </nav>
      </div>

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
              <div class="buy">
                <button>Buy</button>
              </div>
              <div class="add">
                <img src="@/assets/images/cart.svg" alt="favorite" />
              </div>
              <div class="favorite">
                <img src="@/assets/images/heart.svg" alt="favorite" />
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
  computed: {
    ...mapState("food", ["allCategories"]),
    ...mapFields("food", ["searchPattern", "moneyMinValue", "moneyMaxValue"]),
    ...mapGetters("food", ["getFoodsFiltered"])
  },
  methods: {
    ...mapMutations("food", ["setMoneyMinMax"]),
    ...mapActions("food", ["fetchAllFoods"])
  },
  async mounted() {
    await this.fetchAllFoods();
  }
};
</script>