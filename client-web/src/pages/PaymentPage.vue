<template>
  <div>
    <!--start header -->
    <Header/>
    <!-- end header -->
    <!-- start introslide -->
  <!-- start footer -->





<div class = "all-payment-method">
  <h3 class="title">1. Please select a payment method for your order</h3>
    <ul class="list"><li class="styles__StyledMethod-sc-1u5r3pb-1 fTvtIP">
     
        </li>
        <li class="styles__StyledMethod-sc-1u5r3pb-1 fTvtIP">
          <label class="RadioCheckout__StyledRadio-bkaeis-0 bqACGT">
            <input type="radio" readonly="" name="payment-methods" value="cybersource">
            <span class="radio-fake"></span>
            <span class="label"> Visa, Master, JCB <em class = "message">(not available now)</em></span>
            </label>
            <div class="VirtualCredit__StyledCredit-sc-1kid5w3-0 ZLPVe"></div>
            </li>
            <li class="styles__StyledMethod-sc-1u5r3pb-1 fTvtIP">
              <label class="RadioCheckout__StyledRadio-bkaeis-0 bqACGT">
                <input type="radio" readonly="" name="payment-methods" value="pay123">
                <span class="radio-fake"></span>
                <span class="label"> ATM Card/Internet Banking <em class = "message">(not available now)</em></span>
                </label>
                </li>
                <li class="styles__StyledMethod-sc-1u5r3pb-1 fTvtIP">
                  <label class="RadioCheckout__StyledRadio-bkaeis-0 bqACGT">
                    <input type="radio" readonly="" name="payment-methods" value="momo">
                    <span class="radio-fake"></span>
                    <span class="label"> MoMo wallet<a class="detail-discount-payment-checkout" target="_blank" href="https://momo.vn" data-placement="bottom" data-original-title="" title="" data-toggle="tooltip" data-title="Vui lòng tải ứng dụng MoMo để thanh toán">
                    </a>
                    </span></label>
                        <li class="styles__StyledMethod-sc-1u5r3pb-1 fTvtIP">
                          
                              </li>
                              </ul></div>
<div class = "confirm-button">
  <button class = "button"><span class= "button-data">Confirm Order</span></button>
</div>
<div class = "notice">
  <em><p>Please check your order carefully befor click "Confirm Order"</p></em> 
  
</div>
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
import Footer from '../components/Footer';
import Header from '../components/Header';
import IntroSlide from '../components/IntroSlide';

import $ from 'jquery';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  offset: 300,
  duration: 1000
});
export default {
  name: "HomePage",
  components: {
    Header, Footer, IntroSlide
  },
  data() {
    return {
        menu: "HomePage",
        foods: [],
        name: "",
        price: 0,
        description: "",
        subtotal: 0,
    }
  },
  beforeCreate() {
    document.body.className = "user";
  },
  methods: {
    async addToCart() {
      const accessToken = this.$cookies.get("accessToken")
      try {
        const res = await AxiosService.post('/api/auth', {
          accessToken: accessToken
        })
      } catch (error) {
        this.$router.push('/login')
      }
    },
    async buy() {
      const accessToken = this.$cookies.get("accessToken")
      try {
        const res = await AxiosService.post('/api/auth', {
          accessToken: accessToken
        })
      } catch (error) {
        this.$router.push('/login')
      }
    },
    getImageUrl(path,category) {
      return `${AxiosService.defaults.baseURL}images/${category}/${path}`;
    }
  }, 
  async mounted() {
    const res = await AxiosService.get('/api/food')
    if (res.status == 200) {
      this.foods = res.data.foods;
    }
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
  }
}
</script>




<style scoped>
.title{
  font-size: 15px;
}
.all-payment-method{
  box-sizing: border-box;
  margin-left: 10%;
  margin-top: 2.5%;
}
.list{
  color: rgb(51, 51, 51);
    margin-bottom: 20px;
    background: aliceblue;
    padding: 15px 25px 10px 15px;
    border-radius: 5px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(221, 221, 221);
    border-image: initial;
}
ul.list{
  width: 50%;
  padding-right: 100px;
}
.button{
  background-color: red;
  margin-left: 10%;
  margin-top: 1px;
}
.button-data{
  color: white;
}
.notice{
  font-size: 13px;
  font-style: align-self start;
  margin-left: 10%;
  margin-top:2px;
}
.message{
  font-size:10px;
}

</style>
