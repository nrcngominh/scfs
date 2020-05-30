<template>
  <div>
    <Header />
    <div class="container">
      <div class="row">
          <div class="tab-content col-xl-12" id="myTabContent">
              <div class="tab-pane fade active show" id="dinner" role="tabpanel" aria-labelledby="dinner-tab">
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

  <div>
      <Footer />
  </div>
</div>
</template>

<script>
import AxiosService from '../services/axios-service'
import Footer from './Footer.vue';
import Header from './Header.vue';
//import IntroSlide from './IntroSlide.vue';

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
    this.foods = res.data.foods
  }
}
</script>
<style>
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
