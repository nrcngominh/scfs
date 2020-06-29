<template>
  <nb-content padder :style="{ marginTop: 0 }">
    <nb-card :style="{ flex: 0 }">
      <nb-card-item>
        <image square :source="logo" class="thumnail" />
        <nb-body :style="{marginLeft: 10}">
          <nb-h1 class="title-food">Xôi mặn</nb-h1>
          <nb-h3 class="title-price">15.000đ</nb-h3>
          <nb-h3 class="title-price">Ngon bổ rẻ</nb-h3>
        </nb-body>
      </nb-card-item>
    </nb-card>

    <nb-card :style="{ flex: 0 }">
      <nb-card-item>
        <image square :source="logo1" class="thumnail" />
        <nb-body :style="{marginLeft: 10}">
          <nb-h1 class="title-food">Cơm gà</nb-h1>
          <nb-h3 class="title-price">15.000đ</nb-h3>
          <nb-h3 class="title-price">Ngon bổ rẻ</nb-h3>
        </nb-body>
      </nb-card-item>
    </nb-card>

  </nb-content>
</template>
<script>
import logo from "../../../../assets/images/xoi.jpg";
import logo1 from "../../../../assets/images/com-ga.jpg";
export default {
  data() {
    return {
      logo,
      logo1
    }
  }
}
</script>
<style>
.thumnail {
  width: 90;
  height: 90;
}
.title-food {
  color: #000;
  font-weight: 400;
  font-size: 20;
}
.title-price {
  color: #000;
  font-size: 15;
}
</style>