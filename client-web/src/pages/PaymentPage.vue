<template>
  <div class="payment-page">
    <div class="wrapper">
      <article class="order-info">
        <div class="title-payment">
          <h3>Your order</h3>
        </div>

        <div class="grid-wrapper">
          <div class="order-info-container header">
            <div>PRODUCT</div>
            <div>SUBTOTAL</div>
          </div>

          <div class="order-info-container item" v-for="item in cart" :key="item.food._id">
            <div class="order-info-content">{{item.quantity}} X {{item.food.name}}</div>
            <div class="order-info-subtotal">{{item.subTotal}}</div>
          </div>

          <div class="order-info-container total">
            <div>
              <h4>SUBTOTAL</h4>
            </div>
            <div class="subtotal">{{subTotal}}</div>
          </div>

          <div class="order-info-container total">
            <div>
              <h4>COUPON</h4>
            </div>
            <div class="coupon-code">-0</div>
          </div>

          <div class="order-info-container total">
            <div>
              <h4>TOTAL</h4>
            </div>
            <div class="total">{{total}}</div>
          </div>
        </div>
      </article>

      <div class="payment-gateway">
        <article class="payment-method">
          <h3>Payment method</h3>
          <div class="payment-method-container">
            <div class="method">
              <div class="content">
                <input type="radio" checked />
                <div>MOMO Payment Service</div>
              </div>
              <div class="logo">
                <img src="@/assets/images/momo.png" alt="momo" />
              </div>
            </div>
          </div>

          <button>PLACE ORDER</button>
        </article>

        <article class="qr-code-wrapper">
          <h3>Scan To Pay</h3>
          <p>Bill ID: 0000123002</p>
          <p>Open MOMO app on the mobile and scan this QR Code</p>
          <div class="qr-code-content">
            <img src="@/assets/images/qr-code.png" alt="qr" />
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "PaymentPage",
  computed: {
    ...mapState("cart", ["cart", "subTotal", "total"])
  }
};
</script>