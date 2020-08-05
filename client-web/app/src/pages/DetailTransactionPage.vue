<template>
  <div class="detail-transaction-page">
    <div class="wrapper">
      <h3>Your Detail Transaction</h3>
      <div class="detail-table">
        <article class="detail-grid-container header">
          <div>PRODUCT</div>
          <div>PRICE</div>
          <div>QUANTITY</div>
          <div>SUBTOTAL</div>
          <div></div>
        </article>

        <article class="detail-grid-container" v-for="item in order.items" :key="item._id">
          <div class="product">
            <p>{{item.food.name}}</p>
          </div>
          <div class="price">{{item.food.price}}</div>
          <div class="quantity">
            <p>{{item.quantity}}</p>
          </div>
          <div class="subtotal">{{item.subTotal}}</div>
        </article>

        <article class="detail-grid-container border-head">
          <div></div>
          <div></div>
          <div>
            <h4>Subtotal</h4>
          </div>
          <div>{{order.total}}</div>
        </article>

        <article class="detail-grid-container">
          <div></div>
          <div></div>
          <div>
            <h4>Discount</h4>
          </div>
          <div>{{order.total - order.totalReal}}</div>
        </article>

        <article class="detail-grid-container">
          <div></div>
          <div></div>
          <div>
            <h4>Total</h4>
          </div>
          <div class="total">{{order.totalReal}}</div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CartPage",
  data: () => ({
    order: null
  }),
  async mounted() {
    const billId = this.$router.currentRoute.query.billId;
    const order = (await axios.get("/api/customer/transaction/" + billId)).data;
    console.log(order);
    this.order = order;
  }
};
</script>