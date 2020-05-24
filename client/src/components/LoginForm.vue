<template>
  <div class="container">
    <div class="login-form">
      <label for="email">Email</label>
      <input id="email" v-model="email" placeholder="Enter your email" />

      <label for="password">Password</label>
      <input id="password" v-model="password" placeholder="Enter your password" />
      
      <button class="login-button" :click="login">Login</button>
    </div>
  </div>
</template>

<script>
import AxiosService from '../services/axios-service'

export default {
  name: "LoginForm",
  data() {
    return {
      email: "",
      password: ""
    }
  },
  beforeCreate() {
    document.body.className = "login";
  },
  methods: {
    async login() {
      try {
        const res = await AxiosService.post('/login/', {
          email: this.email,
          password: this.password
        })
        console.log(res.data)
        if (res.data.status == 'success') {
          this.$router.push('admin')
          //alert('Login success')
        } else {
          alert('Login failed')
        }
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
