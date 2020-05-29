<template>
    <div class=container>
       <header id=header class="section is-bgCartoRed u-pr js-header js-section">
                <div class=navbar>
                    <nav class="Navbar">
                        <div class="container grid u-justify-center">
                            <div class="Navbar-inner Navbar-height--44 grid-cell grid-cell--col10">
                                <div class=Navbar-header>
                                    <a class="Logo js-Navbar-logo" href="/">
                                    </a>
                                    <div class=tablet--flex>
                                        <div class="Navbar-buttonMenu js-Navbar-button"> <span></span> <span></span> <span></span> <span></span> </div>
                                    </div>
                                </div>
                                <div class=Navbar-collapse>
                                    <ul class=Navbar-list>
                                        <li class="Navbar-item Dropdown">
                                            <a href="/platform/" class="Navbar-link title f12 js-Action--NAVplatform"> <span> Platform </span> </a>
                                            <div class="Dropdown-inner Dropdown--center Dropdown--new Dropdown--platform">
                                                <ul class=grid>
                                                    <li class="Dropdown-item grid-cell--col12 u-flex u-mb24">
                                                        <a href="/platform/data-ingestion-management/" class="Dropdown-link js-Action--NAVplatform u-flex u-align-center"> <svg width=36 height=36 viewBox="0 0 36 36" xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink> <defs> <circle id=a cx=17.82 cy=17.82 r="17.82"/> </defs> <g fill=none fill-rule=evenodd> <mask id=b fill=#fff> <use xlink:href="#a"/> </mask> <use fill=#F2F6F9 xlink:href="#a"/> <g mask=url(#b) stroke-linecap=round stroke-linejoin=round> <path stroke=#162945 stroke-width=1.24 d="M14.4 21.74h3.58v13.3M14.42 11.77h3.56V-4.85"/> <path d="M-6.97 15.09h24.94c3.57 0 3.57 0 3.57-6.65M-6.97 18.41h24.94c3.57 0 3.57 0 3.57 6.65" stroke=#EB1510 stroke-width="1.24"/> </g> </g> </svg>
                                                            <div class=u-ml12>
                                                                <p class="text is-caption is-txtBaseGrey is-semibold Dropdown-link-platform">Data Ingestion & Management</p>
                                                                <p class="text is-small is-txtBaseGrey"></p>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>

                                        <li class=Navbar-item>
                                            <a href="/pricing/" class="Navbar-link title f12 js-Action--NAVpricing"> <span>Pricing</span> </a>
                                        </li>
                                        <li class=Navbar-item>
                                            <a href="/blog/" class="Navbar-link title f12 js-Action--NAVblog"> <span>Blog</span> </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="NavbarMobile js-Navbar js-Navbar-mobile">
                            <ul class="NavbarMobile-collapse Navbar--scroll--vertical">
                                <li class=Navbar-item>
                                    <a href="/platform/" class="Navbar-link js-Action--NAVmobile"> <span class="title u-negative">Platform</span> </a>
                                </li>
                                <li class="Navbar-item NavbarMobile-list">
                                    <ul>
                                        <li class=Navbar-subitem> <a href="/platform/data-ingestion-management/" class=Navbar-link><span class="text is-small is-txtWhite js-Action--NAVmobile">Data Ingestion & Management</span></a> </li>
                                    </ul>
                                </li>

                                <li class=Navbar-item>
                                    <a href="/pricing/" class="Navbar-link js-Action--NAVmobile"> <span class="title u-negative">Pricing</span> </a>
                                </li>
                                <li class=Navbar-item>
                                    <a href="/blog/" class="Navbar-link js-Action--NAVmobile"> <span class="title u-negative">Blog</span> </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div class="grid u-mt72 u-mt32--tablet">
                    <div class="grid-cell grid-cell--col1"></div>
                    <div class="grid-cell grid-cell--col6 grid-cell--col10--tablet">
                        <div class="title f48 f64--desktop-l f36--tablet is-txtWhite u-mb40 u-pr"></div>
                        <p class="text f20 is-txtWhite u-mb40 u-mb24--tablet f24--desktop-l">The university is currently has one food court located
                            <br/> in its Ly Thuong Kiet campus and is going to build another one
                            <br> in Di An campus.</p>
                    </div>
                    <div class="grid-cell--col5 grid-cell--col1--tablet"></div>
                    <div class=grid-cell--col1></div>
                    <div class="grid-cell grid-cell--col10 u-mb120 u-mb48--tablet"> <a href=#request-demo-form class="button is-navyBlue button--arrow js-header-button js-Action--CTAbody1A u-mr24 u-mb24"><span>ORDER NOW</span></a>
                        
                    </div>
                </div>
            </header>     
    </div>
</template>

<script>
    export default{
        name: "Header"
    }
</script>

