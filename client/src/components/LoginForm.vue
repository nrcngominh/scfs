<template>
  <div class="sessions">
    <div class="sessions__background sessions__background--mobile login">
        <div class="sessions__wrapper login__wrapper container js-login-info">

            <div class="login__circleMap desktop-s"></div>

            <div class="grid">
                <div class="grid-cell grid-cell--col1"></div>

                <div class="grid-cell grid-cell--col10 grid">
                  <div class="grid-cell grid-cell--col12 mt-2">
                    <nav class="sessions__navbar login__navbar grid">
                      <div class="grid u-justify-space u-align-center">
                        <a class="" href="/">
                            <img src="" alt="">
                        </a>
                        <p class="f12">
                            Don't have an account yet? <a id="_signup" @click="forwardPage">Sign up here</a>
                        </p>
                      </div>
                    </nav>

                  </div>
                  <div class="grid-cell grid-cell--col12--tablet grid-cell--col5--desktop-s grid-cell--col5--desktop grid-cell--col4--desktop-l">
                    <section>
                      <h1 class="sessions__title">Log in</h1>

                      <div class="form__field">
                        <label for="email" class="form__label">Email or username</label>
                        <input v-model="email" @keyup.enter="nextInput" class="form__input"/>
                      </div>
                      <div class="form__field">
                        <label for="password" class="form__label">Password</label>
                        <div class="form__input-icon">
                            <input id="password" v-model="password" @keyup.enter="submit" class="form__input" type="password"/>
                        </div>
                        <a class="form__link" href="">Forgot password?</a>
                      </div>
                      <div>
                        <div class="grid mt-4">
                          <div class="grid-cell grid-cell--col12 mt-4 p-0">
                              <button @click="login"  class="button isRed w-100">Log in</button>
                              <div class="grid-cell grid-cell--col1--desktop-l desktop-l"></div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
            </div>
        </div>
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
        console.log('Logging in...')
        const res = await AxiosService.post('/api/login/', {
          email: this.email,
          password: this.password
        })
        console.log(res.data)
        if (res.data.status == 'success') {
            if (res.data.type === 'customer') {
                this.$router.push('user')
            } else if (res.data.type === 'admin') {
                this.$router.push('admin')
            }
        } else {
          alert('Login failed')
        }
      } catch (err) { 
        console.log(err)
      }
    },
    async submit() {
      this.login();
    },
    nextInput() {
      document.getElementById('password').focus();
    },
    async forwardPage() {
        this.$router.push('register')
    }
  }
}
</script>

<style scoped>

#_signup:hover {
    text-decoration: underline;
    cursor: pointer;
}

@media (min-width: 801px) {
    .form__label, h1 {
        color: #162945
    }
}

@media (max-width: 1224px) {
    .container {
        max-width: 960px
    }
    .grid-cell {
        padding-right: 12px;
        padding-left: 12px
    }
}

@media (max-width: 600px) {
    .grid-cell {
        padding-right: 4px;
        padding-left: 4px
    }
}

@media (min-width: 1224px) {
    .container {
        max-width: 1224px
    }
    .grid-cell {
        padding-right: 12px;
        padding-left: 12px
    }
}

@media (min-width: 1632px) {
    .container {
        max-width: 1632px
    }
    .grid-cell {
        padding-right: 16px;
        padding-left: 16px
    }
}

@media (max-width: 1224px) {
    .grid-cell--col5--desktop-s {
        flex: 0 0 41.66667%;
        max-width: 41.66667%
    }
}

@media (max-width: 800px) {
    .grid-cell--col12--tablet {
        flex: 0 0 100%;
        max-width: 100%
    }
}

@media (min-width: 1224px) {
    .grid-cell--col5--desktop {
        flex: 0 0 41.66667%;
        max-width: 41.66667%
    }
}

@media (min-width: 1632px) {
    .grid-cell--col4--desktop-l {
        flex: 0 0 33.33333%;
        max-width: 33.33333%;
    }
}

@media (min-width: 801px) {
    .form__link {
        color: #eb1510
    }
    .form__input {
        background-color: transparent;
        color: #162945
    }
}

@media (max-width: 425px),
(min-width: 801px) and (max-width: 1223px) {
    .form__label {
        -ms-flex-direction: column;
        flex-direction: column;
        -ms-flex-align: start;
        align-items: flex-start
    }
}

@media (max-width: 800px) {
    .desktop-s {
        display: none
    }
}
@media (min-width: 1632px) {
    .grid-cell--col1--desktop-l {
        flex: 0 0 8.33333%;
        max-width: 8.33333%;
    }
}

@media (max-width: 800px) {
    .sessions__background--mobile {
        background-color: #11a2b8;
        background-position: center;
        background-size: cover;
        height: 100vh;
        overflow: auto;
    }
}

@media (min-width: 801px) {
    .sessions__wrapper {
        position: relative;
        min-height: 800px;
        overflow: hidden
    }
    .sessions__navbar {
        padding-bottom: 40px
    }
    .sessions__title {
        font-size: 24px
    }
}

@media (min-width: 1632px) {
    .sessions__wrapper {
        min-height: 900px
    }
    .sessions__navbar {
        padding-bottom: 96px
    }
    .sessions__title {
        font-size: 36px;
        line-height: 44px
    }
}

@media (min-width: 800px) and (max-width: 1223px) {
    .button {
        padding-top: 12px;
        padding-bottom: 12px;
        font-family: "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: 12px;
        font-weight: 600;
        line-height: 16px
    }
}

.login {
    position: relative;
    z-index: 1
}

.login__navbar {
    color: #ffffff
}

.login__navbar a {
    color: #ffffff;
    text-decoration: underline
}

.login__circleMap {
    position: absolute;
    top: 50%;
    overflow: hidden;
    transform: translateY(-50%);
    border-radius: 50%;
    background-color: #11a2b8;
    background-repeat: no-repeat;
    background-position: -88px 60%;
    background-size: auto 250px
}

.login__form {
    width: 100%;
    margin-top: 60px
}

.login__info {
    position: relative;
    color: #ffffff
}

@media (min-width: 801px) {
    .login__wrapper {
        background-color: #ffffff
    }
    .login__circleMap {
        right: -1550px;
        width: 2000px;
        height: 2000px
    }
}

@media (min-width: 1224px) {
    .login__circleMap {
        right: -1400px
    }
}
</style>