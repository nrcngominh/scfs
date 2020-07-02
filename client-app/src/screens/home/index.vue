<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
    <!-- header-home -->
    <nb-header searchBar rounded>
      <nb-item>
        <nb-icon active name="search" />
        <nb-input placeholder="Search" />
        <nb-icon active name="people" />
      </nb-item>
      <nb-button transparent>
        <nb-text>Search</nb-text>
      </nb-button>
    </nb-header>
    <!-- content -->
    <nb-content padder>
      <nb-grid>
        <nb-row><intro-slide class="intro_slide"/></nb-row>
        <nb-row>
          <scroll-view>
      <nb-view orientation="horizontal" :style="{height: 220, marginTop: 20}" v-for="item in categories" :key="item.category">
        <nb-view :style="{flex: 1}">
          <nb-list-item>
            <nb-left>
              <nb-text class="title-food">{{ item.category }}</nb-text>
            </nb-left>
            <nb-body />
            <nb-text class="title-right">Xem tất cả</nb-text>
          </nb-list-item>

          <nb-view :style="{height: 200}">
            <scroll-view horizontal="{true}">
              <nb-button v-for="food in item.foods"
              :key="food._id" :style="{height: 180, backgroundColor: 'none', marginTop: 10}"
              :onPress="() => this.props.navigation.navigate('DetailFood')">
              <nb-card
              :style="sylesObj.touch_card"
              >
                <image
                  class="image"
                  :source="{uri: food.img}"
                  :style="{flex: 1, resizeMode: 'cover', width: 130, height: 150}"
                />
                <nb-card-item class="card-item-1">
                  <nb-body :style="{bottom: 5}">
                    <nb-h2 class="title-food">{{food.name}}</nb-h2>
                    <nb-h3 class="title-price">Giá: {{food.price}} đ</nb-h3>
                  </nb-body>
                </nb-card-item>
              </nb-card>
              </nb-button>
            </scroll-view>
          </nb-view>
        </nb-view>
      </nb-view>
    <scroll-view>
        </nb-row>
      </nb-grid>
    </nb-content>

  </nb-container>
</template>

<script>
import { StyleSheet, Text, View } from "react-native";
import IntroSlide from "./introSlide";
import React, { Component } from "react";
import axios from "axios";
export default {
  props: {
    navigation: {
    type: Object
    }
  },
  components: { IntroSlide },
  data() {
    return {
      categories: [],
      sylesObj: {
        touch_card: {
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,
          elevation: 4,
          height: 180,
          marginRight: 6
        }
      }
    };
  },
  async mounted() {
    try {
      const res = await axios.get("/api/food");
      this.categories = res.data;
      console.log(this.categories.map(item => item.category));
    } catch (error) {}
  },
};
</script>

<style>
.card-item-1 {
  width: 130;
}
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
.card-item-image {
  flex: 1;
  height: 200;
}
.badge-3-bg {
  background-color: green;
}
.mt-5 {
  margin-top: 5px;
}
.intro_slide {
  height: 220;
}
.title {
  font-size: 10;
}
</style>
