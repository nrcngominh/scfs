<template>
  <nb-container :style="{ backgroundColor: '#fff', height: '100%' }">
    <nb-view class="view">
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
        :onPress="() => handleListItemClick(listItem)">
          <nb-left>
            <nb-text>
              {{ listItem.text }}
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
  props: {
    navigation: {
    type: Object
    }
  },
  components: { SettingAccount },
  data() {
    return {
      accountImage,
      listItemArr: [
        {
          route: "SettingAccount",
          text: "Cài đặt"
        },
        {
          route: "NotificationAccount",
          text: "Thông báo"
        },
        {
          route: "CouponAccount",
          text: "Mã giảm giá"
        }
      ]
    };
  },
  methods: {
    handleListItemClick(dataObj) {
      this.navigation.navigate(dataObj.route);
    }
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
