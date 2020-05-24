<template>
  <div class="container">
    <h1>{{menu}}</h1>
    <div class="mb-3">
        <button @click="logout">Logout</button>
    </div>

    <div>
      <div class="input-group input-group-sm mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-sm">Name</span>
        </div>
        <input type="text" class="form-control" v-model="name" aria-label="Name" aria-describedby="inputGroup-sizing-sm">
      </div>
      <div class="input-group input-group-sm mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-sm">Price</span>
        </div>
        <input type="text" class="form-control" v-model="price" aria-label="Price" aria-describedby="inputGroup-sizing-sm">
      </div>
      <div class="input-group input-group-sm mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-sm">Description</span>
        </div>
        <input type="text" class="form-control" v-model="description" aria-label="Description" aria-describedby="inputGroup-sizing-sm">
      </div>
      <button class="btn btn-primary" @click="add">Add</button>
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
        foods: [],
        name: "",
        price: 0,
        description: ""
    }
  },
  beforeCreate() {
    document.body.className = "admin";
  },
  methods: {
    logout() {
      this.$router.push('/')
    },
    async add() {
      try {
        console.log("Adding food")
        const res = await AxiosService.post('/food', {
          name: this.name,
          price: this.price,
          description: this.description
        })
        console.log(res.data)
        if (res.data.status == 'success') {
          alert('success')
        } else {
          alert('failed')
        }
      } catch (err) { 
        console.log(err)
      }
    }
    }, 
    async mounted() {
      const res = await AxiosService.get('/food')
      this.foods = res.data.foods
    }, 
}
</script>
