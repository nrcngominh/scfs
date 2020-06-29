<template>
  <nb-container>
    <scroll-view orientation="horizontal" v-for="item in categories" :key="item.category">
      <nb-view :style="{flex: 1}">
        <nb-list-item>
          <nb-left>
            <nb-text class="title-food">{{ item.category }}</nb-text>
          </nb-left>
          <nb-body />
          <nb-text class="title-right">Xem tất cả</nb-text>
        </nb-list-item>

        <nb-view :style="{height: 200, marginTop: 20}">
          <scroll-view horizontal="{true}">
            <nb-card
              :style="{height: 180, marginRight: 6}"
              v-for="food in item.foods"
              :key="food._id"
            >
              <!-- <image
                :source="{uri: food.img}"
                :style="{flex: 1, resizeMode: 'cover', width: 130, height: 150}"
              />-->
              <nb-card-item>
                <nb-body :style="{bottom: 5}" class="abcd">
                  <nb-h2 class="title-food">{{food.name}}</nb-h2>
                  <nb-h3 class="title-price">Giá: {{food.price}} đ</nb-h3>
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
import React, { Component } from "react";
import axios from "axios";

// import FoodService from "../../services/food-service.js";
export default {
  data() {
    return {
      categories: []
    };
  },
  async mounted() {
    try {
      const res = await axios.get("/api/food");
      this.categories = res.data;
      console.log(this.categories.map(item => item.category));
    } catch (error) {}
  }
};
</script>
<style lang="scss">
.title-food {
  font-size: 15;
  font-weight: 500;
}
.title-price {
  font-size: 12;
}
.title-right {
  font-size: 12;
  color: green;
}
.title-food {
  color: red;
}
</style>