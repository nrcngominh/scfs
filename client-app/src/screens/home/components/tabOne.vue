<template>
  <nb-content padder :style="{ marginTop: 0 }">
    <!-- <nb-card :style="{ flex: 0 }" v-for="food in foods"
    :key="food._id">
      <nb-card-item>
        <image square :source="{uri: food.img}" class="thumnail" />
        <nb-body :style="{marginLeft: 10}">
          <nb-h1 class="title-food">{{food.name}}</nb-h1>
          <nb-h3 class="title-price">Giá: {{food.price}} VNĐ</nb-h3>
          <nb-h3 class="title-price">{{food.description}}</nb-h3>
        </nb-body>
      </nb-card-item>
    </nb-card> -->
    
<nb-container>
    <nb-content>
      <nb-list>
        <nb-list-item>
          <nb-text>Simon Mignolet</nb-text>
        </nb-list-item>
        <nb-list-item>
          <nb-text>Nathaniel Clyne</nb-text>
        </nb-list-item>
        <nb-list-item>
          <nb-text>Dejan Lovren</nb-text>
        </nb-list-item>
      </nb-list>
    </nb-content>
  </nb-container>

  </nb-content>
</template>
<script>
import axios from 'axios'
import logo from "../../../../assets/images/xoi.jpg";
import logo1 from "../../../../assets/images/com-ga.jpg";
import FoodService from "../../../services/food-service.js"
export default {
  data() {
    return {
      logo,
      logo1,
      foods: []
    }
  },
  async mounted() {
    try {
      this.foods = await FoodService.getFoodByCategory('Rice')
    } catch (error) {

    }
  }
}
</script>
<style>
.thumnail {
  width: 90;
  height: 90;
}
.title-food {
  color: #000;
  font-weight: 400;
  font-size: 20;
}
.title-price {
  color: #000;
  font-size: 15;
}
</style>