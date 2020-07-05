<template>
  <div class="tab-login-container">
    <div class="input">
      <div class="input-line">
        <div class="image">
          <img src="@/assets/images/username.svg" />
        </div>
        <div class="text">
          <input v-model="email" type="text" placeholder="Email" />
        </div>
      </div>

      <div class="input-line">
        <div class="image">
          <img src="@/assets/images/password.svg" />
        </div>
        <div class="text">
          <input v-model="password" type="password" placeholder="Password" />
        </div>
      </div>
    </div>

    <div class="forgot-password">Forgot your password?</div>

    <div class="button-wrapper">
      <button @click="performLogin()" class="login-button">Login</button>
    </div>

    <div class="connect-with">
      <div>or connect with</div>
    </div>

    <div class="connect-with-logo">
      <div @click="loginWithGoogle()">
        <img src="@/assets/images/google.png" alt="google" />
      </div>
    </div>
  </div>
</template>

<script>
import Google from "@/services/google";

import { mapMutations, mapActions } from "vuex";
export default {
  name: "LoginForm",
  data() {
    return {
      googleLoginUrl: Google.googleLoginUrl,
      email: "",
      password: ""
    };
  },
  methods: {
    ...mapMutations("account/modal", ["close"]),
    ...mapActions("account", ["login"]),
    async performLogin() {
      await this.login({
        email: this.email,
        password: this.password
      });
      this.close();
    },
    loginWithGoogle() {
      window.location = this.googleLoginUrl;
    }
  }
};
</script>