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
          <button class="btn btn-danger" @click="remove(food._id)">Remove</button>

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
        const newFood = {
          name: this.name,
          price: this.price,
          description: this.description
        }
        const res = await AxiosService.post('/api/food', newFood)
        console.log(res.data)
        if (res.data.status == 'success') {
          newFood._id = res.data._id
          this.foods.push(newFood)
        } else {
          alert('failed')
        }
      } catch (err) { 
        console.log(err)
      }
    },
    async remove(id) {
      console.log(id)
      const res = await AxiosService.delete('/api/food', {
        data: {
          _id: id
        }
      })
      if (res.data.status == 'success') {
        this.foods = this.foods.filter(food => {
          console.log(food)
          console.log(id)
          return food._id != id
        })
      } else {
        alert('failed')
      }
    }
  }, 
  async mounted() {
    const res = await AxiosService.get('/api/food')
    this.foods = res.data.foods
  }
}
</script>
