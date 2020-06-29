<template>
  <div>
    <div class="wrap_content mt-2">
      <div id="content" class="intro">
        <div class="grid u-mt72">
          <div class="grid-cell grid-cell--col1"></div>
          <div id="jsUp" class="grid-cell grid-cell--col6 grid-cell--col10--tablet">
            <div class="title f48 f64--desktop-l f36--tablet is-txtWhite u-mb40 u-pr"></div>
            <p class="text f20 is-txtWhite u-mb40 u-mb24--tablet">
              Smart food court system
              <br />make the university more smart.
            </p>
          </div>
          <div class="grid-cell--col5 grid-cell--col1--tablet"></div>
          <div class="grid-cell--col1"></div>
          <div class="grid-cell grid-cell--col10 u-mb120 u-mb48--tablet">
            <a href="#menu_main" class="button is-White u-mr24 u-mb24">
              <span>ĐẶT NGAY</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IntroSlide"
};
</script>

<style scoped>
body {
  font-family: "Open sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 20px;
  line-height: 32px;
  -webkit-font-smoothing: antialiased;
  -webkit-text-rendering: optimizeLegibility;
  text-rendering: optimizeLegibility;
}
p.text.f20.is-txtWhite.u-mb40.u-mb24--tablet {
  color: #f6b91e;
  font-size: 18px;
  font-weight: 800;
}
.intro {
  background-image: url("../assets/images/bklast1.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
  display: table;
  /* box-shadow: 0px 4px 38px 0px rgba(104, 104, 104, 0.14); */
  /* box-shadow: 0px 6px 8px 6px #dacece; */
  box-shadow: 0px 30px 38px 0px rgba(104, 104, 104, 0.14);
  background-size: cover;
}
@media (max-width: 1223px) and (min-width: 800px) {
  .button[data-v-58d16b56] {
    padding: 14px 20px;
  }
}
.grid-cell.grid-cell--col10.u-mb120.u-mb48--tablet {
  height: 130px;
}
@media (max-width: 800px) {
  .button[data-v-58d16b56] {
    padding: 14px 20px;
  }
  .u-mb24--tablet {
    margin-top: 19%;
    margin-bottom: 5%;
    margin-right: 30%;
  }
  #content {
    height: 50vh;
  }
}
.wrap_content {
  margin: auto;
  width: 80.4%;
}
@media (min-width: 1224px) {
  .container {
    max-width: 1224px;
  }
  #content {
    min-height: 600px;
  }
}

* {
  box-sizing: border-box;
}
a.button.u-mr24.u-mb24 {
  background-color: orangered;
}
button {
  border: 0;
  cursor: pointer;
  font-family: "Open sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  margin: 0;
  outline: 0;
}
.button {
  display: inline-block;
  border-radius: 8px;
  font: 600 16px/24px Montserrat, "Helvetica Neue", Helvetica, Arial, sans-serif;
  padding: 16px 24px;
  text-align: center;
  white-space: nowrap;
  position: relative;
  overflow: hidden;
}
.button.is-outline {
  padding: 14px 22px;
}

.button:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: transparent;
  transition: background-color 0.1s linear;
}
.button span {
  position: relative;
  display: block;
  overflow: hidden;
}

.button span:before {
  content: "";
  position: absolute;
  transition: transform 0.3s ease;
  left: -1px;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: currentColor;
  transform: translateX(-100%);
}
.button:hover {
  text-decoration: none;
}

.button:hover span:before {
  transform: translateX(0);
}

.button > span {
  position: relative;
}

.button.is-white.is-outline {
  background-color: transparent;
  color: #fff;
  border: 2px solid #fff;
}
.button.is-White {
  color: #fff;
}

.button--arrow span:after {
  content: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAyMCAxMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPHBhdGggZD0iTS0yLTdoMjR2MjRILTJ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjRkZGIiBkPSJNMTQuNzA3LjI5M2wtMS40MTQgMS40MTRMMTUuNTg2IDRIMHYyaDE1LjU4NmwtMi4yOTMgMi4yOTMgMS40MTQgMS40MTRMMTkuNDE0IDV6Ii8+CiAgPC9nPgo8L3N2Zz4=);
  margin-left: 12px;
}
.grid-cell {
  padding-right: 12px;
  padding-left: 12px;
}

