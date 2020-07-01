<template>
  <nb-container :style="{ backgroundColor: '#fff', height: '100%' }">
    <nb-header>
      <nb-body>
        <nb-title>Thông tin tài khoản</nb-title>
      </nb-body>
    </nb-header>
    <nb-view class="view" :style="{marginTop: 15}">
      <image
        :source="accountImage"
        class="account-image"
      /> 
      <nb-text>user name</nb-text>
    </nb-view>
    <nb-content padder>
      <nb-list>
        <nb-list-item v-for="listItem in listItemArr" 
        :key="listItem.route"
        button
        :onPress="() => this.navigation.navigate(listItem.route)">
          <nb-left>
            <nb-text>
              Cài đặt
            </nb-text>
          </nb-left>
          <nb-right>
            <nb-icon name="arrow-forward"></nb-icon>
          </nb-right>
        </nb-list-item>
      </nb-list>
    </nb-content>
  </nb-container>
</template>
<script>
import SettingAccount from "./settingAccount.vue"
import accountImage from "../../../assets/images/avatar.png";
export default {
  components: { SettingAccount },
  data() {
    return {
      accountImage,
      listItemArr: [
        {
          route: "SettingAccount",
          text: "Cài đặt"
        }
      ]
    };
  },
  methods: {
    
  }
};
</script>

<style>
.body-icon-color {
  color: #999;
}
.account-image {
    width: 90;
    height: 90;
}
.view {
  background-color: #fff;
  align-items: center;
  height: 120;
}
</style>
