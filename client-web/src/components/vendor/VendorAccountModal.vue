<template>
  <div class="account-modal-container vendor" :class="{hidden: loggedIn}">
    <transition name="account-modal">
      <div class="account-modal-content">
        <div class="tab-headers">
          <div class="header tab login active" @click="openLoginTab()">Vendor Login</div>
        </div>

        <div class="tab-body">
          <div class="tab-wrapper active">
            <div class="tab-login-container tab-content login">
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
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("vendor/account", ["loggedIn"])
  }
};
</script>