<template>
    <div>
       <header id=header class="section u-pr">
                <div id="nav"  class="navbar">
                    <nav  class="Navbar">
                        <div id="navbar" class="container grid u-justify-center">
                            <div  class="Navbar-inner Navbar-height--44 grid-cell grid-cell--col10">
                                <div class=Navbar-header>
                                    <a class="Logo" @click="home">
                                        <img id="bkLogo" src="@/assets/images/logobk1.png" alt="">
                                    </a>
                                    <div class=tablet--flex>
                                        <div class="Navbar-buttonMenu"> <span></span> <span></span> <span></span> <span></span> </div>
                                    </div>
                                    <!-- <div class="Navbar-mobile">
                                        <ul>
                                            <li>Home</li>
                                            <li>Pricing</li>
                                            <li>About</li>
                                        </ul>
                                        <ul>
                                            <li :class = "{hidden: isActive}">
                                                <a @click="forwardLogin" class="button-small is-blue"><span>Login</span></a>
                                            </li>
                                            <li :class = "{hidden: isActive}">
                                                <a @click="forwardRegister" class="button-small is-blued"><span>Sign up</span></a>
                                            </li>
                                        </ul>
                                    </div> -->
                                </div>
                                <div class="Navbar-collapse">
                                    <ul class="Navbar-list">
                                        <li class="Navbar-item Dropdown">
                                            <a @click="home" :class = "{active: home_active}" class="Navbar-link title f12"> <span> Home </span> </a>
                                        </li>

                                        <li class=Navbar-item>
                                            <a @click="gotrans" :class = "{active: trans_active}" class="Navbar-link title f12 "> <span id="platform">Transaction</span> </a>
                                        </li>
                                        <li class=Navbar-item>
                                            <a :class = "{active: about_active}" class="Navbar-link title f12 "> <span>About Us</span> </a>
                                        </li>
                                    </ul>  
                                </div>
                                
                            </div>
                            <div class="Navbar-element">
                                <ul>
                                    <li :class = "{hidden: isActive}">
                                        <a @click="forwardLogin" class="button-small is-blue"><span>Đăng nhập</span></a>
                                    </li>
                                    <li :class = "{hidden: isActive}">
                                        <a @click="forwardRegister" class="button-small is-blued"><span>Đăng ký</span></a>
                                    </li> 
                                    <li :class = "{hidden: isLogined}">
                                        <div class="dropdown" id="avatar">
                                            <img src="@/assets/images/alarm.png" alt="">
                                            <span id="count-cart">{{$store.state.notifications.length}}</span>
                                            <div class="dropdown-content">
                                                <a v-for="noti in $store.state.notifications"
                                                :key="noti.id">
                                                <div @click="$router.push(noti.url)">{{ noti.message }}</div>
                                                </a>
                                            </div>
                                        </div>
                                    </li> 
                                    <li id="cart" :class = "{hidden: isLogined}">
                                        <div @click="checkout" id="avatar">
                                            <img src="@/assets/images/cart.png" alt="">
                                            <span id="count-cart">{{$store.state.cart.length}}</span> 
                                        </div>
                                        
                                    </li>    
                                    <li :class = "{hidden: isLogined}">
                                        <div class="dropdown" id="avatar">
                                            <img src="@/assets/images/account.png" alt=""> 
                                            <div class="dropdown-content">
                                                <a href="#">Tài khoản</a>
                                                <a @click="trans">Đơn hàng của tôi</a>
                                                <a href="#">Cài đặt</a>
                                                <a @click="logout">Đăng xuất</a>
                                            </div>
                                        </div>
                                    </li>                   
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
        </header>     
    </div>
</template>

