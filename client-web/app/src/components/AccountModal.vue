<template>
  <div class="account-modal-container" :class="{hidden: !modalActive}" @click.self="close()">
    <transition name="account-modal">
      <div class="account-modal-content" v-if="modalActive">
        <div class="tab-headers">
          <div class="header tab login" :class="{active: loginTab}" @click="openLoginTab()">Login</div>
          <div
            class="header tab register"
            :class="{active : registerTab}"
            @click="openRegisterTab()"
          >Register</div>
          <div class="header close-button" @click="close()">
            <img src="@/assets/images/close-modal.svg" />
          </div>
        </div>
        <div class="tab-body">
          <div class="tab-wrapper" :class="{active: loginTab}">
            <login-form class="tab-content login" />
          </div>
          <div class="tab-wrapper" :class="{active: registerTab}">
            <register-form class="tab-content register" />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
export default {
  components: {
    LoginForm,
    RegisterForm
  },
  computed: {
    ...mapState("customer/accountModal", [
      "modalActive",
      "loginTab",
      "registerTab"
    ])
  },
  methods: {
    ...mapMutations("customer/accountModal", [
      "close",
      "openLoginTab",
      "openRegisterTab"
    ])
  }
};
</script>