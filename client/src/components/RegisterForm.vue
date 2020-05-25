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
                                    <input v-model="email" @keyup.enter="nextInput1" class="form__input"/>
                                    <p class="form__input-error"></p>
                                </div>
                                <div class="form__field">
                                    <label for="user" class="form__label">Username</label>
                                    <input id="username" v-model="user" @keyup.enter="nextInput2" class="form__input"/>
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
      this.login();
    },
    nextInput1() {
      document.getElementById('username').focus();
    },
    nextInput2() {
      document.getElementById('password').focus();
    },
  }
}
</script>

<style scoped>
html,
div,
span,
ul,
li,
h1,
h2,
h3,
h4,
h5,
h6,
p,
a,
label {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline
}

section {
    display: block
}

* {
    box-sizing: border-box
}

html{
    height: 100%
}
ul {
    list-style: none
}
a {
    color: #EB1510;
    text-decoration: none
}

a:hover {
    text-decoration: underline
}

button {
    border: 0;
    cursor: pointer;
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    margin: 0;
    outline: none
}

img {
    max-width: 100%;
    vertical-align: bottom
}

input {
    outline: none;
}
.tabs {
    display: -ms-flexbox;
    display: flex;
    margin-top: 24px;
}
.tabs__item {
    font-size: 16px;
}
.tabs__item:not(:last-child) {
    margin-right: 16px;
}
.tabs__item.is-active .tabs__number {
    background-color: #11a2b8
}

.tabs__item.is-active .tabs__title {
    display: inline
}

.tabs__item.is-active~.tabs__item .tabs__number {
    background-color: rgba(130, 138, 143, 0.3)
}
.tabs__number {
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
    border-radius: 50%;
    background-color: #162945;
    color: #FFF;
    line-height: 1.5;
    text-align: center
}

