<template>
  <div class="container">
    <h1>{{menu}}</h1>
    <div class="abc">
        <button @click="logout">Logout</button>
    </div>

    <div class="food-container">
        <div v-for="food in foods" :key="food.name">
          <div>Tên: {{ food.name }}</div>
          <div>Giá: {{ food.price }}</div>
          <div>Mô tả: {{ food.description }}</div>
          <br />
        </div>
    </div>
  </div>
</template>

<script>
import AxiosService from '../services/axios-service'

export default {
  name: "ManagerPage",
  data() {
    return {
        menu: "ManagerPage",
        foods: []
    }
  },
  beforeCreate() {
    document.body.className = "admin";
  },
  methods: {
    logout() {
      this.$router.push('/')
    }
  },
  async mounted() {
    const res = await AxiosService.get('/food')
    this.foods = res.data.foods
  }
}
</script>
