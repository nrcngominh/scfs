<template>
  <nb-content padder :style="{ marginTop: 0 }">
    <scroll-view :content-container-style="{contentContainer: {
        paddingVertical: 20
    }}">
        <text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem facilis provident qui rem nesciunt ducimus, eius repellat culpa odio doloribus architecto sed magni explicabo vel ullam. Vitae, cupiditate? Earum, vitae?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, hic? Voluptates repellendus magni, possimus officiis cumque aperiam necessitatibus rerum, id adipisci pariatur minima eius animi aliquid laboriosam explicabo a perferendis.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non rerum obcaecati quos vero omnis dolorum corporis maiores excepturi dolores facere adipisci totam, voluptas eveniet velit beatae, consequuntur, quo doloremque. Harum.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui nulla deserunt nemo reprehenderit minus sequi aliquid sit nesciunt saepe autem aspernatur non modi dolores, rem ex atque exercitationem. Labore, accusantium.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dignissimos iure corrupti. Aliquam eveniet architecto quod officia nam saepe illo, voluptatibus ab quae dicta nesciunt. A quasi odit veniam voluptate?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, sunt. Reiciendis a nam voluptatibus aliquid maxime! Omnis ex doloribus non facilis, commodi, molestiae porro beatae adipisci rem ut labore consectetur!</text>
    </scroll-view>

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