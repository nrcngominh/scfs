<template>
  <div class="footer-container">
    <div>
      <div class="footer-grid">
        <div class="footer-item product">
          <div>
            <h3>Address</h3>
            <p>268 Ly Thuong Kiet, District 10, Ho Chi Minh City</p>
          </div>
        </div>

        <div class="footer-item about">
          <div>
            <h3>Author</h3>
            <p>Richard</p>
            <p>Tho</p>
            <p>Son</p>
            <p>Phong</p>
            <p>Thanh</p>
          </div>
        </div>

        <div class="footer-item platform">
          <div>
            <h3>Powered By</h3>
            <p>VueJS</p>
          </div>
        </div>

        <div class="footer-item social">
          <div>
            <h3>Social</h3>
            <div class="social-icons">
              <div class="social-icon facebook">
                <font-awesome-icon :icon="['fab', 'facebook-f']" />
              </div>
              <div class="social-icon twitter">
                <font-awesome-icon :icon="['fab', 'twitter']" />
              </div>
              <div class="social-icon github">
                <font-awesome-icon :icon="['fab', 'github']" />
              </div>
              <div class="social-icon linkedin">
                <font-awesome-icon :icon="['fab', 'linkedin']" />
              </div>
            </div>
          </div>
        </div>

        <div class="footer-item credit">
          <div>
            <h3>Credit</h3>
            <p>CNPM666 &copy; 2020. For Educational Purposes Only.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>