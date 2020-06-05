<template>
  <div class="sessions">
    <div class="sessions__background sessions__background--mobile">
        <div class="sessions__wrapper signup__wrapper container">

            <div class="signup__circleMap desktop-s"></div>

            <div class="grid">
                <div class="grid-cell grid-cell--col1"></div>

                <div class="grid-cell grid-cell--col10 grid">
                    <div class="grid-cell grid-cell--col12 mt-2">
                        <nav class="sessions__navbar grid">
                        <div class="grid u-justify-space u-align-center">
                            <a class="bklogo" @click="forwardUser">
                                <img src="@/assets/bklogo.png" alt="">
                            </a>
                            <p class="f12">
                                Already have an account? <a id="_login" @click="backwardPage">Log in</a>
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
                                        <p class="form__input-info">Your password must include at least 8 characters</p>
                                    </div>
                                </div>
                                <div class="tabs__foo">
                                    <div class="grid mt-4">
                                    <div class="grid-cell grid-cell--col12 mt-4 p-0">
                                        <button @click="register"  class="button isRed w-100">Next</button>
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
  name: "RegisterForm",
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
    },
    backwardPage() {
        this.$router.push('/')
    },
    forwardUser() {
        this.$router.push('user')
    }
  }
}
</script>

<style scoped>
#_login {
    color: #EB1510;
    text-decoration: underline;
}

#_login:hover {
    cursor: pointer;
}
.grid.u-justify-space.u-align-center a {
    cursor: pointer;
}

