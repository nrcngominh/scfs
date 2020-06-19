<template>
  <div class="container">
    <md-button class="md-raised md-primary" @click="logout">Log out</md-button>
  </div>
</template>

<script>
import AccountService from '../services/account-service'

export default {
  name: 'HomePage',
  data() {
    return {
    }
  },
  methods: {
    async logout() {
      this.$store.commit('logout', null)
      this.$router.push('/login')
      AccountService.logout()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
