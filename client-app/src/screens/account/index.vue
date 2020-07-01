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
        :onPress="() => this.props.navigation.navigate(listItem.route)">
          <nb-left>
            <nb-icon
            type="FontAwesome"
              :name="listItem.icon"
              :style="{ color: '#777', fontSize: 20, width: 30 }"
            />
            <nb-text>
              {{listItem.text}}
            </nb-text>
          </nb-left>
          <nb-right>
            <nb-icon name="arrow-forward"></nb-icon>
          </nb-right>
        </nb-list-item>
      </nb-list>
      <nb-view class="view-version">
      <nb-text class="version">Phiên bản 3.6</nb-text>
      <nb-text class="version">BK FOOD Corporation</nb-text>
      </nb-view>
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
          text: "Cài đặt",
          icon: "cog"
        },
        {
          route: "CouponAccount",
          text: "Ví Voucher",
          icon: "ticket"
        },
        {
          route: "TransactionAccount",
          text: "Hóa đơn",
          icon: "list-alt"
        },
        {
          route: "PaymentAccount",
          text: "Thanh toán",
          icon: "credit-card"
        },
        {
          route: "FeedbackAccount",
          text: "Góp ý",
          icon: "envelope-o"
        },
        {
          route: "LicenseAccount",
          text: "Chính sách quy định",
          icon: "question-circle-o"
        },
        {
          route: "LogoutAccount",
          text: "Đăng xuất",
          icon: "sign-out"
        }
      ]
    };
  },
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
.version {
  align-items: center;
  font-size: 12;
  color: gray;
}
.view-version {
  align-items: center;
  margin-top: 10
}
</style>
