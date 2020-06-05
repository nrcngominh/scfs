<template>
  <div>
    <!--start header -->
    <Header />
    <!-- end header -->

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
    <div class="qt-box mt-1">
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
    </div>
    <!-- end qt -->
    <!-- start menu -->
    <div class="wrap_menu">
      <div class="container mt-1">
        <div class="row">
            <div class="tab-content col-xl-12" id="myTabContent">
                <div class="tab-pane active show" id="dinner" role="tabpanel" aria-labelledby="dinner-tab">
                    <div class="row" >
                        <div class="col-md-6" v-for="food in foods" :key="food.name">
                            <div class="single_menu_list">
                                <img src="https://images.foody.vn/res/g10/98048/prof/s576x330/foody-upload-api-foody-mobile-com-190311132057.jpg" alt="">
                                <div class="menu_content" >
                                    <h4>{{ food.name }}  <span>{{ food.price }}</span></h4>
                                    <p>{{ food.description }}</p>
                                    <button>Buy</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  <a href="#top" title="back to top" class="to-top"></a>
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
    Header, Footer
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
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
.bg_flat {
  background-image: url('../assets/healthyfood.svg');
  background-size: contain;
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
  background-image: url('../assets/up-arrow.png');
  background-size: contain;
  background-repeat: no-repeat;
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
  background: url('../assets/2882855.jpg') no-repeat center;
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
