<template>
  <div class="container">
    <h1>{{menu}}</h1>
    <div class="abc">
        <button @click="logout">Logout</button>
    </div>
    </div>
</template>

<script>
//import AxiosService from '../services/axios-service'

export default {
  name: "ManagerPage",
  data() {
    return {
        menu: "ManagerPage"
    }
  },
  beforeCreate() {
    document.body.className = "admin";
  },
  methods: {
    logout() {
      this.$router.push('/')
    }
  }
}
</script>
