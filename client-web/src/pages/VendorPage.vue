<template>
  <div>
    <!--start header -->
    <Header />
    <!-- end header -->
  <body>
    <main>
<div class="basket content-wrapper">
      <div class="basket-labels">
        <ul>
          <li class="item item-heading">Item</li>
          <li class="price1">Price</li>
          <li class="quantity">Quantity</li>
          <li class="subtotal1">Subtotal</li>
        </ul>
      </div>
      
      <div class="basket-product" v-for="item in $store.state.cart.items" :key="item.food._id" >
        <div class="item">
          <div class="product-details">
            <h1><span class="item-name"></span><strong>{{item.food.name}}</strong></h1>
          </div>
        </div>
        <div class="price">{{item.food.price}}</div>
        <div class="quantity">
          <input type="number" v-bind:value="item.quantity" v-on:input = "updateQuantity(item.food._id, $event.target.value)" min="1" class="quantity-field">
        </div>
        <div class="subtotal">{{item.food.price * item.quantity}}</div>
  </div>

    </div>
    <aside>
      <div class="summary">
        <div class="summary-subtotal">
          <div class="subtotal-title">Subtotal</div>
          <div class="subtotal-value final-value" id="basket-subtotal">{{totalMoney}}</div>
        </div>
      </div>

    </aside>
    </main>
    </body>

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
        promoCode: "",
        realPromoCode: ""
    }
  },
  computed: {
    totalMoney() {
      const items = this.$store.state.cart.items
      let sum = 0
      for (let i = 0; i < items.length; i++) {
        sum += items[i].quantity * items[i].food.price
      }
      return sum
    }
  },
  beforeCreate() {
    document.body.className = "user";
  },
  methods: {
    async addToCart() {
      const accessToken = this.$cookies.get("accessToken")
      try {
        const res = await this.$http.post('/api/auth', {
          accessToken: accessToken
        })
      } catch (error) {
        this.$router.push('/login')
      }
    },
    async buy() {
      const accessToken = this.$cookies.get("accessToken")
      try {
        const res = await this.$http.post('/api/auth', {
          accessToken: accessToken
        })
      } catch (error) {
        this.$router.push('/login')
      }
    },
    updateQuantity(foodId, newQuantity) {
      this.$store.commit('updateQuantity', {
        foodId: foodId,
        newQuantity: newQuantity
      })
    },
    applyPromotionCode() {
      this.realPromoCode = this.promoCode
    },
    totalMoneyAfterDiscount() {
      const totalMoneyAfterDiscount = this.realPromoCode == "BKU18" ? 
        this.totalMoney * 0.85 : this.totalMoney
      this.$store.commit('updateTotalMoney', totalMoneyAfterDiscount)
      return totalMoneyAfterDiscount
    }
  }, 
  async mounted() {
    
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
.content-wrapper {
  min-height: 400px;
}
.body {
  background-color: rgba(251, 251, 251, 1);
  color: #666;
  font-family: 'Open Sans', sans-serif;
  font-size: 62.5%;
  margin: 0 auto;
}
a {
  border: 0 none;
  outline: 0;
  text-decoration: none;
}

strong {
  font-weight: bold;
}

p {
  margin: 0.75rem 0 0;
}

h1 {
  font-size: 15px;
  font-weight: normal;
  margin: 0;
  padding: 0;
}

input,
button {
  border: 0 none;
  outline: 0 none;
}

button {
  background-color: red;
  color: #fff;
}

button:hover,
button:focus {
  background-color: #555;
}

img,
.basket-module,
.basket-labels,
.basket-product {
  width: 100%;
}

input,
button,
.basket,
.basket-module,
.basket-labels,
.item,
.price,
.price1,
.subtotal1,
.quantity,
.subtotal,
.basket-product,
.product-image,
.product-details {
  float: left;
}
/* .price1,
.subtotal1{
    width: 33%;
    float: left;
} */

.price:after,
.subtotal:after,
.subtotal-value:after,
.total-value:after,
.promo-value:after {
  content: 'VND';
}

.hide {
  display: none;
}

main {
  clear: both;
  font-size: 15px;
  overflow: hidden;
  margin-left: 147px;
  padding: 1rem 0;
  width: 91%;
}
.item-name{
  font-size: 15px;
}
.basket,
aside {
  padding: 0 1rem;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.basket {
  width: 70%;
}

.basket-module {
  color: #111;
}

label {
  display: block;
  margin-bottom: 0.3125rem;
}

.promo-code-field {
  border: 1px solid #ccc;
  padding: 0.5rem;
  text-transform: uppercase;
  transition: all 0.2s linear;
  width: 66%;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
  -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
  -o-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
}

.promo-code-field:hover,
.promo-code-field:focus {
  border: 1px solid #999;
}

.promo-code-cta {
  border-radius: 4px;
  font-size: 0.675rem;
  margin-left: 5px;
  padding: 0.95rem 1.25rem 0.625rem;
}

.basket-labels {
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  margin-top: 1.625rem;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  color: #111;
  display: inline-block;
  padding: 0.625rem 0;
}
li.subtotal1 {
    float: right;
    text-align: right;
}
li.price:before,
li.subtotal:before {
  content: '';
}

.item {
  width: 55%;
}

.price,
.price1,
.subtotal1,
.quantity,
.subtotal {
  width: 15%;
}

.subtotal {
  text-align: right;
}

.remove {
  bottom: 1.125rem;
  float: right;
  position: absolute;
  right: 0;
  text-align: right;
  width: 45%;
}

.remove button {
  background-color: transparent;
  color: #777;
  float: none;
  text-decoration: underline;
  text-transform: uppercase;
}

.item-heading {
  padding-left: 4.375rem;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.basket-product {
  border-bottom: 1px solid #ccc;
  padding: 1rem 0;
  position: relative;
}

.product-image {
  width: 30%;
}

.product-details {
  width: 65%;
}

.product-frame {
  border: 1px solid #aaa;
}

.product-details {
  padding: 0 1.5rem;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.quantity-field {
  background-color: #ccc;
  border: 1px solid #aaa;
  border-radius: 4px;
  font-size: 0.625rem;
  padding: 2px;
  width: 3.75rem;
}

aside {
  float: right;
  position: relative;
  width: 30%;
}

.summary {
  margin-left: -6px;
  background-color: aliceblue;
  border: 1px solid #aaa;
  padding: 1rem;
  position: fixed;
  width: 250px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.summary-total-items {
  color: #666;
  font-size: 0.875rem;
  text-align: center;
}

.summary-subtotal,
.summary-total {
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  clear: both;
  margin: 1rem 0;
  overflow: hidden;
  padding: 0.5rem 0;
}

.subtotal-title,
.subtotal-value,
.total-title,
.total-value,
.promo-title,
.promo-value {
  color: #111;
  float: left;
  width: 50%;
}

.summary-promo {
  -webkit-transition: all .3s ease;
  -moz-transition: all .3s ease;
  -o-transition: all .3s ease;
  transition: all .3s ease;
}

.promo-title {
  float: left;
  width: 70%;
}

.promo-value {
  color: #8B0000;
  float: left;
  text-align: right;
  width: 30%;
}

.summary-promotional {
  padding-bottom: 3rem;
}

.subtotal-value,
.total-value {
  text-align: right;
}

.total-title {
  font-weight: bold;
  text-transform: uppercase;
}

.summary-checkout {
  display: block;
}

.checkout-cta {
  display: block;
  float: none;
  font-size: 0.75rem;
  text-align: center;
  text-transform: uppercase;
  padding: 0.625rem 0;
  width: 100%;
}

/* .summary-delivery-selection {
  background-color: #ccc;
  border: 1px solid #aaa;
  border-radius: 4px;
  display: block;
  font-size: 0.625rem;
  height: 34px;
  width: 100%;
} */

@media screen and (max-width: 640px) {
  aside,
  .basket,
  .summary,
  .item,
  .remove {
    width: 100%;
  }
  .basket-labels {
    display: none;
  }
  .basket-module {
    margin-bottom: 1rem;
  }
  .item {
    margin-bottom: 1rem;
  }
  .product-image {
    width: 40%;
  }
  .product-details {
    width: 60%;
  }
  .price,
  .price1,
  .subtotal1,
  .subtotal {
    width: 33%;
  }
  .quantity {
    text-align: center;
    width: 34%;
  }
  .quantity-field {
    float: none;
  }
  .remove {
    bottom: 0;
    text-align: left;
    margin-top: 0.75rem;
    position: relative;
  }
  .remove button {
    padding: 0;
  }
  .summary {
    margin-top: 1.25rem;
    position: relative;
  }
}

@media screen and (min-width: 641px) and (max-width: 960px) {
  aside {
    padding: 0 1rem 0 0;
  }
  .summary {
    width: 28%;
  }
}

@media screen and (max-width: 960px) {
  main {
    width: 100%;
  }
  .product-details {
    padding: 0 1rem;
  }
}
</style>
