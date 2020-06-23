<template>
  <div id="layout">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  async beforeCreate() {
    try {
    const foodRes = await this.$http.get("/api/food");
      this.$store.commit('setCategories', foodRes.data.map(obj => {
        return {
          label: obj.category,
          _id: obj.foods[0].categoryId
        }
      }))

      let foods = []
      foodRes.data.forEach(obj => {
          foods = foods.concat(obj.foods)
      })
      this.$store.commit('setFoods', foods)
    } catch (error) {
      console.log(error)
    }

    try {
        const cartRes = await this.$http.get('/api/cart')
        this.$store.commit('setCart', cartRes.data)

    } catch (error) {
        console.log(error)
    }
  }
}
</script>

<style>

</style>
