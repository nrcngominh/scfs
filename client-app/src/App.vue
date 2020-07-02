<template>
  <root>
    <app-navigation></app-navigation>
  </root>
</template>

<script>
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator
} from "vue-native-router";
import { Root } from "native-base";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as React from 'react';
import HomeScreen from "./screens/home/";
import DetailFoodScreen from "./screens/home/detailFood";
import CartScreen from "./screens/cart";
import NotificationScreen from "./screens/notification";
import AccountScreen from "./screens/account";
import SettingAccountScreen from "./screens/account/settingAccount";
import CouponAccountScreen from "./screens/account/couponAccount";
import PaymentAccountScreen from "./screens/account/paymentAccount";
import TransactionAccountScreen from "./screens/account/transactionAccount";
import FeedbackAccountScreen from "./screens/account/feedbackAccount";
import LicenseAccountScreen from "./screens/account/licenseAccount";

const IOSTabs = createBottomTabNavigator (
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({focused, tintColor}) => {
            return <MaterialCommunityIcons name="home" size={30} color={tintColor} />;
        },
        tabBarLabel: 'Trang chủ'
      }
    },
    Cart: {
      screen: CartScreen,
      navigationOptions: {
        tabBarIcon: ({focused, tintColor}) => {
            return <MaterialCommunityIcons name="clipboard-text-outline" size={30} color={tintColor} />;
        },
        tabBarLabel: 'Đơn hàng'
      }
    },
    Notification: {
      screen: NotificationScreen,
      navigationOptions: {
        tabBarIcon: ({focused, tintColor}) => {
            return <MaterialCommunityIcons name="bell" size={30} color={tintColor} />;
        },
        tabBarLabel: 'Thông báo'
      }
    },
    Account: {
      screen:  AccountScreen,
      navigationOptions: {
        tabBarIcon: ({focused, tintColor}) => {
            return <MaterialCommunityIcons name="account-circle-outline" size={30} color={tintColor} />;
        },
        tabBarLabel: 'Tôi'
      },
    },
  },
  {
    initialRouteName: "Home",
    tabBarOptions: {
      showIcon: true,
      activeTintColor: "#4286f4",
    },
  }
);
const StackNavigator = createStackNavigator(
  {
    IOSTabs,
    DetailFood : {screen: DetailFoodScreen},
    SettingAccount: {screen: SettingAccountScreen},
    CouponAccount: {screen: CouponAccountScreen},
    TransactionAccount: {screen: TransactionAccountScreen},
    PaymentAccount: {screen: PaymentAccountScreen},
    FeedbackAccount: {screen: FeedbackAccountScreen},
    LicenseAccount: {screen: LicenseAccountScreen}
  },
  {
    initialRouteName: "IOSTabs",
    headerMode: "none"
  },
);
const AppNavigation = createAppContainer(StackNavigator)
export default {
  components: { Root, AppNavigation }
};
</script>
