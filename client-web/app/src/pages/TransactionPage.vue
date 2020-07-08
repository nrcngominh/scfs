<template>
  <div class="transaction-page">
    <div class="wrapper">
      <h3>Your Transaction</h3>
      <div class="transaction-table">
        <article class="transaction-grid-container header">
          <div>ID</div>
          <div>DATE</div>
          <div>PRODUCT</div>
          <div>TOTAL</div>
          <div>STATUS</div>
        </article>

        <article class="transaction-grid-container">
          <div @click="goToDetailTransaction" class="id-transaction">
            <p>#123453789</p>
          </div>
          <div class="date-transaction">2/2/2</div>
          <div class="product">Bánh mì</div>
          <div class="total">total</div>
          <div class="status-transaction">status</div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "TransactionPage",
  methods: {
      goToDetailTransaction() {
          this.$router.push("/detail-transaction");
      }
  }
};
</script>