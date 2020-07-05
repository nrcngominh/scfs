<template>
  <div class="cart-page">
    <div class="wrapper">
      <h3>Your Cart</h3>
      <div class="cart-table">
        <article class="cart-grid-container header">
          <div>PRODUCT</div>
          <div>PRICE</div>
          <div>QUANTITY</div>
          <div>SUBTOTAL</div>
          <div></div>
        </article>

        <article v-for="item in cart" :key="item.food._id" class="cart-grid-container">
          <div class="product">
            <img :src="item.food.img" alt="product" />
            <p>{{item.food.name}}</p>
          </div>
          <div class="price">{{item.food.price}}</div>
          <div class="quantity">
            <div class="quantity-wrapper">
              <button>-</button>
              <div>
                <input :value="item.quantity" type="text"> 
              </div>
              <button>+</button>
            </div>
          </div>
          <div class="subtotal">{{item.food.subTotal}}</div>
          <div class="remove">
            <button class="remove-button">
              <img src="@/assets/images/close-modal.svg" alt="remove" />
            </button>
          </div>
        </article>
      </div>

      <article class="total">
        <div></div>
        <div class="total-wrapper">
          <div class="total-grid-container">
            <div class="row-header">SUBTOTAL</div>
            <div>10000</div>
            <div class="row-header">COUPON</div>
            <div class="coupon">
              <input type="text" />
              <button>Apply</button>
            </div>
            <div class="row-header">TOTAL</div>
            <div>10000</div>
          </div>

          <div>
            <button class="checkout">CHECKOUT</button>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "CartPage",
  computed: {
    ...mapState("cart", ["cart"])
  }
};
</script>