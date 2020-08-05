<template>
  <div class="transaction-page">
    <div class="wrapper">
      <h3>Your Transaction</h3>
      <div class="transaction-table">
        <article class="transaction-grid-container header">
          <div>ID</div>
          <div>DATE</div>
          <div>TOTAL</div>
          <div>STATUS</div>
        </article>

        <article class="transaction-grid-container" v-for="order in orders" :key="order._id">
          <div @click="goToDetailTransaction(order.billId)" class="id-transaction">
            <p>{{order.billId}}</p>
          </div>
          <div
            class="date-transaction"
          >{{order.date.split("T")[1].substring(0, 8) + " " + order.date.split("T")[0]}}</div>
          <div class="total">{{order.totalMoneyAfterDiscount}}</div>
          <div class="status-transaction">{{ hasServed ? "Serving" : "Ready" }}</div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "TransactionPage",
  data: () => ({
    orders: []
  }),
  methods: {
    goToDetailTransaction(billId) {
      this.$router.push({
        path: "/detail-transaction",
        query: { billId: billId }
      });
    }
  },
  async mounted() {
    this.orders = (await axios.get("/api/customer/transaction")).data;
  }
};
</script>