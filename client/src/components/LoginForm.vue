<template>
  <div class="container">
    <div class="login-form">
      <label for="email">Email</label>
      <input id="email" v-model="email" placeholder="Your email" />

      <label for="password">Password</label>
      <input id="password" v-model="password" placeholder="Your password" />
      
      <button class="login-button" v-on:click="login">Login</button>
    </div>
  </div>
</template>

<script>
import AxiosService from '../services/axios-service'

export default {
  name: "LoginForm",
  data: function () {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    login() {
      console.log('Logging in...')
      try {
        AxiosService.post('/login/', {
          email: this.email,
          password: this.password
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
.login-form {
  justify-content: center;
  justify-items: left;
  display: grid;
  grid-template-columns: 100px 200px;
}

.login-button {
  grid-column: 2;
}
</style>