<template>
  <div class="about-page">
    <section class="categories">
      <article class="description wrapper">
        <h2>
          ABOUT US
        </h2>
        <p>Description about my team</p>
      </article>

      

       <div class="wrapper">
        <div class="category-container">
          <!-- line1 -->
          <article class="category-item">
            <div class="category-image">
              <div class="category-image-content">
                <img src="@/assets/images/ngocava.png" alt="category" />
              </div>
            </div>
            <div class="category-content">
              <h3>Ngô Minh Ngọc Richard</h3>
              <p>Student ID: 1813867</p>
              <p>Leader</p>
              <a href="https://github.com/nrcngominh">Contact (github)</a> 
            </div>
          </article>
          <!-- line2 -->
          <article class="category-item">
            <div class="category-image">
              <div class="category-image-content">
                <img src="@/assets/images/thoava2.0.png" alt="category" />
              </div>
            </div>
            <div class="category-content">
              <h3>Hà Ngọc Thọ</h3>
              <p>Student ID: 1814196</p>
              <p>Member</p>
              <a href="https://github.com/ngocthoha">Contact (github)</a>              

            </div>
          </article>
          <!-- line3 -->
          <article class="category-item">
            <div class="category-image">
              <div class="category-image-content">
                <img src="@/assets/images/sonava.png" alt="category" />
              </div>
            </div>
            <div class="category-content">
              <h3>Trần Quang Sơn</h3>
              <p>Student ID: 1813867</p>
              <p>Member</p>
              <a href="https://github.com/sontranquang">Contact (github)</a> 
            </div>
          </article>
          <!-- line4 -->
          <article class="category-item">
            <div class="category-image">
              <div class="category-image-content">
                <img src="@/assets/images/phongava.png" alt="category" />
              </div>
            </div>
            <div class="category-content">
              <h3>Nguyễn Trường Phong</h3>
              <p>Student ID: 1xxxxxx</p>
              <p>Member</p>       
              <a href="https://github.com/phongngo1001">Contact (github)</a>        

            </div>
            <!-- line5 -->
          </article>
          <article class="category-item">
            <div class="category-image">
              <div class="category-image-content">
                <img src="@/assets/images/tuyetcaava.png" alt="category" />
              </div>
            </div>
            <div class="category-content">
              <h3>Ngô Đình Thạnh</h3>
              <p>Student ID: 1xxxxxx</p>
              <p>Member</p>
              <a href="https://github.com/tuyetca1518">Contact (github)</a> 
            </div>
          </article>
        </div>
      </div>
      
    </section>

   
  </div>
</template>

<script>

export default {
  name: "AboutPage",
  data() {
    return {
      arr: [1, 2, 3, 4]
    };
  },
  methods: {
    goToMenu() {
      this.$router.push("/menu");
    }
  },
  mounted() {
    this.enterLandingPage();
  },
  beforeDestroy() {
    this.exitLandingPage();
  }
};
</script>