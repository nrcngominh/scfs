<template>
    <div>
          <!-- Site footer -->
      <footer class="site-footer container">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <h6>Description</h6>
              <p class="text-justify">
                The university is currently has one food court located in its Ly Thuong Kiet campus and is going to build another
                one in Di An campus.All food courts consist of a number of vendors at food stalls or service counters. Meals are
                ordered at one of the vendors and then carried to a common area for consumption.
                <br/>
                <a href="https://www.freepik.com/free-photos-vectors/food">Food psd created by freepik - www.freepik.com</a>
              </p>
            </div>
            <div class="col-xs-6 col-md-2"></div>
            <div class="col-xs-6 col-md-2">
              <h6>Platform</h6>
              <ul class="footer-links">
                <li><a>Nodejs</a></li>
                <li><a>Vuejs</a></li>
                <li><a>Express</a></li>
              </ul>
            </div>

            <div class="col-xs-6 col-md-2">
              <h6>About Us</h6>
              <ul class="footer-links">
                <li><a href="">Team</a></li>
                <li><a href="">Terms of Service</a></li>
                <li><a href="">Privacy Notice</a></li>
                <li><a href="">Sitemap</a></li>
              </ul>
            </div>
          </div>
          <hr>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-sm-6 col-xs-12">
              <p class="copyright-text">Copyright &copy; 2020 All Rights Reserved by 
          <a href="#">BKTeam</a>.
              </p>
            </div>

            <div class="col-md-4 col-sm-6 col-xs-12">
              <ul class="social-icons">
                <li><a class="facebook" href="https://www.facebook.com/mngoc99"><font-awesome-icon :icon="['fab', 'facebook-f']" /></a></li>
                <li><a class="twitter" href="#"><font-awesome-icon :icon="['fab', 'twitter']" /></a></li>
                <li><a class="github" href="#"><font-awesome-icon :icon="['fab', 'github']" /></a></li>
                <li><a class="linkedin" href="#"><font-awesome-icon :icon="['fab', 'linkedin']" /></a></li> 
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
</template>

<script>
export default{
    name: "Footer"
}
</script>

<style scoped>
@media (min-width: 1200px){}
.container{
    max-width: 1224px;
}
.site-footer
{
  background-color:#fff;
  padding:45px 0 20px;
  font-size:15px;
  line-height:24px;
  color:#737373;
  box-shadow: 0px 7px 8px 6px #888888;
}
.site-footer hr
{
  border-top-color:#bbb;
  opacity:0.5
}
.site-footer hr.small
{
  margin:20px 0
}
.site-footer h6
{
  color:black;
  font-size:16px;
  text-transform:uppercase;
  margin-top:5px;
  letter-spacing:2px
}
.site-footer a
{
  color:#737373;
}
.site-footer a:hover
{
  color:#3366cc;
  text-decoration:none;
}
.footer-links
{
  padding-left:0;
  list-style:none
}
.footer-links li
{
  display:block
}
.footer-links a
{
  color:#737373
}
.footer-links a:active,.footer-links a:focus,.footer-links a:hover
{
  color:#3366cc;
  text-decoration:none;
}
.footer-links.inline li
{
  display:inline-block
}
.site-footer .social-icons
{
  text-align:right
}
.site-footer .social-icons a
{
  width:40px;
  height:40px;
  line-height:40px;
  margin-left:6px;
  margin-right:0;
  border-radius:100%;
  background-color:#33353d
}
.copyright-text
{
  margin:0
}
@media (max-width:991px)
{
  .site-footer [class^=col-]
  {
    margin-bottom:30px
  }
}
@media (max-width:767px)
{
  .site-footer
  {
    padding-bottom:0
  }
  .site-footer .copyright-text,.site-footer .social-icons
  {
    text-align:center
  }
}
.social-icons
{
  padding-left:0;
  margin-bottom:0;
  list-style:none
}
.social-icons li
{
  display:inline-block;
  margin-bottom:4px
}
.social-icons li.title
{
  margin-right:15px;
  text-transform:uppercase;
  color:#96a2b2;
  font-weight:700;
  font-size:13px
}
.social-icons a{
  background-color:#eceeef;
  color:#818a91;
  font-size:16px;
  display:inline-block;
  line-height:44px;
  width:44px;
  height:44px;
  text-align:center;
  margin-right:8px;
  border-radius:100%;
  -webkit-transition:all .2s linear;
  -o-transition:all .2s linear;
  transition:all .2s linear
}
.social-icons a:active,.social-icons a:focus,.social-icons a:hover
{
  color:#fff;
  background-color:#29aafe
}
.social-icons.size-sm a
{
  line-height:34px;
  height:34px;
  width:34px;
  font-size:14px
}
.social-icons a.facebook:hover
{
  background-color:#3b5998
}
.social-icons a.twitter:hover
{
  background-color:#00aced
}
.social-icons a.linkedin:hover
{
  background-color:#007bb6
}
.social-icons a.github:hover
{
  background-color:#180A07;
}
@media (max-width:767px)
{
  .social-icons li.title
  {
    display:block;
    margin-right:0;
    font-weight:600
  }
}
</style>
