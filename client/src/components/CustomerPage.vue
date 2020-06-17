<template>
  <div>
    
    <!--start header -->
    <div class="sticky" id="nav">
      <Header />
    </div>
    <!-- end header -->
    <!-- start introslide -->
    <div id="intro">
      <IntroSlide />
    </div>
    <!-- end introslide -->
    <!-- start menu -->
    
    <div class="wrap_menu">
      <nav class="subnav">
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <a class="nav-link active" href="#">Active</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Disabled</a>
        </li>
    </ul>
    </nav>
      <div class="container mt-3">
        <div class="row">
              <div class="col-md-3 mt-4" v-for="food in foods" :key="food.name">
                <div class="card">
                  <div class="zoom">
                  <img class="card-img-top" v-bind:src="getImageUrl(food.img)">
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">{{ food.name }}</h5>
                    <h6 class="card-title money">{{ food.price }}</h6>
                    <p class="card-text">{{ food.description }}</p>
<<<<<<< HEAD
                    <a href="#" class="btn btn-success mr-3">Buy</a>
                    <a href="#" class="btn btn-primary">Add to Cart</a>
=======
                    <button @click="buy" class="btn btn-success mr-3">Buy</button>
                    <button @click="addToCart" class="btn btn-primary">Add to cart</button>
>>>>>>> master
                  </div>
                </div>
              </div>
        </div>
      </div>
    </div>
    <!-- end menu -->
    <!-- start about -->
    <div class="wrap_about">
      <div class="about_bk mt-4">
        <div class="container">
          <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-12 text-center">
                <div class="inner-column">
                  <h1 data-aos="fade-up">Welcome to <span> BK Food Court</span></h1>
                  <p class="mt-4" data-aos="fade-up">The university is currently has one food court located in its Ly Thuong Kiet campus and is going to build another one in Di An campus.All food courts consist of a number of vendors at food stalls or service counters. Meals are ordered at one of the vendors and then carried to a common area for consumption.</p>
                  <!-- <img id="healthy_food" src="../assets/healthyfood.svg" alt=""> -->
                </div>
              </div>
              <div data-aos="fade-up" id="img_bk" class="col-lg-6 col-md-6 col-sm-12 text-center">
                <img src="@/assets/bkfood.jpg" alt="" class="img-fluid1">
              </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end about -->
    <!-- start qt -->
    <!-- <div class="qt-box mt-1">
        <div class="parallax" data-paralax="scroll" data-z-index="1">
          <div class="container">
            <div class="row">
              <div class="col-md-8 ml-auto mr-auto text-center mt-auto mb-auto">
                <p class="info">
                    " If you're not the one cooking, stay out of the way and compliment the chef. "
                </p>
                <span class="info">Michael Strahan</span>
              </div>
            </div>
          </div>
        </div>
    </div> -->
    <!-- end qt -->
    <!-- start menu -->
  <a href="#top" title="back to top" class="to-top"></a>
  <a href="https://meet.google.com/linkredirect?authuser=1&dest=https%3A%2F%2Fwww.messenger.com%2Ft%2FCMNViet" title="" class="mess"></a>
  <!-- start footer -->
  <div class="mt-3">
      <Footer />
  </div>
  <!-- end footer -->
</div>
</template>
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="//code.jquery.com/jquery-3.2.1.slim.min.js"></script>
<script src="simple.money.format.js"></script>
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
    async addToCart() {
        const accessToken = this.$cookies.get("accessToken")
        if (accessToken) {
            console.log(accessToken)
            const res = await AxiosService.post('/api/auth', {
                accessToken: accessToken
            })
            console.log(res)
            if (res.data.status !== 'Success') {
                this.$router.push('/login')
            }
        } else {
            this.$router.push('/login')
        }
    },
    async buy() {
        const accessToken = this.$cookies.get("accessToken")
        if (accessToken) {
            console.log(accessToken)
            const res = await AxiosService.post('/api/auth', {
                accessToken: accessToken
            })
            console.log(res)
            if (res.data.status !== 'Success') {
                this.$router.push('/login')
            }
        } else {
            this.$router.push('/login')
        }
    },
    logout() {
      this.$router.push('/')
    },
    getImageUrl(path) {
      return AxiosService.defaults.baseURL + '/images/' + path
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
<<<<<<< HEAD
    let navbar = document.getElementById("nav");
    //let sticky = navbar.offsetTop;
    window.onscroll = () => {
        if (window.pageYOffset >= 150) {
            //navbar.classList.add("sticky");
            navbar.classList.add("hidden");
        } else {
            //navbar.classList.remove("sticky");
            navbar.classList.remove("hidden");
        }
    };
=======

    const accessToken = this.$cookies.get("accessToken")
    if (accessToken) {
        console.log(accessToken)
        const res = await AxiosService.post('/api/auth', {
            accessToken: accessToken
        })
        console.log(res)
        if (res.data.status === 'Success') {
            console.log(res.data.account.email)
        }
    }
    
>>>>>>> master
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
.card {
  width: 250px;
}
#intro {
  margin-top: 100px;
}
#nav {
  transition: .25s ease .1s
}
.hidden {
    transform: translateY(-100%);
    transition: .25s ease .1s
}
.hidden1 {
    transform: translateY(0%);
    transition: .25s ease .1s
}
.sticky {
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 3;
}
h5.card-title {
    font-weight: bold;
}
h6.card-title:after {
  content: 'đ';
}
p.card-text {
    color: #666;
}
.row {
  padding-bottom: 20px;
}
.card {
  box-shadow: 0 0 20px 7px rgba(0,0,0,0.1);
}