<script>
export default{
    name: "Header",
    data() {
        return {
            notifys: [],
            email: "",
            isActive: false,
            isLogined: true,
            home_active: false,
            trans_active: false,
            about_active: false
        }
    },
    methods: {
        async forwardLogin() {
            this.$router.push('/login')
        },
        async forwardRegister() {
            this.$router.push('/register')
        },
        async logout() {
            this.$cookies.remove('accessToken')
            delete this.$http.defaults.headers['x-access-token']
            this.isLogined = true;
            this.isActive = false;
        },
        async trans() {
            this.$router.push('/transaction');
        },
        async checkout() {
            this.$router.push('/checkout')
        },
        gotrans() {

        },
        home() {
            this.$router.push('/');
        }

    },
    async mounted() {
        const accessToken = this.$cookies.get("accessToken")
        
        await this.$http.post('/api/auth', {
          accessToken: accessToken
        })
        this.isActive = true;
        this.isLogined = false;
    },

}
</script>

<style scoped>
.dropdown {
  float: left;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #ddd;
  text-decoration: none;
  color: #000;
}

.dropdown:hover .dropdown-content {
  display: block;
 
}
* {
    box-sizing: border-box
}
.navbar-dropdown {
    position: absolute;
    right: 0;
    visibility: visible;
    width: 360px;
    margin-top: 18px;
    opacity: 1;
    pointer-events: none;
}
.navbar-dropdown-container {
    position: relative;
    padding: 28px 24px 36px;
    background-color: #fff;
}
.navbar-dropdown-iconLink {
    display: flex;
    margin-bottom: 20px;
}
#avatar img {
    width: 30px;
    height: 30px;
    cursor: pointer;
}
.hidden {
    display: none;
}

.Navbar-element li{
    float: left;
    margin-left: 16px;
}
.Navbar-element a {
    cursor: pointer;
    border-bottom: 0.3px solid #9d9797d9;
}
.Navbar-element a:hover {
    color: #fff;
}
.Navbar-element ul {
    width: 100%;
}
.sticky {
  position: fixed;
  top: 0px;
  width: 100%;
}
.jUp {
    margin-top: 83px;
}
body,
html {
    height: 100%
}

body {
    color: #2e3c43;
    font-family: "Open sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 20px;
    line-height: 32px;
    -webkit-font-smoothing: antialiased;
    -webkit-text-rendering: optimizeLegibility;
    text-rendering: optimizeLegibility
}
#nav {
    background-color: #fff;
    box-shadow: 0 1px 6px 0 rgba(32,33,36,.28);
}

header#header{
    /* box-shadow: 1px 0px 8px 6px #888888; */
    box-shadow: 0 1px 6px 0 rgba(32,33,36,.28);
    /* background-color: #fff; */
}
a {
    color: #066a9b;
    text-decoration: none
}
a.button.u-mr24.u-mb24 {
    background-color: orangered;
}
a.button-small {
 
    display: inline-block;
    border-radius: 8px;
    font: 600 16px/24px Montserrat, "Helvetica Neue", Helvetica, Arial, sans-serif;
    padding: 6px 16px;
    text-align: center;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    color: #fff;
}
.is-blue {
    background: #066a9b;
}
.is-blued {
    background: #15b7d2;
}
a.Navbar-link.title.f12 {
    font-size: 18px;
    text-transform: uppercase;
}
a:hover {
    text-decoration: underline
}

button {
    border: 0;
    cursor: pointer;
    font-family: "Open sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    margin: 0;
    outline: 0
}

iframe,
img {
    max-width: 100%;
    vertical-align: bottom
}
.Logo img {
    width: 200px;
    margin-bottom: 39%;
}

input {
    outline: 0
}

a,
body,
center,
div,
dl,
footer,
form,
h1,
h2,
h3,
h4,
h5,
h6,
header,
html,
i,
img,
label,
li,
menu,
nav,
p,
section,
span,
table,
ul{
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline
}

header,
menu,
nav,
section {
    display: block
}

body {
    line-height: 1
}

