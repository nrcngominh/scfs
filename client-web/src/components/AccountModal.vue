<template>
  <div class="account-modal-container" :class="{hidden: !active}" @click.self="closeModal()">
    <transition name="account-modal">
      <div class="account-modal-content" v-if="active">
        <div class="tab-headers">
          <div class="header tab login" :class="{active: loginTab}" @click="openLoginTab()">Login</div>
          <div
            class="header tab register"
            :class="{active : registerTab}"
            @click="openRegisterTab()"
          >Register</div>
          <div class="header close-button" @click="closeModal()">
            <img src="@/assets/images/close-modal.svg" />
          </div>
        </div>
        <div class="tab-body">
          <div class="tab-wrapper" :class="{active: loginTab}">
            <div class="tab-content login">
              <div class="input">
                <div class="input-line">
                  <div class="image">
                    <img src="@/assets/images/username.svg" />
                  </div>
                  <div class="text">
                    <input type="text" placeholder="Email" />
                  </div>
                </div>

                <div class="input-line">
                  <div class="image">
                    <img src="@/assets/images/password.svg" />
                  </div>
                  <div class="text">
                    <input type="password" placeholder="Password" />
                  </div>
                </div>
              </div>

              <div class="forgot-password">Forgot your password?</div>

              <div class="button-wrapper">
                <div class="btn">Login</div>
              </div>
            </div>
          </div>
          <div class="tab-wrapper" :class="{active: registerTab}">
            <div class="tab-content register">
              <div class="input">
                <div class="input-line">
                  <div class="image">
                    <img src="@/assets/images/username.svg" />
                  </div>
                  <div class="text">
                    <input type="text" placeholder="Email" />
                  </div>
                </div>

                <div class="input-line">
                  <div class="image">
                    <img src="@/assets/images/password.svg" />
                  </div>
                  <div class="text">
                    <input type="password" placeholder="Password" />
                  </div>
                </div>

                <div class="input-line">
                  <div class="image">
                    <img src="@/assets/images/password.svg" />
                  </div>
                  <div class="text">
                    <input type="password" placeholder="Retype password" />
                  </div>
                </div>

                <div class="button-wrapper">
                  <div class="btn">Register</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState("account/modal", ["active", "loginTab", "registerTab"])
  },
  methods: {
    closeModal() {
      document.querySelector("body").classList.remove("modal-active");
      this.close();
    },
    ...mapMutations("account/modal", [
      "close",
      "openLoginTab",
      "openRegisterTab"
    ])
  }
};
</script>

<style>
</style>