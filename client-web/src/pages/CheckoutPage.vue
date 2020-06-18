<template>
  <div>
    
    <!--start header -->
    <Header />
    <!-- end header -->
    <!-- start introslide -->
  <!-- start footer -->
  <div class="mt-3">
      <Footer />
  </div>
  <!-- end footer -->
</div>
</template>
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script>
import AxiosService from '../services/axios-service'
import Footer from './Footer.vue';
import Header from './Header.vue';
import IntroSlide from './IntroSlide.vue';

import $ from 'jquery';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  offset: 300,
  duration: 1000
});
export default {
  name: "CustomerPage",
  components: {
    Header, Footer, IntroSlide
  },
  data() {
    return {
        menu: "CustomerPage",
        foods: [],
        name: "",
        price: 0,
        description: ""
    }
  },
  beforeCreate() {
    document.body.className = "user";
  },
  methods: {
    logout() {
      this.$router.push('/')
    },
    async add() {
      try {
        const newFood = {
          name: this.name,
          price: this.price,
          description: this.description
        }
        const res = await AxiosService.post('/api/food', newFood)
        console.log(res.data)
        if (res.data.status == 'success') {
          newFood._id = res.data._id
          this.foods.push(newFood)
        } else {
          alert('failed')
        }
      } catch (err) { 
        console.log(err)
      }
    },
    async order() {

    }
  }, 
  async mounted() {
    const res = await AxiosService.get('/api/food')
    this.foods = res.data.foods;
  }
}
</script>
<style>


</style>