ul {
    list-style: none
}
.active {
  border-bottom: 3px solid #249cd3;
  text-decoration: none;
}
.Navbar-item a {
  text-transform: uppercase;
  text-decoration: none;
  display: inline-block;
  padding: 11px 3px;
  position: relative;
  cursor: pointer;
}
.Navbar-item a:after {    
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 3px;
  left: 50%;
  position: absolute;
  background: #249cd3;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
.Navbar-item a:hover:after { 
  width: 100%;
  left: 0; 
}

.f12 {
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0
}

.text {
    font-family: "Open sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 400;
    letter-spacing: 0
}

.title {
    font-family: Montserrat, "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 600
}

.intro {
    background-image: url('../assets/images/bklast.png');
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    width: 100%;
    display: table;
    top: 0;
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
    display: flex;
    flex-wrap: wrap;
    flex: 1
}

.grid.grid--column {
    flex-direction: column
}

@media (max-width:1224px) {
    .container {
        max-width: 960px
    }
    .grid-cell {
        padding-right: 12px;
        padding-left: 12px
    }
}

@media (max-width:600px) {
    .grid-cell {
        padding-right: 4px;
        padding-left: 14px
    }
}

@media (min-width:1224px) {
    .container {
        max-width: 1224px
    }
    .grid-cell {
        padding-right: 12px;
        padding-left: 12px
    }
    /* header#header {
        min-height: 696.8px;
    } */
}

@media (min-width:1632px) {
    .container {
        max-width: 1632px
    }
    .grid-cell {
        padding-right: 16px;
        padding-left: 16px
    }
}

.grid-cell--col10 {
    flex: 0 0 83.3333333333%;
    max-width: 70.3333333333%
}

@media (max-width:800px) {
    .Logo img {
        width: 111px;
    }
}
 
.button {
    display: inline-block;
    border-radius: 8px;
    font: 600 16px/24px Montserrat, "Helvetica Neue", Helvetica, Arial, sans-serif;
    padding: 16px 24px;
    text-align: center;
    white-space: nowrap;
    position: relative;
    overflow: hidden
}

.button.is-outline {
    padding: 14px 22px
}

.button:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: transparent;
    transition: background-color .1s linear
}

.button span {
    position: relative;
    display: block;
    overflow: hidden
}
.button-small span {
    position: relative;
    display: block;
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
.button-small span:before {
    content: '';
    position: absolute;
    transition: transform .3s ease;
    left: -1px;
    bottom: 0;
    width: 100%;
    height: 1.5px;
    background: currentColor;
    transform: translateX(-100%)
}
span#count-cart {
    border: 2px solid red;
    border-radius: 50%;
    padding-left: 4px;
    padding-right: 4px;
    font-size: 12px;
    background-color: red;
    color: white;
    font-weight: 800;
}
.button:hover {
    text-decoration: none
}
.button-small:hover {
    text-decoration: none
}
.button:hover span:before {
    transform: translateX(0)
}
.button-small:hover span:before {
    transform: translateX(0)
}

.button>span {
    position: relative
}

.button.is-white.is-outline {
    background-color: transparent;
    color: #fff;
    border: 2px solid #fff
}

.button.is-White {
    color: #fff;
}

.button--arrow span:after {
    content: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAyMCAxMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPHBhdGggZD0iTS0yLTdoMjR2MjRILTJ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjRkZGIiBkPSJNMTQuNzA3LjI5M2wtMS40MTQgMS40MTRMMTUuNTg2IDRIMHYyaDE1LjU4NmwtMi4yOTMgMi4yOTMgMS40MTQgMS40MTRMMTkuNDE0IDV6Ii8+CiAgPC9nPgo8L3N2Zz4=);
    margin-left: 12px;
}

.Dropdown {
    position: relative
}

.Dropdown-link {
    display: inline-block;
    color: #2e3c43;
    transition: color .2s ease
}

.Dropdown-link:hover {
    text-decoration: none
}
.dropdown-content a:hover {
    color:black;
}
.Navbar {
    padding: 10px 0;
    z-index: 300;
    width: 100%;
}

.Navbar .Navbar-button {
    display: block
}