@media (min-width: 801px) {
    body {
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

@media (min-width: 801px) {
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

.tabs {
    display: -ms-flexbox;
    display: flex;
    margin-top: 24px
}

.tabs__item {
    font-size: 16px
}

.tabs__item:not(:last-child) {
    margin-right: 16px
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

.tabs__item.is-active .tabs__number {
    background-color: #11a2b8
}

.tabs__item.is-active .tabs__title {
    display: inline
}

.tabs__item.is-active~.tabs__item .tabs__number {
    background-color: rgba(130, 138, 143, 0.3)
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
}

@media (min-width: 1224px) {
    .tabs__title {
        display: inline;
        margin-left: 10px
    }
}

@media (min-width: 1632px) {
    .tabs {
        margin-top: 28px
    }
}

@media (max-width: 800px) {
    .desktop-s {
        display: none
    }
}

@media (max-width: 1224px) {
    .desktop {
        display: none
    }
}

@media (max-width: 1632px) {
    .desktop-l {
        display: none
    }
}

@media (max-width: 800px) {
    .sessions__background--mobile {
        background-color: #172845;
        background-position: center;
        background-size: cover;
        height: 100vh;
        overflow: auto;
        color: #FFF;
    }
    .a:hover {
        color: EB1510;
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

.signup {
    position: relative;
    z-index: 1
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

.signup__info {
    position: relative;
    color: #ffffff
}

.signup__info a {
    color: #ffffff;
    text-decoration: underline
}

.signup__form {
    width: 100%
}

@media (min-width: 801px) {
    .signup__wrapper {
        background-color: #ffffff
    }
    .signup__circleMap {
        left: -1550px;
        width: 2000px;
        height: 2000px
    }
}

@media (min-width: 801px) and (max-width: 1223px) {
    .button,
    .button--back {
        padding-top: 12px;
        padding-bottom: 12px;
        font-family: "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: 12px;
        font-weight: 600;
        line-height: 16px
    }
    .button {
        padding-right: 16px;
        padding-left: 16px;
        border-radius: 4px;
    }
}

@media (min-width: 1224px) {
    .signup__circleMap {
        left: -1400px
    }
}

@media (min-width: 1632px) {
    .signup__circleMap {
        left: -1300px
    }
}

@font-face {
    font-family: "Open Sans";
    src: url(/assets/OpenSans-Regular-31b6b855254621325884ebeee8f42134e48c68bde9c41552e8f701d483d47cba.eot);
    src: url(/assets/OpenSans-Regular-31b6b855254621325884ebeee8f42134e48c68bde9c41552e8f701d483d47cba.eot?#iefix) format("embedded-opentype"), url(/assets/OpenSans-Regular-e64e508b2aa2880f907e470c4550980ec4c0694d103a43f36150ac3f93189bee.ttf) format("truetype");
    font-weight: 400;
    font-style: normal
}

@font-face {
    font-family: "Open Sans";
    src: url(/assets/OpenSans-Light-b448a4cfed238e77ca88a2ff4ee399065e6b0ccc1a8fbf846620249f6c79e145.eot);
    src: url(/assets/OpenSans-Light-b448a4cfed238e77ca88a2ff4ee399065e6b0ccc1a8fbf846620249f6c79e145.eot?#iefix) format("embedded-opentype"), url(/assets/OpenSans-Light-cf5f5184c1441a1660aa52526328e9d5c2793e77b6d8d3a3ad654bdb07ab8424.ttf) format("truetype");
    font-weight: 300;
    font-style: normal
}

@font-face {
    font-family: "Open Sans";
    src: url(/assets/OpenSans-Semibold-b132fd47c96da989d9a505f882ab62fde74e7c0863192adb4f0d4c4b749b9a9e.eot);
    src: url(/assets/OpenSans-Semibold-b132fd47c96da989d9a505f882ab62fde74e7c0863192adb4f0d4c4b749b9a9e.eot?#iefix) format("embedded-opentype"), url(/assets/OpenSans-Semibold-aa3b0ef53db12e3d45094030cac0e69d384e44cc5978643dd4390041cad546e2.ttf) format("truetype");
    font-weight: 600;
    font-style: normal
}

@font-face {
    font-family: "Montserrat";
    src: url(/assets/montserrat-regular-webfont-cc730bc36272778104deb3754725004417689f984ca24f0a85ceacb9d2c102b1.eot);
    src: url(/assets/montserrat-regular-webfont-cc730bc36272778104deb3754725004417689f984ca24f0a85ceacb9d2c102b1.eot?#iefix) format("embedded-opentype"), url(/assets/montserrat-regular-webfont-2689fd5fa69e3427496f977d75de982466aebdef78ab9b97a510f1e7fe75feec.ttf) format("truetype");
    font-weight: 400;
    font-style: normal
}

@font-face {
    font-family: "Montserrat";
    src: url(/assets/montserrat-semibold-webfont-664d7873aa23a7dee18fb9563f80a70f21b2144e60f9275558dce19a2990dd9f.eot);
    src: url(/assets/montserrat-semibold-webfont-664d7873aa23a7dee18fb9563f80a70f21b2144e60f9275558dce19a2990dd9f.eot?#iefix) format("embedded-opentype"), url(/assets/montserrat-semibold-webfont-0563c10d1602f0e8bb1813e2473232f418952c5545a4d6d812e1964984fc29f0.ttf) format("truetype");
    font-weight: 600;
    font-style: normal
}

@font-face {
    font-family: "Montserrat";
    src: url(/assets/montserrat-bold-webfont-dd5428974e2cd8cbcf9e5ab65d7340997047a04e70a9d9619ceff74e158f3f6b.eot);
    src: url(/assets/montserrat-bold-webfont-dd5428974e2cd8cbcf9e5ab65d7340997047a04e70a9d9619ceff74e158f3f6b.eot?#iefix) format("embedded-opentype"), url(/assets/montserrat-bold-webfont-e0a627c9b8df39918fbd511d05bd460fab87e1c133daa03ac8a912d3433fbcb8.ttf) format("truetype");
    font-weight: bold;
    font-style: normal
}

@font-face {
    font-family: "Roboto Medium";
    src: url(/assets/Roboto-Medium-0c743a880dc0cfd9028f74d7b23db7131ff230f0927129418de147be4f556031.woff) format("woff");
    font-weight: 500;
    font-style: normal
}
</style>