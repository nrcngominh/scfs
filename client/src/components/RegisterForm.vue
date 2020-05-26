<template>
  <div class="sessions">
    <div class="sessions__background sessions__background--mobile">
        <div class="sessions__wrapper signup__wrapper container">

            <div class="signup__circleMap desktop-s"></div>

            <div class="grid">
                <div class="grid-cell grid-cell--col1"></div>

                <div class="grid-cell grid-cell--col10 grid">
                    <div class="grid-cell grid-cell--col12 u-mt8">
                        <nav class="sessions__navbar grid">
                        <div class="grid u-justify-space u-align-center">
                            <a class="" href="/">
                                <img src="" alt="">
                            </a>
                            <p class="u-txt-right f12">
                                Already have an account? <a href="/">Log in</a>
                            </p>
                        </div>
                        </nav>
                    </div>
                    <div class="grid-cell grid-cell--col5--desktop-s desktop-s grid-cell--col5--desktop grid-cell--col4--desktop-l">
                        <section class="signup__info">
                        </section>
                    </div>
                    <div class="grid-cell grid-cell--col2--desktop-s desktop-s grid-cell--col2--desktop grid-cell--col3--desktop-l"></div>
                    <div class="grid-cell grid-cell--col12--tablet grid-cell--col5--desktop-s grid-cell--col5--desktop grid-cell--col4--desktop-l">
                        <section class="signup__form">
                            <h1 class="sessions__title">Create your account</h1>
                            <ul class="tabs">
                                <li class="tabs__item js-step1 is-active">
                                    <span class="tabs__number">1</span>
                                    <span class="tabs__title">Account Setup</span>
                                </li>
                                <li class="tabs__item js-step2">
                                    <span class="tabs__number">2</span>
                                    <span class="tabs__title">Personal Info</span>
                                </li>
                            </ul>
                            <div class="form">
                                <div class="form__field">
                                    <label for="email" class="form__label">Email</label>
                                    <input v-model="email" @keyup.enter="nextInput" class="form__input"/>
                                    <p class="form__input-error"></p>
                                </div>
                                <div class="form__field">
                                    <label for="password" class="form__label">Password</label>
                                    <div class="form__input-icon">
                                        <input id="password" v-model="password" @keyup.enter="submit" class="form__input" type="password"/>
                                        <p class="form__input-error"></p>
                                    </div>
                                </div>
                                <div class="tabs__foo">
                                    <div class="grid mt-4">
                                    <div class="grid-cell grid-cell--col12 u-mt16 u-mb16 u-p0">
                                        <button @click="register"  class="button isRed u-width--100">Next</button>
                                        <div class="grid-cell grid-cell--col1--desktop-l desktop-l"></div>
                                    </div>
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
    document.body.className = "register";
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
      this.register();
    },
    nextInput() {
      document.getElementById('password').focus();
    }
  }
}
</script>

<style lang="scss">

</style>