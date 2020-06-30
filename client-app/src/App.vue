<template>
  <root>
    <app-navigation></app-navigation>
  </root>
</template>

<script>
import {
  createAppContainer,
  createStackNavigator,
  createDrawerNavigator
} from "vue-native-router";
import { Root } from "native-base";
import HomeScreen from "./screens/home";
import ScrollableTabaScreen from "./screens/home/tabCategory";
import AccountScreen from "./screens/account";
import SettingAccountSreen from "./screens/account/settingAccount"
const Drawer = createDrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Account: {screen: AccountScreen},
  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: AccountScreen
  }
);

const AppNavigation = createAppContainer(
  createStackNavigator(
    {
      Drawer: { screen: Drawer },
      ScrollableTab: { screen: ScrollableTabaScreen },
      SettingAccount: {screen: SettingAccountSreen}
    },
    {
      initialRouteName: "Drawer",
      headerMode: "none"
    }
  )
);
export default {
  components: { Root, AppNavigation }
};
</script>
