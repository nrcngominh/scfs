<template>
<nb-container>
  <view>
    <nb-button
    title="hellow"
    :onPress="setModalVisible">
    <text>aaaa</text>
    </nb-button>
      <view
      animationType="slide"
      transparent
      direction="up"
      :class="{hidden: isActive}"
      :style="styleObj.view">
        <view :style="{backgroundColor: 'red', height: 500}">
          <button title="Hello World" :onPress="setModalVisible">hello world</button>
        </view>
      </view>
  </view>
</nb-container>
</template>
<script>
import React, { Component, useState } from "react";
import {Modal} from "react-native";

export default {
  data() {
    return {
      isActive: false,
      styleObj: {
        view: {
          marginTop: 50,
          // transitionDuration: 500,
          // animationDuration: 500,
          // animationTension: 300,
          // transparentDuration: 500
        }
      }
    }
  },
  methods: {
    setModalVisible() {
      this.isActive = !this.isActive;
    }
  }
};
</script>
<style scoped>
.hidden {
  display: none;
}
</style>