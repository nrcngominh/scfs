<template>
    <div class="slide">
        <div class="content">
            <div class="img-bk">
                <img src="@/assets/bg.png" alt="">
                <div class="order-button mt-1">
                    <a class="btn btn-lg">ORDER NOW</a>
                </div>
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
img{
    max-width: 100%;
}
body {
    margin: 0;
    padding: 0;
}
.slide{
    min-height: 100vh;
}
.content {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 55px;
    margin-left: auto;
    margin-right: auto;
    width: 100vw;
    min-height: 80vh;
}
.content .img-bk{
    width: 90%;
    height: 100%;
    position: relative;

}
.content .order-button{
    position: absolute;
    top:77.4%;
    right: 19%;
    width: 15%;
}
.order-button a {
    color: white;
    background-color: red;
    border-color: none;
    border-radius: 25px;
    width: 100%;
    font-family: "Roboto", "Open Sans", Helvetica, Arial, sans-serif;
    font-weight: 600;
    height: 51px;
    line-height: 2;
    box-shadow: 5px 6px 6px 1px #273746;
}
.order-button a:hover {
    color:red;
    background-color: white;
}
.btn-lg {
    font-size: 17px;
    font-size: 1.0625rem;
}
</style>
