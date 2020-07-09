<template>
  <nb-container>
    <nb-header>
      <nb-left>
        <nb-button transparent :onPress="() => this.props.navigation.goBack()">
          <nb-icon name="arrow-back" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>Ví Voucher</nb-title>
      </nb-body>
      <nb-right/>
    </nb-header>
  <view class="container">
    <text>This is the App Details screen</text>
    <button title="Go to home screen" @press="goToHomeScreen"></button>
  </view>
  </nb-container>
</template>

<script>
export default {
  props: {
    navigation: { type: Object }
  },
  methods: {
    goToHomeScreen() {
      this.navigation.navigate("Home");
    }
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