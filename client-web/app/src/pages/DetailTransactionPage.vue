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

        <article class="detail-grid-container">
          <div class="product">
            <p>Bánh mì</p>
          </div>
          <div class="price">10.000</div>
          <div class="quantity">
            <div class="quantity-wrapper">
              <p>1</p>
            </div>
          </div>
          <div class="subtotal">10000</div>
        </article>

        <article class="detail-grid-container border-head">
            <div></div>
            <div></div>
            <div>
              <h4>Subtotal</h4>
            </div>
            <div>subTotal</div>
          </article>

          <article class="detail-grid-container">
            <div></div>
            <div></div>
            <div>
              <h4>Discount</h4>
            </div>
            <div>discount</div>
          </article>

          <article class="detail-grid-container">
            <div></div>
            <div></div>
            <div>
              <h4>Total</h4>
            </div>
            <div class="total">total</div>
          </article>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "CartPage"
};
</script>