<template>
  <nb-container>
    <nb-header>
      <nb-left>
        <nb-button transparent :onPress="() => this.props.navigation.goBack()">
          <nb-icon name="arrow-back" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>Góp ý</nb-title>
      </nb-body>
      <nb-right/>
    </nb-header>
  <view class="container">
    <Modal
        :style="{width: 500, height: 500}"
        animationType="slide"
        transparent={true}
        visible="true"
      >
      <button title="Go to home" @press="() => this.setModalVisible(!modalVisible)"></button>
    </Modal>
    <text>This is the App Details screen</text>
    <button title="Go to home screen" @press="setModalVisible(visible)"></button>
  </view>
  </nb-container>
</template>

<script>
import React, { Component, useState, setState } from "react";
import {
  Modal
} from "react-native";

export default {
  props: {
    navigation: { type: Object }
  },
  data() {
    return {
      state: {
        modalVisible: true,
        visible: true
      }
    }
  },
  methods: {
    goToHomeScreen() {
      this.navigation.navigate("Home");
    },
    setModalVisible(visible) {
      this.modalVisible = this.visible;
    },
  }
}
</script>

<style>
.container {
  align-items: center;
  justify-content: center;
  flex: 1;
}
</style>