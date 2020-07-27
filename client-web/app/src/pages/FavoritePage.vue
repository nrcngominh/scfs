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
              <button @click="decreaseQuantity(item)">-</button>
              <div>
                <input :value="item.quantity" type="number" min="1" />
              </div>
              <button @click="increaseQuantity(item)">+</button>
            </div>
          </div>
          <div class="subtotal">{{item.subTotal}}</div>
          <div class="remove">
            <button class="remove-button" @click="removeFromCart(item)">
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
            <div>{{subTotal}}</div>
            <div class="row-header">COUPON</div>
            <div class="coupon">
              <input type="text" v-model="coupon" />
              <button @click="applyCoupon()">Apply</button>
            </div>
            <div class="row-header">DISCOUNT</div>
            <div>{{discount}}</div>
            <div class="row-header">TOTAL</div>
            <div>{{total}}</div>
          </div>

          <div>
            <button @click="goToPayment()" class="checkout">CHECKOUT</button>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { mapFields } from "vuex-map-fields";

export default {
  name: "FavoritePage",
  computed: {
    ...mapState("customer/cart", ["cart", "discount", "subTotal", "total"]),
    ...mapFields("customer/cart", ["coupon"])
  },
  methods: {
    ...mapActions("customer/cart", [
      "removeFromCart",
      "increaseQuantity",
      "decreaseQuantity",
      "applyCoupon"
    ]),
    goToPayment() {
      this.$router.push("/payment");
    }
  }
};
</script>