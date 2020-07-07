<template>
  <div class="tab-register-container">
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

      <div class="input-line">
        <div class="image">
          <img src="@/assets/images/confirm-password.svg" />
        </div>
        <div class="text">
          <input v-model="confirmPassword" type="password" placeholder="Retype password" />
        </div>
      </div>
    </div>

    <div class="button-wrapper">
      <button @click="performRegister()" class="register-button">Register</button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { customerRegister } from "@/api/register";

export default {
  name: "RegisterForm",
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: ""
    };
  },
  methods: {
    ...mapMutations("accountModal", ["close"]),
    async performRegister() {
      await customerRegister({
        email: this.email,
        password: this.password
      });
      this.close();
    }
  }
};
</script>