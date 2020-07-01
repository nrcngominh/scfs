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
import * as React from 'react';
import HomeScreen from "./screens/home/";
import AccountScreen from "./screens/account";
import SettingAccountScreen from "./screens/account/settingAccount";
import IntroSlideScreen from "./screens/home/introSlide";
import CartScreen from "./screens/cart";
import NotificationScreen from "./screens/notification";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const IOSTabs = createBottomTabNavigator (
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({focused, tintColor}) => {
            return <MaterialCommunityIcons name="home" size={30} color={tintColor} />;
        }
      }
    },
    Cart: {
      screen: CartScreen,
      navigationOptions: {
        tabBarIcon: ({focused, tintColor}) => {
            return <MaterialCommunityIcons name="clipboard-text-outline" size={30} color={tintColor} />;
        }
      }
    },
    Notification: {
      screen: NotificationScreen,
      navigationOptions: {
        tabBarIcon: ({focused, tintColor}) => {
            return <MaterialCommunityIcons name="bell" size={30} color={tintColor} />;
        }
      }
    },
    Account: {
      screen:  AccountScreen,
      navigationOptions: {
        tabBarIcon: ({focused, tintColor}) => {
            return <MaterialCommunityIcons name="account-circle-outline" size={30} color={tintColor} />;
        }
      }
    }
  },
  {
    initialRouteName: "Home",
    tabBarOptions: {
      showIcon: true,
      activeTintColor: "#4286f4",
    }
  }
);
const StackNavigator = createStackNavigator(
  {
    IOSTabs,
    IntroSlide : IntroSlideScreen,
  },
  {
    initialRouteName: "IOSTabs",
    headerMode: "none"
  }
);
const AppNavigation = createAppContainer(StackNavigator)
export default {
  components: { Root, AppNavigation }
};
</script>
