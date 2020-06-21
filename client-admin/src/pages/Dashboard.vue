<template>
  <div class="content dashboard-content">
    <span v-for="food in foods" :key="food.name">
      <md-card v-if="food.category === selectedCategory">
        <md-card-header>
          <md-card-header-text>
            <div class="md-title">{{ food.category }}</div>
            <div class="md-subhead">Normal size</div>
          </md-card-header-text>

          <md-card-media>
            <img src="/assets/examples/avatar-2.jpg" alt="People" />
          </md-card-media>
        </md-card-header>

        <md-card-actions>
          <md-button>Action</md-button>
          <md-button>Action</md-button>
        </md-card-actions>
      </md-card>
    </span>
  </div>
</template>

<script>
import FoodService from "../services/food-service";

export default {
  name: "Dashboard",
  data() {
    return {
      selectedCategory: "breakfast",
      foods: []
    };
  },
  async mounted() {
    try {
      const res = await FoodService.getAll();
      this.foods = res.data.foods;
      console.log(this.foods);
    } catch (error) {
      console.log(error);
    }
  }
};
</script>