<style scoped>
* {
    box-sizing: border-box
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

p.text.f20.is-txtWhite.u-mb40.u-mb24--tablet.f24--desktop-l {
    margin-top: 30%;
    color: white;
    font-size: 18px;
}

a {
    color: #1785fb;
    text-decoration: none
}
a.button.is-navyBlue.button--arrow.js-header-button.js-Action--CTAbody1A.u-mr24.u-mb24 {
    background-color: orangered;
}
a:hover {
    text-decoration: underline
}

strong {
    font-weight: 600
}

em {
    font-style: italic
}

abbr {
    border-bottom: 1px dotted #ddd
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

@media (max-width:600px) {
    iframe {
        width: 1px;
        min-width: 100%
    }
}

code,
pre {
    border: 1px solid rgba(46, 60, 67, .1);
    border-radius: 4px;
    font-family: 'PT Mono', monospace
}

code {
    padding: 1px 5px
}

pre {
    font-size: 14px;
    line-height: 24px;
    overflow-x: auto;
    padding: 16px;
    tab-size: 2;
    white-space: pre-wrap
}

@media (max-width:600px) {
    pre {
        font-size: 16px
    }
}

pre>code {
    border: 0;
    padding-left: 0;
    padding-right: 0
}

input {
    outline: 0
}

sup {
    font-size: 85%;
    position: relative;
    top: -6px
}

a,
abbr,
acronym,
address,
applet,
article,
aside,
audio,
b,
big,
blockquote,
body,
canvas,
caption,
center,
cite,
code,
dd,
del,
details,
dfn,
div,
dl,
dt,
em,
embed,
fieldset,
figcaption,
figure,
footer,
form,
h1,
h2,
h3,
h4,
h5,
h6,
header,
hgroup,
html,
i,
iframe,
img,
ins,
kbd,
label,
legend,
li,
mark,
menu,
nav,
object,
ol,
output,
p,
pre,
q,
ruby,
s,
samp,
section,
small,
span,
strike,
strong,
sub,
summary,
sup,
table,
tbody,
td,
tfoot,
th,
thead,
time,
tt,
u,
ul,
video {
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

ol,
ul {
    list-style: none
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

@media (max-width:600px) {
    .f84--mobile {
        font-size: 84px;
        line-height: 96px;
        letter-spacing: -1px
    }
    .f64--mobile {
        font-size: 64px;
        line-height: 72px;
        letter-spacing: -.5px
    }
    .f48--mobile {
        font-size: 48px;
        line-height: 56px;
        letter-spacing: -.3px
    }
    .f36--mobile {
        font-size: 36px;
        line-height: 44px;
        letter-spacing: -.2px
    }
    .f32--mobile {
        font-size: 32px;
        line-height: 40px;
        letter-spacing: -.1px
    }
    .f24--mobile {
        font-size: 24px;
        line-height: 32px;
        letter-spacing: 0
    }
    .f20--mobile {
        font-size: 20px;
        line-height: 28px;
        letter-spacing: 0
    }
    .f16--mobile {
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0
    }
    .f12--mobile {
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 0
    }
}

@media (max-width:800px) {
    .f84--tablet {
        font-size: 84px;
        line-height: 96px;
        letter-spacing: -1px
    }
    .f64--tablet {
        font-size: 64px;
        line-height: 72px;
        letter-spacing: -.5px
    }
    .f48--tablet {
        font-size: 48px;
        line-height: 56px;
        letter-spacing: -.3px
    }
    .f36--tablet {
        font-size: 36px;
        line-height: 44px;
        letter-spacing: -.2px
    }
    .f32--tablet {
        font-size: 32px;
        line-height: 40px;
        letter-spacing: -.1px
    }
    .f24--tablet {
        font-size: 24px;
        line-height: 32px;
        letter-spacing: 0
    }
    .f20--tablet {
        font-size: 20px;
        line-height: 28px;
        letter-spacing: 0
    }
    .f16--tablet {
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0
    }
    .f12--tablet {
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 0
    }
}

@media (max-width:1224px) {
    .f84--desktop-s {
        font-size: 84px;
        line-height: 96px;
        letter-spacing: -1px
    }
    .f64--desktop-s {
        font-size: 64px;
        line-height: 72px;
        letter-spacing: -.5px
    }
    .f48--desktop-s {
        font-size: 48px;
        line-height: 56px;
        letter-spacing: -.3px
    }
    .f36--desktop-s {
        font-size: 36px;
        line-height: 44px;
        letter-spacing: -.2px
    }
    .f32--desktop-s {
        font-size: 32px;
        line-height: 40px;
        letter-spacing: -.1px
    }
    .f24--desktop-s {
        font-size: 24px;
        line-height: 32px;
        letter-spacing: 0
    }
    .f20--desktop-s {
        font-size: 20px;
        line-height: 28px;
        letter-spacing: 0
    }
    .f16--desktop-s {
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0
    }
    .f12--desktop-s {
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 0
    }
}

@media (min-width:1632px) {
    .f84--desktop-l {
        font-size: 84px;
        line-height: 96px;
        letter-spacing: -1px
    }
    .f64--desktop-l {
        font-size: 64px;
        line-height: 72px;
        letter-spacing: -.5px
    }
    .f48--desktop-l {
        font-size: 48px;
        line-height: 56px;
        letter-spacing: -.3px
    }
    .f36--desktop-l {
        font-size: 36px;
        line-height: 44px;
        letter-spacing: -.2px
    }
    .f32--desktop-l {
        font-size: 32px;
        line-height: 40px;
        letter-spacing: -.1px
    }
    .f24--desktop-l {
        font-size: 24px;
        line-height: 32px;
        letter-spacing: 0
    }
    .f20--desktop-l {
        font-size: 20px;
        line-height: 28px;
        letter-spacing: 0
    }
    .f16--desktop-l {
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0
    }
    .f12--desktop-l {
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 0
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

@media (max-width:800px) {
    .is-centered--tablet {
        text-align: center
    }
}

@media (max-width:600px) {
    .is-left--mobile {
        text-align: left
    }
}

@media (max-width:800px) {
    .is-left--tablet {
        text-align: left
    }
}

.is-bgCartoRed {
    background-image: url('../assets/bk.png');
    background-repeat: no-repeat;
    background-size: contain;
    height: 100vh;
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
        padding-left: 4px
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

.grid-cell--col0 {
    flex: 0 0 0%;
    max-width: 0%
}

.grid-cell--col1 {
    flex: 0 0 8.3333333333%;
    max-width: 8.3333333333%
}

.grid-cell--col2 {
    flex: 0 0 16.6666666667%;
    max-width: 16.6666666667%
}

.grid-cell--col3 {
    flex: 0 0 25%;
    max-width: 25%
}

.grid-cell--col4 {
    flex: 0 0 33.3333333333%;
    max-width: 33.3333333333%
}

.grid-cell--col5 {
    flex: 0 0 41.6666666667%;
    max-width: 41.6666666667%
}

.grid-cell--col6 {
    flex: 0 0 50%;
    max-width: 50%
}

.grid-cell--col7 {
    flex: 0 0 58.3333333333%;
    max-width: 58.3333333333%
}

.grid-cell--col8 {
    flex: 0 0 66.6666666667%;
    max-width: 66.6666666667%
}

.grid-cell--col9 {
    flex: 0 0 75%;
    max-width: 75%
}

.grid-cell--col10 {
    flex: 0 0 83.3333333333%;
    max-width: 83.3333333333%
}

.grid-cell--col11 {
    flex: 0 0 91.6666666667%;
    max-width: 91.6666666667%
}

.grid-cell--col12 {
    flex: 0 0 100%;
    max-width: 100%
}

@media (max-width:1224px) {
    .grid-cell--col0--desktop-s {
        flex: 0 0 0%;
        max-width: 0%
    }
    .grid-cell--col1--desktop-s {
        flex: 0 0 8.3333333333%;
        max-width: 8.3333333333%
    }
    .grid-cell--col2--desktop-s {
        flex: 0 0 16.6666666667%;
        max-width: 16.6666666667%
    }
    .grid-cell--col3--desktop-s {
        flex: 0 0 25%;
        max-width: 25%
    }
    .grid-cell--col4--desktop-s {
        flex: 0 0 33.3333333333%;
        max-width: 33.3333333333%
    }
    .grid-cell--col5--desktop-s {
        flex: 0 0 41.6666666667%;
        max-width: 41.6666666667%
    }
    .grid-cell--col6--desktop-s {
        flex: 0 0 50%;
        max-width: 50%
    }
    .grid-cell--col7--desktop-s {
        flex: 0 0 58.3333333333%;
        max-width: 58.3333333333%
    }
    .grid-cell--col8--desktop-s {
        flex: 0 0 66.6666666667%;
        max-width: 66.6666666667%
    }
    .grid-cell--col9--desktop-s {
        flex: 0 0 75%;
        max-width: 75%
    }
    .grid-cell--col10--desktop-s {
        flex: 0 0 83.3333333333%;
        max-width: 83.3333333333%
    }
    .grid-cell--col11--desktop-s {
        flex: 0 0 91.6666666667%;
        max-width: 91.6666666667%
    }
    .grid-cell--col12--desktop-s {
        flex: 0 0 100%;
        max-width: 100%
    }
    .grid-cell--col0--desktop-s {
        padding: 0
    }
}

@media (max-width:800px) {
    .grid-cell--col0--tablet {
        flex: 0 0 0%;
        max-width: 0%
    }
    .grid-cell--col1--tablet {
        flex: 0 0 8.3333333333%;
        max-width: 8.3333333333%
    }
    .grid-cell--col2--tablet {
        flex: 0 0 16.6666666667%;
        max-width: 16.6666666667%
    }
    .grid-cell--col3--tablet {
        flex: 0 0 25%;
        max-width: 25%
    }
    .grid-cell--col4--tablet {
        flex: 0 0 33.3333333333%;
        max-width: 33.3333333333%
    }
    .grid-cell--col5--tablet {
        flex: 0 0 41.6666666667%;
        max-width: 41.6666666667%
    }
    .grid-cell--col6--tablet {
        flex: 0 0 50%;
        max-width: 50%
    }
    .grid-cell--col7--tablet {
        flex: 0 0 58.3333333333%;
        max-width: 58.3333333333%
    }
    .grid-cell--col8--tablet {
        flex: 0 0 66.6666666667%;
        max-width: 66.6666666667%
    }
    .grid-cell--col9--tablet {
        flex: 0 0 75%;
        max-width: 75%
    }
    .grid-cell--col10--tablet {
        flex: 0 0 83.3333333333%;
        max-width: 83.3333333333%
    }
    .grid-cell--col11--tablet {
        flex: 0 0 91.6666666667%;
        max-width: 91.6666666667%
    }
    .grid-cell--col12--tablet {
        flex: 0 0 100%;
        max-width: 100%
    }
    .grid-cell--col0--tablet {
        padding: 0
    }
}

@media (max-width:600px) {
    .grid-cell--col0--mobile {
        flex: 0 0 0%;
        max-width: 0%
    }
    .grid-cell--col1--mobile {
        flex: 0 0 8.3333333333%;
        max-width: 8.3333333333%
    }
    .grid-cell--col2--mobile {
        flex: 0 0 16.6666666667%;
        max-width: 16.6666666667%
    }
    .grid-cell--col3--mobile {
        flex: 0 0 25%;
        max-width: 25%
    }
    .grid-cell--col4--mobile {
        flex: 0 0 33.3333333333%;
        max-width: 33.3333333333%
    }
    .grid-cell--col5--mobile {
        flex: 0 0 41.6666666667%;
        max-width: 41.6666666667%
    }
    .grid-cell--col6--mobile {
        flex: 0 0 50%;
        max-width: 50%
    }
    .grid-cell--col7--mobile {
        flex: 0 0 58.3333333333%;
        max-width: 58.3333333333%
    }
    .grid-cell--col8--mobile {
        flex: 0 0 66.6666666667%;
        max-width: 66.6666666667%
    }
    .grid-cell--col9--mobile {
        flex: 0 0 75%;
        max-width: 75%
    }
    .grid-cell--col10--mobile {
        flex: 0 0 83.3333333333%;
        max-width: 83.3333333333%
    }
    .grid-cell--col11--mobile {
        flex: 0 0 91.6666666667%;
        max-width: 91.6666666667%
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
    .grid-cell--col0--desktop {
        flex: 0 0 0%;
        max-width: 0%
    }
    .grid-cell--col1--desktop {
        flex: 0 0 8.3333333333%;
        max-width: 8.3333333333%
    }
    .grid-cell--col2--desktop {
        flex: 0 0 16.6666666667%;
        max-width: 16.6666666667%
    }
    .grid-cell--col3--desktop {
        flex: 0 0 25%;
        max-width: 25%
    }
    .grid-cell--col4--desktop {
        flex: 0 0 33.3333333333%;
        max-width: 33.3333333333%
    }
    .grid-cell--col5--desktop {
        flex: 0 0 41.6666666667%;
        max-width: 41.6666666667%
    }
    .grid-cell--col6--desktop {
        flex: 0 0 50%;
        max-width: 50%
    }
    .grid-cell--col7--desktop {
        flex: 0 0 58.3333333333%;
        max-width: 58.3333333333%
    }
    .grid-cell--col8--desktop {
        flex: 0 0 66.6666666667%;
        max-width: 66.6666666667%
    }
    .grid-cell--col9--desktop {
        flex: 0 0 75%;
        max-width: 75%
    }
    .grid-cell--col10--desktop {
        flex: 0 0 83.3333333333%;
        max-width: 83.3333333333%
    }
    .grid-cell--col11--desktop {
        flex: 0 0 91.6666666667%;
        max-width: 91.6666666667%
    }
    .grid-cell--col12--desktop {
        flex: 0 0 100%;
        max-width: 100%
    }
    .grid-cell--col0--desktop {
        padding: 0
    }
}

@media (min-width:1632px) {
    .grid-cell--col0--desktop-l {
        flex: 0 0 0%;
        max-width: 0%
    }
    .grid-cell--col1--desktop-l {
        flex: 0 0 8.3333333333%;
        max-width: 8.3333333333%
    }
    .grid-cell--col2--desktop-l {
        flex: 0 0 16.6666666667%;
        max-width: 16.6666666667%
    }
    .grid-cell--col3--desktop-l {
        flex: 0 0 25%;
        max-width: 25%
    }
    .grid-cell--col4--desktop-l {
        flex: 0 0 33.3333333333%;
        max-width: 33.3333333333%
    }
    .grid-cell--col5--desktop-l {
        flex: 0 0 41.6666666667%;
        max-width: 41.6666666667%
    }
    .grid-cell--col6--desktop-l {
        flex: 0 0 50%;
        max-width: 50%
    }
    .grid-cell--col7--desktop-l {
        flex: 0 0 58.3333333333%;
        max-width: 58.3333333333%
    }
    .grid-cell--col8--desktop-l {
        flex: 0 0 66.6666666667%;
        max-width: 66.6666666667%
    }
    .grid-cell--col9--desktop-l {
        flex: 0 0 75%;
        max-width: 75%
    }
    .grid-cell--col10--desktop-l {
        flex: 0 0 83.3333333333%;
        max-width: 83.3333333333%
    }
    .grid-cell--col11--desktop-l {
        flex: 0 0 91.6666666667%;
        max-width: 91.6666666667%
    }
    .grid-cell--col12--desktop-l {
        flex: 0 0 100%;
        max-width: 100%
    }
    .grid-cell--col0--desktop-l {
        padding: 0
    }
}

.section {
    overflow: hidden
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

.button:hover {
    text-decoration: none
}

.button:hover span:before {
    transform: translateX(0)
}

.button>span {
    position: relative
}

.button.is-cartoRed {
    background-color: #eb1510;
    color: #fff
}

.button.is-cartoRed.is-outline {
    background-color: transparent;
    color: #eb1510;
    border: 2px solid #eb1510
}

.button.is-white.is-outline {
    background-color: transparent;
    color: #fff;
    border: 2px solid #fff
}

.button.is-navyBlue {
    background-color: #162945;
    color: #fff
}

.button.is-navyBlue.is-outline {
    background-color: transparent;
    color: #162945;
    border: 2px solid #162945
}

.button.is-jade {
    background-color: #11a2b8;
    color: #fff
}

.button.is-jade.is-outline {
    background-color: transparent;
    color: #11a2b8;
    border: 2px solid #11a2b8
}

.button.is-builderBlue {
    background-color: #1785fb;
    color: #fff
}

.button.is-builderBlue.is-outline {
    background-color: transparent;
    color: #1785fb;
    border: 2px solid #1785fb
}

.button.is-emerald {
    background-color: #2aac02;
    color: #fff
}

.button.is-emerald.is-outline {
    background-color: transparent;
    color: #2aac02;
    border: 2px solid #2aac02
}

.button.is-opal {
    background-color: #fd5a00;
    color: #fff
}

.button.is-opal.is-outline {
    background-color: transparent;
    color: #fd5a00;
    border: 2px solid #fd5a00
}

.button--arrow span:after {
    content: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAyMCAxMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPHBhdGggZD0iTS0yLTdoMjR2MjRILTJ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjRkZGIiBkPSJNMTQuNzA3LjI5M2wtMS40MTQgMS40MTRMMTUuNTg2IDRIMHYyaDE1LjU4NmwtMi4yOTMgMi4yOTMgMS40MTQgMS40MTRMMTkuNDE0IDV6Ii8+CiAgPC9nPgo8L3N2Zz4=);
    margin-left: 12px
}

.underlined-link {
    position: relative;
    display: inline-block;
    overflow: hidden
}

.underlined-link:before {
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

.underlined-link.reversed:before {
    left: unset;
    right: -1px;
    transform: translateX(100%)
}

.underlined-link:hover:before {
    transform: translateX(0)
}

.underlined-link:hover {
    text-decoration: none
}

.underlined-link.f12:before {
    height: 1px
}

.button--small {
    font: 600 12px/16px Montserrat, "Helvetica Neue", Helvetica, Arial, sans-serif;
    padding: 8px 16px;
    border-radius: 4px
}

.button--small.is-outline {
    padding: 6px 14px
}

.button--small span:before {
    height: 1px
}

.footer-element {
    padding-bottom: 24px
}

.footer-line {
    border-color: rgba(22, 41, 69, .24);
    border-top: 0
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

.Dropdown-inner.Dropdown-inner--userMenu:before {
    left: unset;
    right: 12px
}

.Dropdown-inner.Dropdown-inner--userMenu:after {
    left: unset;
    right: 14px
}

.Dropdown-inner.Dropdown-inner--secondary {
    right: 50%;
    width: 240px;
    padding-top: 16px;
    transform: translateX(50%)
}

.Dropdown-inner.Dropdown-inner--secondary::after {
    transform: translateX(50%)
}

.Dropdown-inner.Dropdown-inner--secondary::before {
    margin-left: 0;
    transform: translateX(-50%)
}

.Dropdown-inner.Dropdown-inner--left {
    right: unset;
    left: 0;
    transform: unset
}

.Dropdown-inner.Dropdown-inner--left::after {
    left: 0;
    margin-left: 4px
}

.Dropdown-inner.Dropdown-inner--left::before {
    left: 0;
    transform: translateX(50%);
    margin-left: 0
}

.Dropdown--loggedUser {
    padding: 16px
}

.Dropdown--loggedUser.Dropdown--userLinks {
    background-color: #f9f9f9;
    border-radius: 0 0 4px 4px
}

.Dropdown-item {
    line-height: 20px;
    font-size: 13px;
    margin-bottom: 8px
}

.Dropdown-item:last-child {
    margin-bottom: 0
}

.Dropdown-item.is-active .Dropdown-link {
    color: #2e3c43;
    border-radius: 3px
}

.Dropdown-itemExtra {
    border-top: 1px solid rgba(186, 190, 192, .24);
    padding-top: 8px
}

.Dropdown-link {
    display: inline-block;
    color: #2e3c43;
    transition: color .2s ease
}

.Dropdown-link.is-active {
    color: rgba(46, 60, 67, .6)
}

.Dropdown-link.is-active:hover {
    color: rgba(46, 60, 67, .6)
}

.Dropdown-link svg {
    flex-shrink: 0
}

.Dropdown-link:hover {
    text-decoration: none
}

.Dropdown-link:hover .Dropdown-link--solutions,
.Dropdown-link:hover.Dropdown-link--solutions {
    color: #eb1510
}

.Dropdown-link:hover .Dropdown-link-platform,
.Dropdown-link:hover.Dropdown-link-platform {
    color: #eb1510
}

.Dropdown-link:hover .Dropdown-link--industries,
.Dropdown-link:hover.Dropdown-link--industries {
    color: #ff583e
}

.Dropdown-link:hover .Dropdown-link--resources,
.Dropdown-link:hover.Dropdown-link--resources {
    color: #5300cc
}

.Dropdown-link:hover .Dropdown-link--developers,
.Dropdown-link:hover.Dropdown-link--developers {
    color: #7d21f5
}

.Dropdown-link:hover .Dropdown-link--help,
.Dropdown-link:hover.Dropdown-link--help {
    color: #6e00dc
}

.Dropdown-link:hover .Dropdown-link--blog,
.Dropdown-link:hover.Dropdown-link--blog {
    color: #2aac02
}

.Dropdown--2columns {
    width: 392px;
    right: -198px;
    padding: 16px
}

.Dropdown--new {
    display: none;
    width: 400px;
    opacity: 0;
    pointer-events: none
}

.Dropdown--new.Dropdown--center {
    right: 50%;
    transform: translateX(50%)
}

.Dropdown--new.Dropdown--platform {
    width: 360px
}

.Dropdown--new.Dropdown--industries {
    width: 734px;
    transform: translateX(75%)
}

.Dropdown--new.Dropdown--industries:before {
    left: 25%
}

.Dropdown--new.Dropdown--industries:after {
    left: 25%
}

.Dropdown--new.Dropdown--resources {
    width: 604px
}

.Dropdown--new .tree {
    padding: 0;
    list-style: none;
    color: #ddd;
    position: relative
}

.Dropdown--new .tree:before {
    content: "";
    display: block;
    width: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    border-left: 1px solid
}

.Dropdown--new .tree li {
    padding: 0 30px;
    line-height: 2em;
    font-weight: 700;
    position: relative
}

.Dropdown--new .tree li:before {
    content: "";
    display: block;
    width: 26px;
    height: 0;
    border-top: 1px solid;
    margin-top: -1px;
    position: absolute;
    top: 1em;
    left: 0
}

.Dropdown--new .tree li:last-child:before {
    background: #fff;
    height: auto;
    top: 1em;
    bottom: 0
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

.Dropdown-innerHighlight {
    margin: 0 -24px -24px;
    padding: 24px;
    border-radius: 0 0 4px 4px
}

.Dropdown-divisor {
    position: relative;
    color: #babec0;
    margin-bottom: 12px
}

.Dropdown-divisor span {
    background-color: #fff;
    padding-right: 6px
}

.Dropdown-divisor:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 6px;
    border-top: 1px solid rgba(186, 190, 192, .24);
    z-index: -1
}

.subnavbar .Dropdown-innerHighlight {
    padding: 16px 24px
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
    display: flex
}

.Navbar-header .collapsable-search-form {
    display: flex;
    justify-content: flex-end;
    position: relative;
    align-items: center
}

.Navbar-header .collapsable-search-form .collapsable-search-icon {
    display: flex;
    position: absolute;
    margin: 0;
    right: 8px;
    pointer-events: none
}

.Navbar-header .collapsable-search-box {
    width: 0;
    height: 32px;
    background-color: transparent;
    color: #2e3c43;
    transition: all .5s;
    border: 1px solid transparent;
    cursor: pointer;
    font-size: 14px
}

.Navbar-header .collapsable-search-box:focus {
    background-color: #fff;
    width: calc(100vw - 70px);
    border: 1px solid #ddd;
    cursor: unset
}

.Navbar-header .collapsable-search-box:focus+.collapsable-search-icon {
    color: transparent
}

.Navbar-header .collapsable-search-box:focus:hover {
    border: 1px solid #ddd
}

.Navbar-header .collapsable-search-box:hover {
    border: 0
}

.Navbar-collapse {
    display: flex;
    width: 100%;
    justify-content: space-between;
    position: relative
}

.Navbar-collapseStatic {
    justify-content: flex-end
}

.Navbar-list {
    display: flex;
    align-items: center;
    list-style: none
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

.Navbar-item:last-of-type {
    margin-right: 0
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

@media (max-width:800px) {
    .NavbarMobile.is-active {
        display: flex;
        flex-direction: column;
        justify-content: center;
        animation: fade-and-scale-in .2s ease-out
    }
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
        margin-right: -12px
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
    margin-right: 40px
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

.Navbar--userAvatar img {
    min-width: 100%;
    min-height: 100%;
    object-fit: cover
}

.Navbar-height--44 {
    height: 44px;
    margin-left: 8%;
}

.Navbar--show-animation {
    position: absolute;
    right: 0;
    top: 0;
    opacity: 1;
    pointer-events: all;
    transition: opacity .3s
}

.User-element--hide {
    opacity: 0;
    pointer-events: none
}

.Navbar-container {
    min-height: 76px
}

.Navbar--secondary {
    border-top: 1px solid rgba(255, 255, 255, .24);
    padding-top: 12px;
    padding-bottom: 12px;
    z-index: 0
}

.Navbar--secondary .search-form {
    margin-left: 12px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: end;
    justify-content: flex-end;
    position: relative
}

.Navbar--secondary .search-box {
    width: 220px;
    padding: 8px 27px 8px 12px
}

.Navbar--secondary .search-icon {
    position: absolute;
    margin: 0;
    right: 8px;
    top: 10px;
    pointer-events: none
}

.Navbar--secondary .is-subnavbar {
    font-size: 14px
}

.Navbar--secondary .Navbar-item {
    padding-top: 0;
    padding-bottom: 4px;
    height: 100%;
    display: flex;
    align-items: center
}

.pride-logo {
    max-width: 122px
}

@media (max-width:1224px) {
    .pride-logo {
        max-width: 92px
    }
}

.Navbar--fixed .pride-logo {
    max-width: 81px;
    max-height: 32px;
    margin-top: auto;
    margin-bottom: auto
}

.u-mt0 {
    margin-top: 0
}

.u-mr0 {
    margin-right: 0
}

.u-mb0 {
    margin-bottom: 0
}

.u-ml0 {
    margin-left: 0
}

.u-mt4 {
    margin-top: 4px
}

.u-mr4 {
    margin-right: 4px
}

.u-mb4 {
    margin-bottom: 4px
}

.u-ml4 {
    margin-left: 4px
}

.u-mt6 {
    margin-top: 6px
}

.u-mr6 {
    margin-right: 6px
}

.u-mb6 {
    margin-bottom: 6px
}

.u-ml6 {
    margin-left: 6px
}

.u-mt8 {
    margin-top: 8px
}

.u-mr8 {
    margin-right: 8px
}

.u-mb8 {
    margin-bottom: 8px
}

.u-ml8 {
    margin-left: 8px
}

.u-mt10 {
    margin-top: 10px
}

.u-mr10 {
    margin-right: 10px
}

.u-mb10 {
    margin-bottom: 10px
}

.u-ml10 {
    margin-left: 10px
}

.u-mt12 {
    margin-top: 12px
}

.u-mr12 {
    margin-right: 12px
}

.u-mb12 {
    margin-bottom: 12px
}

.u-ml12 {
    margin-left: 12px
}

.u-mt16 {
    margin-top: 16px
}

.u-mr16 {
    margin-right: 16px
}

.u-mb16 {
    margin-bottom: 16px
}

.u-ml16 {
    margin-left: 16px
}

.u-mt20 {
    margin-top: 20px
}

.u-mr20 {
    margin-right: 20px
}

.u-mb20 {
    margin-bottom: 20px
}

.u-ml20 {
    margin-left: 20px
}

.u-mt24 {
    margin-top: 24px
}

.u-mr24 {
    margin-right: 24px
}

.u-mb24 {
    margin-bottom: 24px
}

.u-ml24 {
    margin-left: 24px
}

.u-mt28 {
    margin-top: 28px
}

.u-mr28 {
    margin-right: 28px
}

.u-mb28 {
    margin-bottom: 28px
}

.u-ml28 {
    margin-left: 28px
}

.u-mt32 {
    margin-top: 32px
}

.u-mr32 {
    margin-right: 32px
}

.u-mb32 {
    margin-bottom: 32px
}

.u-ml32 {
    margin-left: 32px
}

.u-mt36 {
    margin-top: 36px
}

.u-mr36 {
    margin-right: 36px
}

.u-mb36 {
    margin-bottom: 36px
}

.u-ml36 {
    margin-left: 36px
}

.u-mt40 {
    margin-top: 40px
}

.u-mr40 {
    margin-right: 40px
}

.u-mb40 {
    margin-bottom: 40px
}

.u-ml40 {
    margin-left: 40px
}

.u-mt48 {
    margin-top: 48px
}

.u-mr48 {
    margin-right: 48px
}

.u-mb48 {
    margin-bottom: 48px
}

.u-ml48 {
    margin-left: 48px
}

.u-mt56 {
    margin-top: 56px
}

.u-mr56 {
    margin-right: 56px
}

.u-mb56 {
    margin-bottom: 56px
}

.u-ml56 {
    margin-left: 56px
}

.u-mt64 {
    margin-top: 64px
}

.u-mr64 {
    margin-right: 64px
}

.u-mb64 {
    margin-bottom: 64px
}

.u-ml64 {
    margin-left: 64px
}

.u-mt72 {
    margin-top: 72px
}

.u-mr72 {
    margin-right: 72px
}

.u-mb72 {
    margin-bottom: 72px
}

.u-ml72 {
    margin-left: 72px
}

.u-mt80 {
    margin-top: 80px
}

.u-mr80 {
    margin-right: 80px
}

.u-mb80 {
    margin-bottom: 80px
}

.u-ml80 {
    margin-left: 80px
}

.u-mt96 {
    margin-top: 96px
}

.u-mr96 {
    margin-right: 96px
}

.u-mb96 {
    margin-bottom: 96px
}

.u-ml96 {
    margin-left: 96px
}

.u-mt120 {
    margin-top: 120px
}

.u-mr120 {
    margin-right: 120px
}

.u-mb120 {
    margin-bottom: 120px
}

.u-ml120 {
    margin-left: 120px
}

.u-mt128 {
    margin-top: 128px
}

.u-mr128 {
    margin-right: 128px
}

.u-mb128 {
    margin-bottom: 128px
}

.u-ml128 {
    margin-left: 128px
}

.u-mt148 {
    margin-top: 148px
}

.u-mr148 {
    margin-right: 148px
}

.u-mb148 {
    margin-bottom: 148px
}

.u-ml148 {
    margin-left: 148px
}

.u-mtauto {
    margin-top: auto
}

.u-mrauto {
    margin-right: auto
}

.u-mbauto {
    margin-bottom: auto
}

.u-mlauto {
    margin-left: auto
}

@media (max-width:600px) {
    .u-mt0--mobile {
        margin-top: 0
    }
    .u-mr0--mobile {
        margin-right: 0
    }
    .u-mb0--mobile {
        margin-bottom: 0
    }
    .u-ml0--mobile {
        margin-left: 0
    }
    .u-mt4--mobile {
        margin-top: 4px
    }
    .u-mr4--mobile {
        margin-right: 4px
    }
    .u-mb4--mobile {
        margin-bottom: 4px
    }
    .u-ml4--mobile {
        margin-left: 4px
    }
    .u-mt6--mobile {
        margin-top: 6px
    }
    .u-mr6--mobile {
        margin-right: 6px
    }
    .u-mb6--mobile {
        margin-bottom: 6px
    }
    .u-ml6--mobile {
        margin-left: 6px
    }
    .u-mt8--mobile {
        margin-top: 8px
    }
    .u-mr8--mobile {
        margin-right: 8px
    }
    .u-mb8--mobile {
        margin-bottom: 8px
    }
    .u-ml8--mobile {
        margin-left: 8px
    }
    .u-mt10--mobile {
        margin-top: 10px
    }
    .u-mr10--mobile {
        margin-right: 10px
    }
    .u-mb10--mobile {
        margin-bottom: 10px
    }
    .u-ml10--mobile {
        margin-left: 10px
    }
    .u-mt12--mobile {
        margin-top: 12px
    }
    .u-mr12--mobile {
        margin-right: 12px
    }
    .u-mb12--mobile {
        margin-bottom: 12px
    }
    .u-ml12--mobile {
        margin-left: 12px
    }
    .u-mt16--mobile {
        margin-top: 16px
    }
    .u-mr16--mobile {
        margin-right: 16px
    }
    .u-mb16--mobile {
        margin-bottom: 16px
    }
    .u-ml16--mobile {
        margin-left: 16px
    }
    .u-mt20--mobile {
        margin-top: 20px
    }
    .u-mr20--mobile {
        margin-right: 20px
    }
    .u-mb20--mobile {
        margin-bottom: 20px
    }
    .u-ml20--mobile {
        margin-left: 20px
    }
    .u-mt24--mobile {
        margin-top: 24px
    }
    .u-mr24--mobile {
        margin-right: 24px
    }
    .u-mb24--mobile {
        margin-bottom: 24px
    }
    .u-ml24--mobile {
        margin-left: 24px
    }
    .u-mt28--mobile {
        margin-top: 28px
    }
    .u-mr28--mobile {
        margin-right: 28px
    }
    .u-mb28--mobile {
        margin-bottom: 28px
    }
    .u-ml28--mobile {
        margin-left: 28px
    }
    .u-mt32--mobile {
        margin-top: 32px
    }
    .u-mr32--mobile {
        margin-right: 32px
    }
    .u-mb32--mobile {
        margin-bottom: 32px
    }
    .u-ml32--mobile {
        margin-left: 32px
    }
    .u-mt36--mobile {
        margin-top: 36px
    }
    .u-mr36--mobile {
        margin-right: 36px
    }
    .u-mb36--mobile {
        margin-bottom: 36px
    }
    .u-ml36--mobile {
        margin-left: 36px
    }
    .u-mt40--mobile {
        margin-top: 40px
    }
    .u-mr40--mobile {
        margin-right: 40px
    }
    .u-mb40--mobile {
        margin-bottom: 40px
    }
    .u-ml40--mobile {
        margin-left: 40px
    }
    .u-mt48--mobile {
        margin-top: 48px
    }
    .u-mr48--mobile {
        margin-right: 48px
    }
    .u-mb48--mobile {
        margin-bottom: 48px
    }
    .u-ml48--mobile {
        margin-left: 48px
    }
    .u-mt56--mobile {
        margin-top: 56px
    }
    .u-mr56--mobile {
        margin-right: 56px
    }
    .u-mb56--mobile {
        margin-bottom: 56px
    }
    .u-ml56--mobile {
        margin-left: 56px
    }
    .u-mt64--mobile {
        margin-top: 64px
    }
    .u-mr64--mobile {
        margin-right: 64px
    }
    .u-mb64--mobile {
        margin-bottom: 64px
    }
    .u-ml64--mobile {
        margin-left: 64px
    }
    .u-mt72--mobile {
        margin-top: 72px
    }
    .u-mr72--mobile {
        margin-right: 72px
    }
    .u-mb72--mobile {
        margin-bottom: 72px
    }
    .u-ml72--mobile {
        margin-left: 72px
    }
    .u-mt80--mobile {
        margin-top: 80px
    }
    .u-mr80--mobile {
        margin-right: 80px
    }
    .u-mb80--mobile {
        margin-bottom: 80px
    }
    .u-ml80--mobile {
        margin-left: 80px
    }
    .u-mt96--mobile {
        margin-top: 96px
    }
    .u-mr96--mobile {
        margin-right: 96px
    }
    .u-mb96--mobile {
        margin-bottom: 96px
    }
    .u-ml96--mobile {
        margin-left: 96px
    }
    .u-mt120--mobile {
        margin-top: 120px
    }
    .u-mr120--mobile {
        margin-right: 120px
    }
    .u-mb120--mobile {
        margin-bottom: 120px
    }
    .u-ml120--mobile {
        margin-left: 120px
    }
    .u-mt128--mobile {
        margin-top: 128px
    }
    .u-mr128--mobile {
        margin-right: 128px
    }
    .u-mb128--mobile {
        margin-bottom: 128px
    }
    .u-ml128--mobile {
        margin-left: 128px
    }
    .u-mt148--mobile {
        margin-top: 148px
    }
    .u-mr148--mobile {
        margin-right: 148px
    }
    .u-mb148--mobile {
        margin-bottom: 148px
    }
    .u-ml148--mobile {
        margin-left: 148px
    }
    .u-mtauto--mobile {
        margin-top: auto
    }
    .u-mrauto--mobile {
        margin-right: auto
    }
    .u-mbauto--mobile {
        margin-bottom: auto
    }
    .u-mlauto--mobile {
        margin-left: auto
    }
}

@media (max-width:800px) {
    .u-mt0--tablet {
        margin-top: 0
    }
    .u-mr0--tablet {
        margin-right: 0
    }
    .u-mb0--tablet {
        margin-bottom: 0
    }
    .u-ml0--tablet {
        margin-left: 0
    }
    .u-mt4--tablet {
        margin-top: 4px
    }
    .u-mr4--tablet {
        margin-right: 4px
    }
    .u-mb4--tablet {
        margin-bottom: 4px
    }
    .u-ml4--tablet {
        margin-left: 4px
    }
    .u-mt6--tablet {
        margin-top: 6px
    }
    .u-mr6--tablet {
        margin-right: 6px
    }
    .u-mb6--tablet {
        margin-bottom: 6px
    }
    .u-ml6--tablet {
        margin-left: 6px
    }
    .u-mt8--tablet {
        margin-top: 8px
    }
    .u-mr8--tablet {
        margin-right: 8px
    }
    .u-mb8--tablet {
        margin-bottom: 8px
    }
    .u-ml8--tablet {
        margin-left: 8px
    }
    .u-mt10--tablet {
        margin-top: 10px
    }
    .u-mr10--tablet {
        margin-right: 10px
    }
    .u-mb10--tablet {
        margin-bottom: 10px
    }
    .u-ml10--tablet {
        margin-left: 10px
    }
    .u-mt12--tablet {
        margin-top: 12px
    }
    .u-mr12--tablet {
        margin-right: 12px
    }
    .u-mb12--tablet {
        margin-bottom: 12px
    }
    .u-ml12--tablet {
        margin-left: 12px
    }
    .u-mt16--tablet {
        margin-top: 16px
    }
    .u-mr16--tablet {
        margin-right: 16px
    }
    .u-mb16--tablet {
        margin-bottom: 16px
    }
    .u-ml16--tablet {
        margin-left: 16px
    }
    .u-mt20--tablet {
        margin-top: 20px
    }
    .u-mr20--tablet {
        margin-right: 20px
    }
    .u-mb20--tablet {
        margin-bottom: 20px
    }
    .u-ml20--tablet {
        margin-left: 20px
    }
    .u-mt24--tablet {
        margin-top: 24px
    }
    .u-mr24--tablet {
        margin-right: 24px
    }
    .u-mb24--tablet {
        margin-bottom: 24px
    }
    .u-ml24--tablet {
        margin-left: 24px
    }
    .u-mt28--tablet {
        margin-top: 28px
    }
    .u-mr28--tablet {
        margin-right: 28px
    }
    .u-mb28--tablet {
        margin-bottom: 28px
    }
    .u-ml28--tablet {
        margin-left: 28px
    }
    .u-mt32--tablet {
        margin-top: 32px
    }
    .u-mr32--tablet {
        margin-right: 32px
    }
    .u-mb32--tablet {
        margin-bottom: 32px
    }
    .u-ml32--tablet {
        margin-left: 32px
    }
    .u-mt36--tablet {
        margin-top: 36px
    }
    .u-mr36--tablet {
        margin-right: 36px
    }
    .u-mb36--tablet {
        margin-bottom: 36px
    }
    .u-ml36--tablet {
        margin-left: 36px
    }
    .u-mt40--tablet {
        margin-top: 40px
    }
    .u-mr40--tablet {
        margin-right: 40px
    }
    .u-mb40--tablet {
        margin-bottom: 40px
    }
    .u-ml40--tablet {
        margin-left: 40px
    }
    .u-mt48--tablet {
        margin-top: 48px
    }
    .u-mr48--tablet {
        margin-right: 48px
    }
    .u-mb48--tablet {
        margin-bottom: 48px
    }
    .u-ml48--tablet {
        margin-left: 48px
    }
    .u-mt56--tablet {
        margin-top: 56px
    }
    .u-mr56--tablet {
        margin-right: 56px
    }
    .u-mb56--tablet {
        margin-bottom: 56px
    }
    .u-ml56--tablet {
        margin-left: 56px
    }
    .u-mt64--tablet {
        margin-top: 64px
    }
    .u-mr64--tablet {
        margin-right: 64px
    }
    .u-mb64--tablet {
        margin-bottom: 64px
    }
    .u-ml64--tablet {
        margin-left: 64px
    }
    .u-mt72--tablet {
        margin-top: 72px
    }
    .u-mr72--tablet {
        margin-right: 72px
    }
    .u-mb72--tablet {
        margin-bottom: 72px
    }
    .u-ml72--tablet {
        margin-left: 72px
    }
    .u-mt80--tablet {
        margin-top: 80px
    }
    .u-mr80--tablet {
        margin-right: 80px
    }
    .u-mb80--tablet {
        margin-bottom: 80px
    }
    .u-ml80--tablet {
        margin-left: 80px
    }
    .u-mt96--tablet {
        margin-top: 96px
    }
    .u-mr96--tablet {
        margin-right: 96px
    }
    .u-mb96--tablet {
        margin-bottom: 96px
    }
    .u-ml96--tablet {
        margin-left: 96px
    }
    .u-mt120--tablet {
        margin-top: 120px
    }
    .u-mr120--tablet {
        margin-right: 120px
    }
    .u-mb120--tablet {
        margin-bottom: 120px
    }
    .u-ml120--tablet {
        margin-left: 120px
    }
    .u-mt128--tablet {
        margin-top: 128px
    }
    .u-mr128--tablet {
        margin-right: 128px
    }
    .u-mb128--tablet {
        margin-bottom: 128px
    }
    .u-ml128--tablet {
        margin-left: 128px
    }
    .u-mt148--tablet {
        margin-top: 148px
    }
    .u-mr148--tablet {
        margin-right: 148px
    }
    .u-mb148--tablet {
        margin-bottom: 148px
    }
    .u-ml148--tablet {
        margin-left: 148px
    }
    .u-mtauto--tablet {
        margin-top: auto
    }
    .u-mrauto--tablet {
        margin-right: auto
    }
    .u-mbauto--tablet {
        margin-bottom: auto
    }
    .u-mlauto--tablet {
        margin-left: auto
    }
}

@media (max-width:1224px) {
    .u-mt0--desktop-s {
        margin-top: 0
    }
    .u-mr0--desktop-s {
        margin-right: 0
    }
    .u-mb0--desktop-s {
        margin-bottom: 0
    }
    .u-ml0--desktop-s {
        margin-left: 0
    }
    .u-mt4--desktop-s {
        margin-top: 4px
    }
    .u-mr4--desktop-s {
        margin-right: 4px
    }
    .u-mb4--desktop-s {
        margin-bottom: 4px
    }
    .u-ml4--desktop-s {
        margin-left: 4px
    }
    .u-mt6--desktop-s {
        margin-top: 6px
    }
    .u-mr6--desktop-s {
        margin-right: 6px
    }
    .u-mb6--desktop-s {
        margin-bottom: 6px
    }
    .u-ml6--desktop-s {
        margin-left: 6px
    }
    .u-mt8--desktop-s {
        margin-top: 8px
    }
    .u-mr8--desktop-s {
        margin-right: 8px
    }
    .u-mb8--desktop-s {
        margin-bottom: 8px
    }
    .u-ml8--desktop-s {
        margin-left: 8px
    }
    .u-mt10--desktop-s {
        margin-top: 10px
    }
    .u-mr10--desktop-s {
        margin-right: 10px
    }
    .u-mb10--desktop-s {
        margin-bottom: 10px
    }
    .u-ml10--desktop-s {
        margin-left: 10px
    }
    .u-mt12--desktop-s {
        margin-top: 12px
    }
    .u-mr12--desktop-s {
        margin-right: 12px
    }
    .u-mb12--desktop-s {
        margin-bottom: 12px
    }
    .u-ml12--desktop-s {
        margin-left: 12px
    }
    .u-mt16--desktop-s {
        margin-top: 16px
    }
    .u-mr16--desktop-s {
        margin-right: 16px
    }
    .u-mb16--desktop-s {
        margin-bottom: 16px
    }
    .u-ml16--desktop-s {
        margin-left: 16px
    }
    .u-mt20--desktop-s {
        margin-top: 20px
    }
    .u-mr20--desktop-s {
        margin-right: 20px
    }
    .u-mb20--desktop-s {
        margin-bottom: 20px
    }
    .u-ml20--desktop-s {
        margin-left: 20px
    }
    .u-mt24--desktop-s {
        margin-top: 24px
    }
    .u-mr24--desktop-s {
        margin-right: 24px
    }
    .u-mb24--desktop-s {
        margin-bottom: 24px
    }
    .u-ml24--desktop-s {
        margin-left: 24px
    }
    .u-mt28--desktop-s {
        margin-top: 28px
    }
    .u-mr28--desktop-s {
        margin-right: 28px
    }
    .u-mb28--desktop-s {
        margin-bottom: 28px
    }
    .u-ml28--desktop-s {
        margin-left: 28px
    }
    .u-mt32--desktop-s {
        margin-top: 32px
    }
    .u-mr32--desktop-s {
        margin-right: 32px
    }
    .u-mb32--desktop-s {
        margin-bottom: 32px
    }
    .u-ml32--desktop-s {
        margin-left: 32px
    }
    .u-mt36--desktop-s {
        margin-top: 36px
    }
    .u-mr36--desktop-s {
        margin-right: 36px
    }
    .u-mb36--desktop-s {
        margin-bottom: 36px
    }
    .u-ml36--desktop-s {
        margin-left: 36px
    }
    .u-mt40--desktop-s {
        margin-top: 40px
    }
    .u-mr40--desktop-s {
        margin-right: 40px
    }
    .u-mb40--desktop-s {
        margin-bottom: 40px
    }
    .u-ml40--desktop-s {
        margin-left: 40px
    }
    .u-mt48--desktop-s {
        margin-top: 48px
    }
    .u-mr48--desktop-s {
        margin-right: 48px
    }
    .u-mb48--desktop-s {
        margin-bottom: 48px
    }
    .u-ml48--desktop-s {
        margin-left: 48px
    }
    .u-mt56--desktop-s {
        margin-top: 56px
    }
    .u-mr56--desktop-s {
        margin-right: 56px
    }
    .u-mb56--desktop-s {
        margin-bottom: 56px
    }
    .u-ml56--desktop-s {
        margin-left: 56px
    }
    .u-mt64--desktop-s {
        margin-top: 64px
    }
    .u-mr64--desktop-s {
        margin-right: 64px
    }
    .u-mb64--desktop-s {
        margin-bottom: 64px
    }
    .u-ml64--desktop-s {
        margin-left: 64px
    }
    .u-mt72--desktop-s {
        margin-top: 72px
    }
    .u-mr72--desktop-s {
        margin-right: 72px
    }
    .u-mb72--desktop-s {
        margin-bottom: 72px
    }
    .u-ml72--desktop-s {
        margin-left: 72px
    }
    .u-mt80--desktop-s {
        margin-top: 80px
    }
    .u-mr80--desktop-s {
        margin-right: 80px
    }
    .u-mb80--desktop-s {
        margin-bottom: 80px
    }
    .u-ml80--desktop-s {
        margin-left: 80px
    }
    .u-mt96--desktop-s {
        margin-top: 96px
    }
    .u-mr96--desktop-s {
        margin-right: 96px
    }
    .u-mb96--desktop-s {
        margin-bottom: 96px
    }
    .u-ml96--desktop-s {
        margin-left: 96px
    }
    .u-mt120--desktop-s {
        margin-top: 120px
    }
    .u-mr120--desktop-s {
        margin-right: 120px
    }
    .u-mb120--desktop-s {
        margin-bottom: 120px
    }
    .u-ml120--desktop-s {
        margin-left: 120px
    }
    .u-mt128--desktop-s {
        margin-top: 128px
    }
    .u-mr128--desktop-s {
        margin-right: 128px
    }
    .u-mb128--desktop-s {
        margin-bottom: 128px
    }
    .u-ml128--desktop-s {
        margin-left: 128px
    }
    .u-mt148--desktop-s {
        margin-top: 148px
    }
    .u-mr148--desktop-s {
        margin-right: 148px
    }
    .u-mb148--desktop-s {
        margin-bottom: 148px
    }
    .u-ml148--desktop-s {
        margin-left: 148px
    }
    .u-mtauto--desktop-s {
        margin-top: auto
    }
    .u-mrauto--desktop-s {
        margin-right: auto
    }
    .u-mbauto--desktop-s {
        margin-bottom: auto
    }
    .u-mlauto--desktop-s {
        margin-left: auto
    }
}

@media (min-width:1632px) {
    .u-mt0--desktop-l {
        margin-top: 0
    }
    .u-mr0--desktop-l {
        margin-right: 0
    }
    .u-mb0--desktop-l {
        margin-bottom: 0
    }
    .u-ml0--desktop-l {
        margin-left: 0
    }
    .u-mt4--desktop-l {
        margin-top: 4px
    }
    .u-mr4--desktop-l {
        margin-right: 4px
    }
    .u-mb4--desktop-l {
        margin-bottom: 4px
    }
    .u-ml4--desktop-l {
        margin-left: 4px
    }
    .u-mt6--desktop-l {
        margin-top: 6px
    }
    .u-mr6--desktop-l {
        margin-right: 6px
    }
    .u-mb6--desktop-l {
        margin-bottom: 6px
    }
    .u-ml6--desktop-l {
        margin-left: 6px
    }
    .u-mt8--desktop-l {
        margin-top: 8px
    }
    .u-mr8--desktop-l {
        margin-right: 8px
    }
    .u-mb8--desktop-l {
        margin-bottom: 8px
    }
    .u-ml8--desktop-l {
        margin-left: 8px
    }
    .u-mt10--desktop-l {
        margin-top: 10px
    }
    .u-mr10--desktop-l {
        margin-right: 10px
    }
    .u-mb10--desktop-l {
        margin-bottom: 10px
    }
    .u-ml10--desktop-l {
        margin-left: 10px
    }
    .u-mt12--desktop-l {
        margin-top: 12px
    }
    .u-mr12--desktop-l {
        margin-right: 12px
    }
    .u-mb12--desktop-l {
        margin-bottom: 12px
    }
    .u-ml12--desktop-l {
        margin-left: 12px
    }
    .u-mt16--desktop-l {
        margin-top: 16px
    }
    .u-mr16--desktop-l {
        margin-right: 16px
    }
    .u-mb16--desktop-l {
        margin-bottom: 16px
    }
    .u-ml16--desktop-l {
        margin-left: 16px
    }
    .u-mt20--desktop-l {
        margin-top: 20px
    }
    .u-mr20--desktop-l {
        margin-right: 20px
    }
    .u-mb20--desktop-l {
        margin-bottom: 20px
    }
    .u-ml20--desktop-l {
        margin-left: 20px
    }
    .u-mt24--desktop-l {
        margin-top: 24px
    }
    .u-mr24--desktop-l {
        margin-right: 24px
    }
    .u-mb24--desktop-l {
        margin-bottom: 24px
    }
    .u-ml24--desktop-l {
        margin-left: 24px
    }
    .u-mt28--desktop-l {
        margin-top: 28px
    }
    .u-mr28--desktop-l {
        margin-right: 28px
    }
    .u-mb28--desktop-l {
        margin-bottom: 28px
    }
    .u-ml28--desktop-l {
        margin-left: 28px
    }
    .u-mt32--desktop-l {
        margin-top: 32px
    }
    .u-mr32--desktop-l {
        margin-right: 32px
    }
    .u-mb32--desktop-l {
        margin-bottom: 32px
    }
    .u-ml32--desktop-l {
        margin-left: 32px
    }
    .u-mt36--desktop-l {
        margin-top: 36px
    }
    .u-mr36--desktop-l {
        margin-right: 36px
    }
    .u-mb36--desktop-l {
        margin-bottom: 36px
    }
    .u-ml36--desktop-l {
        margin-left: 36px
    }
    .u-mt40--desktop-l {
        margin-top: 40px
    }
    .u-mr40--desktop-l {
        margin-right: 40px
    }
    .u-mb40--desktop-l {
        margin-bottom: 40px
    }
    .u-ml40--desktop-l {
        margin-left: 40px
    }
    .u-mt48--desktop-l {
        margin-top: 48px
    }
    .u-mr48--desktop-l {
        margin-right: 48px
    }
    .u-mb48--desktop-l {
        margin-bottom: 48px
    }
    .u-ml48--desktop-l {
        margin-left: 48px
    }
    .u-mt56--desktop-l {
        margin-top: 56px
    }
    .u-mr56--desktop-l {
        margin-right: 56px
    }
    .u-mb56--desktop-l {
        margin-bottom: 56px
    }
    .u-ml56--desktop-l {
        margin-left: 56px
    }
    .u-mt64--desktop-l {
        margin-top: 64px
    }
    .u-mr64--desktop-l {
        margin-right: 64px
    }
    .u-mb64--desktop-l {
        margin-bottom: 64px
    }
    .u-ml64--desktop-l {
        margin-left: 64px
    }
    .u-mt72--desktop-l {
        margin-top: 72px
    }
    .u-mr72--desktop-l {
        margin-right: 72px
    }
    .u-mb72--desktop-l {
        margin-bottom: 72px
    }
    .u-ml72--desktop-l {
        margin-left: 72px
    }
    .u-mt80--desktop-l {
        margin-top: 80px
    }
    .u-mr80--desktop-l {
        margin-right: 80px
    }
    .u-mb80--desktop-l {
        margin-bottom: 80px
    }
    .u-ml80--desktop-l {
        margin-left: 80px
    }
    .u-mt96--desktop-l {
        margin-top: 96px
    }
    .u-mr96--desktop-l {
        margin-right: 96px
    }
    .u-mb96--desktop-l {
        margin-bottom: 96px
    }
    .u-ml96--desktop-l {
        margin-left: 96px
    }
    .u-mt120--desktop-l {
        margin-top: 120px
    }
    .u-mr120--desktop-l {
        margin-right: 120px
    }
    .u-mb120--desktop-l {
        margin-bottom: 120px
    }
    .u-ml120--desktop-l {
        margin-left: 120px
    }
    .u-mt128--desktop-l {
        margin-top: 128px
    }
    .u-mr128--desktop-l {
        margin-right: 128px
    }
    .u-mb128--desktop-l {
        margin-bottom: 128px
    }
    .u-ml128--desktop-l {
        margin-left: 128px
    }
    .u-mt148--desktop-l {
        margin-top: 148px
    }
    .u-mr148--desktop-l {
        margin-right: 148px
    }
    .u-mb148--desktop-l {
        margin-bottom: 148px
    }
    .u-ml148--desktop-l {
        margin-left: 148px
    }
    .u-mtauto--desktop-l {
        margin-top: auto
    }
    .u-mrauto--desktop-l {
        margin-right: auto
    }
    .u-mbauto--desktop-l {
        margin-bottom: auto
    }
    .u-mlauto--desktop-l {
        margin-left: auto
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

.desktop-s {
    display: block
}

@media (max-width:800px) {
    .desktop-s {
        display: none
    }
}

.desktop {
    display: block
}

@media (max-width:1224px) {
    .desktop {
        display: none
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

.desktop-s--flex {
    display: flex
}

@media (max-width:800px) {
    .desktop-s--flex {
        display: none
    }
}

.desktop--flex {
    display: flex
}

@media (max-width:1224px) {
    .desktop--flex {
        display: none
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

.desktop-s--inline {
    display: inline
}

@media (max-width:800px) {
    .desktop-s--inline {
        display: none
    }
}

.desktop--inline {
    display: inline
}

@media (max-width:1224px) {
    .desktop--inline {
        display: none
    }
}

.u-pr {
    position: relative
}

.u-pa {
    position: absolute
}

.u-flex-column {
    flex-direction: column
}

.u-align-center {
    align-items: center
}

.u-justify-center {
    justify-content: center
}

.u-justify-space {
    justify-content: space-between
}

.u-flex-wrap {
    flex-wrap: wrap
}

.u-tupper {
    text-transform: uppercase
}

.u-default {
    cursor: default
}

.u-pointer {
    cursor: pointer
}

.u-overflow {
    overflow: hidden
}

.u-icon48 {
    width: 48px;
    height: 48px
}

.u-underlined {
    text-decoration: underline
}
</style>