.grid {
  display: flex;
  flex-wrap: wrap;
  flex: 1;
}
.grid.grid--column {
  flex-direction: column;
}
@media (max-width: 1224px) {
  .container {
    max-width: 960px;
  }
  .grid-cell {
    padding-right: 12px;
    padding-left: 12px;
  }
}
@media (max-width: 600px) {
  .grid-cell {
    padding-right: 4px;
    padding-left: 14px;
  }
}
@media (min-width: 1224px) {
  .container {
    max-width: 1224px;
  }
  .grid-cell {
    padding-right: 12px;
    padding-left: 12px;
  }
  /* header#header {
        min-height: 696.8px;
    } */
}
@media (min-width: 1632px) {
  .container {
    max-width: 1632px;
  }
  .grid-cell {
    padding-right: 16px;
    padding-left: 16px;
  }
}
.grid-cell--col1 {
  flex: 0 0 8.3333333333%;
  max-width: 5.3333333333%;
}

.grid-cell--col5 {
  flex: 0 0 41.6666666667%;
  max-width: 41.6666666667%;
}

.grid-cell--col6 {
  flex: 0 0 50%;
  max-width: 50%;
}

.grid-cell--col10 {
  flex: 0 0 83.3333333333%;
  max-width: 83.3333333333%;
}

.grid-cell--col12 {
  flex: 0 0 100%;
  max-width: 100%;
}

@media (max-width: 1224px) {
  .grid-cell--col1--desktop-s {
    flex: 0 0 8.3333333333%;
    max-width: 8.3333333333%;
  }
  .grid-cell--col5--desktop-s {
    flex: 0 0 41.6666666667%;
    max-width: 41.6666666667%;
  }
  .grid-cell--col10--desktop-s {
    flex: 0 0 83.3333333333%;
    max-width: 83.3333333333%;
  }
  .grid-cell--col12--desktop-s {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
@media (max-width: 800px) {
  .grid-cell--col1--tablet {
    flex: 0 0 8.3333333333%;
    max-width: 8.3333333333%;
  }
  .grid-cell--col5--tablet {
    flex: 0 0 41.6666666667%;
    max-width: 41.6666666667%;
  }
  .grid-cell--col6--tablet {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .grid-cell--col10--tablet {
    flex: 0 0 83.3333333333%;
    max-width: 83.3333333333%;
  }
  .grid-cell--col12--tablet {
    flex: 0 0 100%;
    max-width: 100%;
  }
}

@media (max-width: 600px) {
  .grid-cell--col1--mobile {
    flex: 0 0 8.3333333333%;
    max-width: 8.3333333333%;
  }
  .grid-cell--col5--mobile {
    flex: 0 0 41.6666666667%;
    max-width: 41.6666666667%;
  }
  .grid-cell--col6--mobile {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .grid-cell--col10--mobile {
    flex: 0 0 83.3333333333%;
    max-width: 83.3333333333%;
  }
  .grid-cell--col12--mobile {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .grid-cell--col0--mobile {
    padding: 0;
  }
}

@media (min-width: 1224px) {
  .grid-cell--col1--desktop {
    flex: 0 0 8.3333333333%;
    max-width: 8.3333333333%;
  }
  .grid-cell--col5--desktop {
    flex: 0 0 41.6666666667%;
    max-width: 41.6666666667%;
  }
  .grid-cell--col6--desktop {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .grid-cell--col10--desktop {
    flex: 0 0 83.3333333333%;
    max-width: 83.3333333333%;
  }
  .grid-cell--col12--desktop {
    flex: 0 0 100%;
    max-width: 100%;
  }
}

@media (min-width: 1632px) {
  .grid-cell--col1--desktop-l {
    flex: 0 0 8.3333333333%;
    max-width: 8.3333333333%;
  }
  .grid-cell--col5--desktop-l {
    flex: 0 0 41.6666666667%;
    max-width: 41.6666666667%;
  }
  .grid-cell--col6--desktop-l {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .grid-cell--col10--desktop-l {
    flex: 0 0 83.3333333333%;
    max-width: 83.3333333333%;
  }
  .grid-cell--col12--desktop-l {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
.u-mt72 {
  margin-top: 27%;
}
</style>