.tabs__title {
    display: none;
    margin-left: 8px
}
@media (min-width: 1224px) {
    .tabs__title {
        display: inline;
        margin-left: 10px
    }
}
@media (min-width: 801px) {
    .tabs {
        margin-top: 16px
    }
    .tabs__item {
        font-size: 12px
    }
    .tabs__item:not(:last-child) {
        padding-bottom: 0
    }
    .tabs__content {
        padding-bottom: 0
    }
}
.signup__circleMap {
    position: absolute;
    top: 50%;
    overflow: hidden;
    transform: translateY(-50%);
    border-radius: 50%;
    background-color: #162945;
    background-image: linear-gradient(160deg, rgba(22, 41, 69, 0) 0%, #162945 85%), url(/assets/backgrounds/signup-a24f239290c3a2fff00736fb0f86a9584f38fcf7c1175a2c23c76f48f79c27a3.svg);
    background-repeat: no-repeat;
    background-position: right center;
    background-size: auto
}
@media (min-width: 1632px) {
    .tabs {
        margin-top: 28px;
    }
}
@media (min-width: 1632px) {
    .signup__circleMap {
        left: -1300px;
    }
}
@media (min-width: 1224px) {
    .signup__circleMap {
        left: -1400px;
    }
}
@media (min-width: 801px) {
    .form__label, h1 {
        color: #162945;
    }
}

.f12 {
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0px
}

.text {
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 400;
    letter-spacing: 0px
}

.container {
    max-width: 960px;
    margin: 0 auto
}

.grid-cell {
    padding-right: 12px;
    padding-left: 12px
}

.grid {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex: 1;
    flex: 1
}

.grid.grid--column {
    -ms-flex-direction: column;
    flex-direction: column
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

.grid-cell--col1 {
    flex: 0 0 8.33333%;
    max-width: 8.33333%
}
.grid-cell--col5 {
    flex: 0 0 41.66667%;
    max-width: 41.66667%
}
.grid-cell--col10 {
    flex: 0 0 83.33333%;
    max-width: 83.33333%
}

.grid-cell--col12 {
    flex: 0 0 100%;
    max-width: 100%
}

@media (max-width: 1224px) {
    .grid-cell--col5--desktop-s {
        flex: 0 0 41.66667%;
        max-width: 41.66667%
    }
    .grid-cell--col2--desktop-s {
        flex: 0 0 16.66667%;
        max-width: 16.66667%
    }
}

@media (max-width: 800px) {
    .grid-cell--col12--tablet {
        flex: 0 0 100%;
        max-width: 100%
    }
}

@media (min-width: 1224px) {
    .grid-cell--col2--desktop {
        flex: 0 0 16.66667%;
        max-width: 16.66667%
    }
    .grid-cell--col5--desktop {
        flex: 0 0 41.66667%;
        max-width: 41.66667%
    }
}

@media (min-width: 1632px) {
    .grid-cell--col3--desktop-l {
        flex: 0 0 25%;
        max-width: 25%
    }
    .grid-cell--col4--desktop-l {
        flex: 0 0 33.33333%;
        max-width: 33.33333%;
    }
}

.button {
    display: inline-block;
    border-radius: 8px;
    font: 600 16px/24px "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;
    padding: 16px 24px;
    text-align: center;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    padding-right: 16px;
    padding-left: 16px;
    border-radius: 4px;
}

.button:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: transparent;
    transition: background-color 0.1s linear
}

.button span {
    position: relative;
    display: inline-flex;
    overflow: hidden
}

.button span:before {
    content: '';
    position: absolute;
    transition: transform .3s ease;
    left: -1px;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: currentColor;
    transform: translateX(-100%)
}

.button:hover,
.button:focus {
    text-decoration: none
}

.button:hover span:before,
.button:focus span:before {
    transform: translateX(0)
}

.button>span {
    position: relative
}

.button.isRed {
    background-color: #eb1510;
    color: #ffffff
}
.signup__form {
    width: 100%
}
.form__link {
    color: #ffffff;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px
}

.form__label,
.form__input {
    width: 100%
}
.form__field {
    position: relative;
    width: 100%;
    margin-top: 24px;
    line-height: 20px
}
.form__label {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    margin-bottom: 8px;
    font-family: "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 12px;
    font-weight: 600;
    line-height: 16px
}

.form__input {
    height: 48px;
    padding: 12px;
    border: 1px solid #828a8f;
    border-radius: 4px;
    background-color: #162945;
    color: #ffffff;
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 24px;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none
}

.form__input:focus {
    border-color: #11a2b8;
    box-shadow: inset 0 0 0 1px #11a2b8
}

.form__input-info {
    margin-top: 4px;
    color: #828a8f;
    font-size: 12px;
    line-height: 16px
}

.form__input-icon {
    position: relative
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
@media (min-width: 801px) {
    .signup__wrapper {
        background-color: #ffffff
    }
    .signup__circleMap {
        left: -1400px;
        width: 2000px;
        height: 2000px;
    }
}
.u-width--100 {
    width: 100%
}
.u-p0 {
    padding: 0;
}
.u-mt8 {
    margin-top: 8px;
}
.u-mt16 {
    margin-top: 16px;
}
.u-mb16 {
    margin-bottom: 16px;
}
.tabs__footer {
    padding-top: 32px;
    width: 100%
}
.desktop-s, .desktop-l {
    display: block;
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
.u-align-center {
    -ms-flex-align: center;
    align-items: center
}

.u-justify-space {
    -ms-flex-pack: justify;
    justify-content: space-between
}

.sessions__background {
    min-height: 100%;
    background: #f2f6f9
}

.sessions__navbar {
    position: relative;
    z-index: 1;
    padding: 16px 0 32px
}

.sessions__title {
    font-family: "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 36px;
    font-weight: 600;
    line-height: 40px
}

@media (max-width: 800px) {
    .sessions__background--mobile {
        background-color: #172845;
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
    .sessions__content {
        margin-top: 100px
    }
    .sessions__title {
        font-size: 24px
    }
}

@media (min-width: 1224px) {
    .sessions__content {
        margin-top: 80px
    }
}

@media (min-width: 1632px) {
    .sessions__wrapper {
        min-height: 900px
    }
    .sessions__navbar {
        padding-bottom: 96px
    }
    .sessions__content {
        margin-top: 12px
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

.Sessions {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    -moz-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    min-height: 100vh;
    background-color: #162945;
    background-size: cover
}

</style>