<template>
    <div>
        <div class="wrap_content mt-2">
            <div id="content" class="intro">
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: "IntroSlide"
    }
</script>

<style scoped>
.intro {
    background-image: url('../assets/bklast1.png');
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    width: 100%;
    display: table;
    /* box-shadow: 0px 4px 38px 0px rgba(104, 104, 104, 0.14); */
    box-shadow: 1px 0px 8px 6px #dacece;

}
.wrap_content {
    margin: auto;
    width: 80.4%;
}
@media (min-width:1224px) {
    .container {
        max-width: 1224px
    }
    #content {
        min-height: 600px;
    }
}
</style>
