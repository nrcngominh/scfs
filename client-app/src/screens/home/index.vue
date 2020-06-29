<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
    <!-- header-home -->
    <nb-header v-if="seg === 1" searchBar rounded>
      <nb-item>
        <nb-icon active name="search" />
        <nb-input placeholder="Search" />
        <nb-icon active name="people" />
      </nb-item>
      <nb-button transparent>
        <nb-text>Search</nb-text>
      </nb-button>
    </nb-header>
    <!-- header-cart -->
    <nb-header v-if="seg === 2">
      <nb-left/>
      <nb-body>
        <nb-title>Đơn hàng hiện tại</nb-title>
      </nb-body>
    </nb-header>
    <!-- header-notification -->
    <nb-header v-if="seg === 3">
      <nb-left> </nb-left>
      <nb-body>
        <nb-title>Thông báo</nb-title>
      </nb-body>
    </nb-header>
    <!-- header-contact -->
    <nb-header v-if="seg === 4">
      <nb-body>
        <nb-title>Thông tin tài khoản</nb-title>
      </nb-body>
    </nb-header>

    <!-- content -->
    <nb-content padder>
      <!-- content-home -->
      <nb-grid>
        <nb-row><intro-slide class="intro_slide" v-if="seg === 1"/></nb-row>
        <nb-row><tab-category v-if="seg === 1"/></nb-row>
      </nb-grid>
      
      <!-- content-cart -->
      
      <!-- content-notification -->
      <nb-text v-if="seg === 3">Notification</nb-text>
      <!-- content-contact -->
      <contact-tab v-if="seg === 4"/>
    </nb-content>

    <!-- footer -->
    <nb-footer>
      <nb-footer-tab>
        <nb-button :active="tab1" :onPress="toggleTab1" >
          <nb-icon type="FontAwesome" name="home" :active="tab1" />
          <nb-text class="title">Trang chủ</nb-text>
        </nb-button>

        <nb-button v-for="data in datas"
        :key="data.route"
        :active="tab2"
        button
        :onPress="() => toggleTab2(data)" vertical badge>
          <nb-badge>
            <nb-text>10</nb-text>
          </nb-badge>
          <nb-icon type="FontAwesome" name="clipboard" :active="tab2" />
          <nb-text class="title">Đơn hàng</nb-text>
        </nb-button>

        <nb-button :active="tab3" :onPress="toggleTab3" vertical badge>
          <nb-badge class="badge-3-bg">
            <nb-text>51</nb-text>
          </nb-badge>
          <nb-icon type="FontAwesome" name="bell" :active="tab3" />
          <nb-text class="title">Thông báo</nb-text>
        </nb-button>

        <nb-button :active="tab4" :onPress="toggleTab4">
          <nb-icon type="FontAwesome" name="user-circle" :active="tab4" />
          <nb-text class="title">Tôi</nb-text>
        </nb-button>
      </nb-footer-tab>
    </nb-footer>
  </nb-container>
</template>

<script>
import IntroSlide from "./introSlide"
import TabCategory from "./tabCategory"
import ContactTab from "./contactTab"
//import NotificationTab from "./notificationTab"
export default {
  props: {
    navigation: {
    type: Object
    }
  },
  components: { IntroSlide, TabCategory, ContactTab },
  data() {
    return {
      tab1: true,
      tab2: false,
      tab3: false,
      tab4: false,
      seg: 1,
      datas: [
        {
          route: "HelloWorld",
        }
      ],
    };
  },
  
  methods: {
    toggleTab1() {
      this.tab1 = true;
      this.tab2 = false;
      this.tab3 = false;
      this.tab4 = false;
      this.seg = 1;
    },
    toggleTab2() {
      this.tab1 = false;
      this.tab2 = true;
      this.tab3 = false;
      this.tab4 = false;
      this.seg = 2;
    },
    toggleTab3() {
      this.tab1 = false;
      this.tab2 = false;
      this.tab3 = true;
      this.tab4 = false;
      this.seg = 3;
    },
    toggleTab4() {
      this.tab1 = false;
      this.tab2 = false;
      this.tab3 = false;
      this.tab4 = true;
      this.seg = 4;
    }
  }
};
</script>

<style>
.badge-3-bg {
  background-color: green;
}
.mt-5 {
  margin-top: 5px;
}
.intro_slide {
  height: 220;
}
.title {
  font-size: 10;
}
</style>
