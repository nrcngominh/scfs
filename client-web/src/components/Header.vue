<template>
    <div>
       <header id=header class="section u-pr">
                <div id="nav"  class="navbar">
                    <nav  class="Navbar">
                        <div id="navbar" class="container grid u-justify-center">
                            <div  class="Navbar-inner Navbar-height--44 grid-cell grid-cell--col10">
                                <div class=Navbar-header>
                                    <a class="Logo" @click="forwardLogin">
                                        <img id="bkLogo" src="@/assets/logobk1.png" alt="">
                                    </a>
                                    <div class=tablet--flex>
                                        <div class="Navbar-buttonMenu"> <span></span> <span></span> <span></span> <span></span> </div>
                                    </div>
                                </div>
                                <div class="Navbar-collapse">
                                    <ul class="Navbar-list">
                                        <li class="Navbar-item Dropdown">
                                            <a href="#" class="Navbar-link title f12 active"> <span> Home </span> </a>
                                        </li>

                                        <li class=Navbar-item>
                                            <a href="#" class="Navbar-link title f12 "> <span id="platform">Pricing</span> </a>
                                        </li>
                                        <li class=Navbar-item>
                                            <a href="#" class="Navbar-link title f12 "> <span>About us</span> </a>
                                        </li>
                                    </ul>  
                                </div>
                                
                            </div>
                            <div class="Navbar-element">
                                <ul id="nav_">
                                    <li :class = "{hidden: isActive}">
                                        <a @click="forwardLogin" class="button-small is-blue"><span>Login</span></a>
                                    </li>
                                    <li :class = "{hidden: isActive}">
                                        <a @click="forwardRegister" class="button-small is-blued"><span>Sign up</span></a>
                                    </li> 
                                    <li :class = "{hidden: isLogined}">
                                        <div id="avatar">
                                            <img src="@/assets/alarm.png" alt="">
                                        </div>
                                    </li> 
                                    <li id="cart" :class = "{hidden: isLogined}">
                                        <div id="avatar">
                                            <img src="@/assets/cart.png" alt="">
                                            <span id="count-cart">{{count}}</span> 
                                        </div>
                                        
                                    </li>    
                                    <li :class = "{hidden: isLogined}">
                                        <div class="dropdown" id="avatar">
                                            <img src="@/assets/account.png" alt=""> 
                                            <div class="dropdown-content">
                                                <a href="#">Account</a>
                                                <a href="#">Setting</a>
                                                <a @click="logout">Log out</a>
                                            </div>
                                        </div>
                                    </li>                   
                                </ul>
                                        <!-- <div id="avatar">
                                            <img src="@/assets/account.png" alt=""> 
                                        </div>
                                        <div class="navbar-dropdown">
                                            <ul class="navbar-dropdown-container">
                                                <li class="navbar-dropdown-iconLink">
                                                    <a href="">link1</a>
                                                </li>
                                                <li class="navbar-dropdown-iconLink">
                                                    <a href="">link2</a>
                                                </li>
                                            </ul>
                                        </div> -->
                            </div>
                        </div>
                    </nav>
                </div>
        </header>     
    </div>
</template>

<script>
import AxiosService from '../services/axios-service'

