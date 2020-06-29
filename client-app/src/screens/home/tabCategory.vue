<template>
  <nb-container>
    <nb-tabs :renderTabBar="getScollableTabComp">
      <nb-tab heading="Breakfast">
        <tab-one />
      </nb-tab>
      <nb-tab heading="Rice">
        <tab-two />
      </nb-tab>
      <nb-tab heading="Drink">
        <tab-three />
      </nb-tab>
    </nb-tabs>
  </nb-container>
</template>

<script>
import React from "react";
import { ScrollableTab } from "native-base";
import TabOne from "./components/tabOne";
import TabTwo from "./components/tabTwo";
import TabThree from "./components/tabThree";

export default {
  components: { TabOne, TabTwo, TabThree},
  methods: {
    getScollableTabComp() {
      return <ScrollableTab />;
    }
  }
};

</script>
