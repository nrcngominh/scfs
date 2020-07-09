<template>
  <div class="login-page-container">
    <md-content class="md-elevation-3">
      <div class="title">
        <img src="../assets/img/logo.png" />
        <div class="md-title">Smart Food Court System</div>
        <div class="md-body-1">Manager Dashboard</div>
      </div>

      <div class="form">
        <md-field>
          <label>E-mail</label>
          <md-input v-model="email" autofocus></md-input>
        </md-field>

        <md-field md-has-password>
          <label>Password</label>
          <md-input v-model="password" @keyup.enter="performLogin" type="password"></md-input>
        </md-field>
      </div>

      <div class="md-body-1 status">{{ status }}</div>

      <div class="actions md-layout md-alignment-center-space-between">
        <a href="#">Reset password</a>
        <md-button class="md-raised md-primary" @click="performLogin">Log in</md-button>
      </div>
    </md-content>
  </div>
</template>

<script>
import AccountService from "@/services/account";

export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
      status: ""
    };
  },
  watch: {
    email: function() {
      this.status = "";
    },
    password: function() {
      this.status = "";
    }
  },
  methods: {
    async performLogin() {
      try {
        await AccountService.login(this.email, this.password);
        this.$router.push("/");
      } catch (error) {
        if (!error.response) {
          this.status = "Cannot connect to server";
        } else if (error.response.status == 401) {
          this.status = "Wrong email or password";
        }
      }
    }
  }
};
</script>