export default{
    props: ["count"],
    name: "Header",
    data() {
        return {
            email: "",
            isActive: false,
            isLogined: true,
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
            this.isLogined = true;
            this.isActive = false;
        }
    },
    async mounted() {
        const accessToken = this.$cookies.get("accessToken")
        await AxiosService.post('/api/auth', {
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
  min-width: 160px;
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
p.text.f20.is-txtWhite.u-mb40.u-mb24--tablet{
    margin-top: 30%;
    color: #f6b91e;
    font-size: 18px;
    font-weight: 800;
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
}
.Navbar-item a {
  text-transform: uppercase;
  text-decoration: none;
  display: inline-block;
  padding: 11px 3px;
  position: relative;
}
.Navbar-item:nth-child(n + 2) a:after {    
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

.f48 {
    font-size: 48px;
    line-height: 56px;
    letter-spacing: -.3px
}

.f36 {
    font-size: 36px;
    line-height: 44px;
    letter-spacing: -.2px
}

.f16 {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0
}

.f12 {
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0
}


@media (max-width:800px) {
    .f36--tablet {
        font-size: 36px;
        line-height: 44px;
        letter-spacing: -.2px;
    }
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
    background-image: url('../assets/bklast.png');
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

.grid-cell--col1 {
    flex: 0 0 8.3333333333%;
    max-width: 4.3333333333%;
}

.grid-cell--col5 {
    flex: 0 0 41.6666666667%;
    max-width: 41.6666666667%
}

.grid-cell--col6 {
    flex: 0 0 50%;
    max-width: 50%
}

.grid-cell--col10 {
    flex: 0 0 83.3333333333%;
    max-width: 70.3333333333%
}

.grid-cell--col12 {
    flex: 0 0 100%;
    max-width: 100%
}

@media (max-width:1224px) {
    .grid-cell--col1--desktop-s {
        flex: 0 0 8.3333333333%;
        max-width: 8.3333333333%
    }
    .grid-cell--col5--desktop-s {
        flex: 0 0 41.6666666667%;
        max-width: 41.6666666667%
    }
    .grid-cell--col10--desktop-s {
        flex: 0 0 83.3333333333%;
        max-width: 83.3333333333%
    }
    .grid-cell--col12--desktop-s {
        flex: 0 0 100%;
        max-width: 100%
    }
}

@media (max-width:800px) {
    .Logo img {
        width: 111px;
    }
    .grid-cell--col1--tablet {
        flex: 0 0 8.3333333333%;
        max-width: 8.3333333333%
    }
    .grid-cell--col5--tablet {
        flex: 0 0 41.6666666667%;
        max-width: 41.6666666667%
    }
    .grid-cell--col6--tablet {
        flex: 0 0 50%;
        max-width: 50%
    }
    .grid-cell--col10--tablet {
        flex: 0 0 83.3333333333%;
        max-width: 83.3333333333%
    }
    .grid-cell--col12--tablet {
        flex: 0 0 100%;
        max-width: 100%
    }
}

@media (max-width:600px) {
    .grid-cell--col1--mobile {
        flex: 0 0 8.3333333333%;
        max-width: 8.3333333333%
    }
    .grid-cell--col5--mobile {
        flex: 0 0 41.6666666667%;
        max-width: 41.6666666667%
    }
    .grid-cell--col6--mobile {
        flex: 0 0 50%;
        max-width: 50%
    }
    .grid-cell--col10--mobile {
        flex: 0 0 83.3333333333%;
        max-width: 83.3333333333%
    }
    .grid-cell--col12--mobile {
        flex: 0 0 100%;
        max-width: 100%
    }
    .grid-cell--col0--mobile {
        padding: 0
    }
}

@media (min-width:1224px) {
    .grid-cell--col1--desktop {
        flex: 0 0 8.3333333333%;
        max-width: 8.3333333333%
    }
    .grid-cell--col5--desktop {
        flex: 0 0 41.6666666667%;
        max-width: 41.6666666667%
    }
    .grid-cell--col6--desktop {
        flex: 0 0 50%;
        max-width: 50%
    }
    .grid-cell--col10--desktop {
        flex: 0 0 83.3333333333%;
        max-width: 83.3333333333%
    }
    .grid-cell--col12--desktop {
        flex: 0 0 100%;
        max-width: 100%
    }
}

@media (min-width:1632px) {
    .grid-cell--col1--desktop-l {
        flex: 0 0 8.3333333333%;
        max-width: 8.3333333333%
    }
    .grid-cell--col5--desktop-l {
        flex: 0 0 41.6666666667%;
        max-width: 41.6666666667%
    }
    .grid-cell--col6--desktop-l {
        flex: 0 0 50%;
        max-width: 50%
    }
    .grid-cell--col10--desktop-l {
        flex: 0 0 83.3333333333%;
        max-width: 83.3333333333%
    }
    .grid-cell--col12--desktop-l {
        flex: 0 0 100%;
        max-width: 100%
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

.Dropdown-inner {
    display: none;
    position: absolute;
    top: 100%;
    width: 224px;
    right: -114px;
    background: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .2);
    border-radius: 4px;
    transition: all .3s;
    z-index: 30;
    transition: all 2s ease;
    padding: 24px
}

.Dropdown-inner:before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    margin-left: -14px;
    top: -15px;
    border: 8px solid transparent;
    border-bottom: 8px solid rgba(210, 210, 210, .2)
}

.Dropdown-inner:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    margin-left: -12px;
    top: -11px;
    border: 6px solid transparent;
    border-bottom: 6px solid #fff
}

.Dropdown-inner.Dropdown-inner--userMenu {
    right: 0;
    padding: 0;
    top: 53px
}

.Dropdown-item {
    line-height: 20px;
    font-size: 13px;
    margin-bottom: 8px
}

.Dropdown-item:last-child {
    margin-bottom: 0
}

.Dropdown-link {
    display: inline-block;
    color: #2e3c43;
    transition: color .2s ease
}

.Dropdown-link:hover {
    text-decoration: none
}

.Dropdown--new {
    display: none;
    width: 300px;
    opacity: 0;
    pointer-events: none
}

.Dropdown--new:before {
    content: '';
    margin-left: 0;
    transform: translateX(-50%)
}

.Dropdown--new:after {
    content: '';
    margin-left: 0;
    transform: translateX(-50%)
}

.Dropdown--new.Dropdown-new--click-activated {
    opacity: 1;
    display: none;
    pointer-events: unset
}

.Dropdown:hover .Dropdown--new {
    display: block;
    opacity: 1;
    pointer-events: all
}

.Navbar {
    padding: 16px 0;
    z-index: 300;
    width: 100%;
}

.Navbar .Navbar-button {
    display: block
}

.Navbar .Navbar-buttonFixed {
    display: none
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
}

.NavbarMobile {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(46, 60, 67, .96);
    z-index: 900;
    text-align: center;
    display: none
}

.NavbarMobile .NavbarMobile-header {
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 16px 20px 0 16px
}

.NavbarMobile .NavbarMobile-collapse {
    width: 100%;
    display: block;
    flex: 1;
    margin-top: 68px
}

.NavbarMobile .Navbar-item {
    font-size: 16px;
    line-height: 24px;
    padding: 16px 0;
    margin: 0
}

.NavbarMobile .Navbar-subitem {
    font-size: 12px;
    line-height: 16px;
    padding: 8px 0
}

@media (max-width:600px) {
    .NavbarMobile .Navbar-subitem {
        height: 48px
    }
}

.NavbarMobile .NavbarMobile-list {
    padding: 0 0 16px 0
}

.NavbarMobile .NavbarMobile--tablet {
    display: block
}

.NavbarMobile .NavbarMobile--tabletList {
    padding: 0 10%;
    display: flex;
    flex-wrap: wrap
}

@media (max-width:600px) {
    .NavbarMobile .NavbarMobile--tabletList {
        padding: 0 5%
    }
}

.NavbarMobile .NavbarMobile--tabletList .Navbar-subitem {
    text-align: right;
    flex: 50%;
    max-width: 50%;
    padding-right: 20px;
    padding-left: 20px
}

@media (max-width:600px) {
    .NavbarMobile .NavbarMobile--tabletList .Navbar-subitem {
        padding-right: 10px;
        padding-left: 10px
    }
}

.NavbarMobile .NavbarMobile--tabletList .Navbar-subitem:nth-child(even) {
    text-align: left
}

.Navbar--fixed {
    position: fixed;
    top: -80px;
    z-index: 300;
    width: 100%;
    border-bottom: 1px solid #eee;
    background: #fff;
    opacity: 0;
    transition: all .3s ease;
    transform: translate3d(0, 0, 0)
}

.Navbar--fixed.is-active {
    top: 0;
    opacity: 1
}

@media (max-width:800px) {
    .Navbar--fixed.is-active {
        display: none
    }
}

.Navbar.Navbar--fixed.is-active {
    top: 0;
    opacity: 1
}

@media (max-width:800px) {
    .Navbar.Navbar--fixed.is-active {
        display: none
    }
}

.Navbar.Navbar--fixed.is-active .Navbar-link {
    color: #2e3c43
}

.Navbar.Navbar--fixed.is-active .Navbar-icon polygon {
    fill: #2e3c43
}

.Navbar.Navbar--fixed.is-active .Navbar-button {
    display: none
}

.Navbar.Navbar--fixed.is-active .Navbar-buttonFixed {
    display: block
}

.Navbar--positive .Navbar,
.Navbar.u-positive {
    display: block;
    top: 0;
    opacity: 1
}

.Navbar--positive .Navbar .Navbar-link,
.Navbar.u-positive .Navbar-link {
    color: #2e3c43
}

.Navbar--positive .Navbar .Navbar-icon polygon,
.Navbar.u-positive .Navbar-icon polygon {
    fill: #2e3c43
}

.Navbar--positive .Navbar .Navbar-button,
.Navbar.u-positive .Navbar-button {
    display: none
}

.Navbar--positive .Navbar .Navbar-buttonFixed,
.Navbar.u-positive .Navbar-buttonFixed {
    display: block
}

@media (max-width:800px) {
    .Navbar--positive .Navbar .Navbar-icon polygon,
    .Navbar.u-positive .Navbar-icon polygon {
        fill: #fff
    }
    .Navbar--positive .Navbar .Navbar-buttonMenu span,
    .Navbar.u-positive .Navbar-buttonMenu span {
        background: #2e3c43
    }
    .Navbar--positive .Navbar .Navbar-buttonMenu.open:not(.search-open) span,
    .Navbar.u-positive .Navbar-buttonMenu.open:not(.search-open) span {
        background: #fff
    }
}

@media (max-width:800px) {
    .Navbar-buttonMenu {
        width: 46px;
        height: 40px;
        position: relative;
        transform: rotate(0);
        transition: 250ms ease-in-out;
        cursor: pointer;
        border: 12px solid transparent;
        display: block;
        margin-right: -40px;
        margin-bottom: 30px;
        background-color: #249cd3;
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
}

.Navbar-header .Logo.Logo--hide {
    max-width: 0;
    margin: 0;
    opacity: 0
}

@media (max-width:1224px) {
    .Navbar-header .Logo {
        margin-right: 20px
    }
}

.Navbar .Logo--negative {
    height: 48px;
    display: flex
}

@media (max-width:1224px) {
    .Navbar .Logo--negative {
        height: 36px
    }
}

.Navbar .Logo--positive {
    height: 48px;
    display: none
}

@media (max-width:1224px) {
    .Navbar .Logo--positive {
        height: 36px
    }
}

.Navbar svg {
    max-width: 100%
}

.Navbar--positive .Navbar .Logo--positive,
.Navbar.Navbar--fixed.is-active .Logo--positive,
.Navbar.u-positive .Logo--positive {
    width: 81px;
    display: flex
}

.Navbar--positive .Navbar .Logo--negative,
.Navbar.Navbar--fixed.is-active .Logo--negative,
.Navbar.u-positive .Logo--negative {
    display: none
}

.Navbar--scroll--vertical {
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch
}

.Navbar--userAvatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    overflow: hidden;
    background-color: rgba(0, 0, 0, .08)
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

@media (max-width:800px) {
    xzc
    .u-mt32--tablet {
        margin-top: 32px
    }
    .u-mb48--tablet {
        margin-bottom: 48px
    }
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

.desktop-l {
    display: block
}

@media (max-width:1632px) {
    .desktop-l {
        display: none
    }
}

.mobile--flex {
    display: none
}

@media (max-width:600px) {
    .mobile--flex {
        display: flex
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

.mobile--inline {
    display: none
}

@media (max-width:600px) {
    .mobile--inline {
        display: inline
    }
}

.tablet--inline {
    display: none
}

@media (max-width:800px) {
    .tablet--inline {
        display: inline
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
