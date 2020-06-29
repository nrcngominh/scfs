<template>
  <nb-container>

    <scroll-view orientation="horizontal">
      <nb-view :style="{flex: 1}">
        <nb-list-item>
          <nb-left>
            <nb-text class="title-food">
              Đồ
            </nb-text>
          </nb-left>
          <nb-body/>
          <nb-text class="title-right">
              Xem tất cả
            </nb-text>
        </nb-list-item>
        <nb-view :style="{height: 200, marginTop: 20}">
          <scroll-view horizontal={true}>
            
            <nb-card :style="{height: 180, marginRight: 6}" v-for="food in foods" 
            :key="food.name">
              <image
                :source="{uri: food.img}"
                :style="{flex: 1, resizeMode: 'cover', width: 130, height: 150}"
              />      
              <nb-card-item>
                <nb-body :style="{bottom: 5}">
                  <nb-h2 class="title-food">{food.name}</nb-h2>
                  <nb-h3 class="title-price">Giá: {food.price} đ</nb-h3>
                </nb-body>
              </nb-card-item>   
            </nb-card>

          </scroll-view>
        </nb-view>
      </nb-view>
    </scroll-view>

    
  </nb-container>
</template>

<script>
import React, {Component} from "react";

import FoodService from "../../services/food-service.js"
export default {
  data() {
    return {
      foods: [],
      categories: []
    }
  },
  async mounted() {
    try {
      this.foods = await FoodService.getFoodByCategory('Rice');
      this.categories = await FoodService.getCategory();
    } catch (error) {

    }
  }
};

</script>
<style scoped>
.title-food {
  font-size: 15;
  font-weight: 500;
}
.title-price {
  font-size: 12;
}
.title-right {
  font-size: 12;
  color: green
}
</style>