.Navbar-inner {
    z-index: 1000;
    display: flex
}

.Navbar-inner .Navbar-item {
    display: flex
}

.Navbar-header {
    display: flex;
}

.Navbar-collapse {
    display: flex;
    width: 100%;
    justify-content: space-between;
    position: relative;
    margin: 0;
}

.Navbar-list {
    display: flex;
    align-items: center;
    list-style: none
}
.Navbar-list span{
    color: #066a9b;
}
.Navbar-item {
    margin-right: 40px;
    padding: 12px 0
}

@media (max-width:1224px) {
    .Navbar-item {
        margin-right: 20px
    }
}

.Navbar-link {
    color: #fff
}

.Navbar-link:not(.button):hover {
    text-decoration: none
}

.Navbar-icon {
    vertical-align: middle
}

@media (max-width:800px) {
    .Navbar-collapse {
        display: none
    }
    .Navbar-header {
        justify-content: space-between;
        align-items: center;
        width: 100%
    }
    
    .Navbar-element {
        display: none
    }
    .Navbar-buttonMenu {
        width: 46px;
        height: 40px;
        transform: rotate(0);
        transition: 250ms ease-in-out;
        cursor: pointer;
        border: 12px solid transparent;
        display: block;
        background-color: #249cd3;
        position: absolute;
        right: 7%;
        top: 29%;
    }
    .Navbar-buttonMenu.open {
        z-index: 1001
    }
    .Navbar-buttonMenu span {
        display: block;
        position: absolute;
        height: 2px;
        width: 100%;
        background: #fff;
        border-radius: 2px;
        opacity: 1;
        left: 0;
        transform: rotate(0);
        transition: 250ms ease-in-out
    }
    .Navbar-buttonMenu span:nth-child(1) {
        top: 0
    }
    .Navbar-buttonMenu span:nth-child(2),
    .Navbar-buttonMenu span:nth-child(3) {
        top: 50%;
        margin-top: -1px
    }
    .Navbar-buttonMenu span:nth-child(4) {
        top: 100%;
        margin-top: -1px
    }
    .Navbar-buttonMenu.open span:nth-child(1) {
        top: 50%;
        width: 0%;
        left: 50%;
        margin-top: -1px
    }
    .Navbar-buttonMenu.open span:nth-child(2) {
        transform: rotate(45deg)
    }
    .Navbar-buttonMenu.open span:nth-child(3) {
        transform: rotate(-45deg)
    }
    .Navbar-buttonMenu.open span:nth-child(4) {
        top: 50%;
        width: 0%;
        left: 50%;
        margin-top: -1px
    }
}
.Navbar-header .Logo {
    display: flex;
    align-items: center;
    margin-right: 40px;
    margin-top: 20px;
    cursor: pointer;
}

@media (max-width:1224px) {
    .Navbar-header .Logo {
        margin-right: 20px
    }
}

.Navbar svg {
    max-width: 100%
}

.Navbar-height--44 {
    height: 43px;
    margin-left: 0%;
    margin-top: 18px;
    
}

.Navbar-container {
    min-height: 76px
}

.u-ml12 {
    margin-left: 12px
}

.u-mb24 {
    margin-bottom: 24px
}
.u-mr24 {
    margin-right: 24px;
}
.u-mb40 {
    margin-bottom: 40px
}

.u-mt72 {
    margin-top: 100px
}

.u-mb120 {
    margin-bottom: 120px
}

.u-flex {
    display: flex
}

.mobile {
    display: none
}

@media (max-width:600px) {
    .mobile {
        display: block
    }
}

.tablet {
    display: none
}

@media (max-width:800px) {
    .tablet {
        display: block
    }
}

.tablet--flex {
    display: none
}

@media (max-width:800px) {
    .tablet--flex {
        display: flex
    }
}

.u-pr {
    position: relative
}

.u-pa {
    position: absolute
}

.u-align-center {
    align-items: center
}
</style>
