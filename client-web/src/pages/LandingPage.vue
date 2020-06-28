<template>
  <div class="wrapper">
    <div class="food-container">
      <div class="food-item" v-for="item in arr" :key="item">
        <div class="food-image">
          <div class="food-image-content">
            <img src="https://sfcs-hcmut.duckdns.org/images/1592813725496.jpg" alt="Food image">
          </div>
        </div>
        <div class="food-body">
          <div class="food-content">
            <h3 class="title">Pepsi</h3>
            <p class="description">Ngon bổ rẻ</p>
            <p class="price">Giá: 10.000 vnđ</p>
          </div>
          <div class="order-buttons">
            <div class="btn btn-primary">Mua</div>
            <div class="btn btn-success">Thêm vào giỏ</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
  data() {
    return {
      arr: null
    }
  },
  mounted() {
    this.arr = [1, 2, 3, 4]
  }
}
</script>