.bg_flat {
  background-size: contain;
}
img {
  height: 210px;
}
.zoom {
  position: relative;
  overflow: hidden;
}

.zoom:hover img{
  transform: scale(1.1);
  -moz-transform: scale(1.1);
  -webkit-transform: scale(1.1);
}
.zoom img{
  transition: all 0.3s;
  -moz-transition: all 0.3s;
  -webkit-transition: all 0.3s;
}
body {
  padding: 0 !important;
}
.to-top {
  position: fixed;
  width: 40px;
  height: 40px;
  right: 1%;
  bottom: 3%;
  text-decoration: none;
  text-align: center;
  line-height: 50px;
  background-image: url('../assets/scroll.png');
  background-size: contain;
  background-repeat: no-repeat;
  text-decoration: none;
}
.mess {
  position: fixed;
  width: 40px;
  height: 40px;
  right: 1%;
  bottom: 10%;
  text-decoration: none;
  text-align: center;
  line-height: 50px;
  background-image: url('../assets/messenger.png');
  background-size: contain;
  background-repeat: no-repeat;
  text-decoration: none;
}
.fade {
  opacity: 1;
}
.to-top:hover {
  color: #fff;
}
.wrap_about, .wrap_menu{
  background-color: #fff;
  margin: auto;
  width: 80.4%;
}
.inner-column h1 span {
    color: #d65106;
}
.about_bk.mt-4 {
    padding: 40px;
}
.parallax {
  background-size: cover;
  background-attachment: fixed;
  padding: 150px 0;
}
#img_bk {
  box-shadow: 20px 20px 0px #35649c;
  padding: 0;
}

.img-fluid1 {
    max-width: 100%;
    height: auto;
    width: 100%;
}
.inner-column h3 {
  font-family: 'Montserrat', sans-serif;
}
.inner-column img {
  width: 280px;
}
.info {
  z-index: 2;
  position: relative;
  font-size: 35px;
  font-weight: 400;
  line-height: 44px;
  color: #fff;
  font-family: 'Rubik', sans-serif;
  margin-bottom: 20px;
  padding: 0;
}
.parallax span {
    color: #fff;
    font-size: 28px;
    font-weight: 600;
    line-height: 30px;
}
.qt-box {
    width: 80.4%;
    align-content: center;
    margin: auto;
}
.inner-column {
  text-align: left;
}

p.aos-init.aos-animate, p.aos-init {
    font-size: 20px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    letter-spacing: 0;
    margin-right: 106px;
}
.menu_content button{
    text-transform: none;
    margin-left: 305px;
    top: 58px;
    position: absolute;
}
.menu_content p{
    position: relative;
}
#myTabContent {
	margin-top: 50px;
}
.menu_tab {
	width: auto;
	margin: 0 auto;
}
.nav-tabs .nav-item {
	margin-bottom: -1px;
}
.nav-item a {
	color: #333;
}
.menu_tab .nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {
	color: white;
	background-color: #FF5E18;
	border-color: #FF5E18;
}
.single_menu_list {
	position: relative;
	padding-left: 190px;
	margin-bottom: 110px;
}

.single_menu_list img {
	max-width: 30%;
	position: absolute;
	left: 0px;
	top: 0;
	border: 1px solid #ddd;
	padding: 3px;
	/* border-radius: 50%; */
	transition: .4s
}


.single_menu_list h4 {
	font-size: 25px;
	border-bottom: 1px dashed #333;
	padding-bottom: 15px;
	margin-bottom: 10px;
}

.single_menu_list h4 span {
	float: right;
	font-weight: bold;
	color: #FF5E18;
	font-style: italic;
}
</style>
