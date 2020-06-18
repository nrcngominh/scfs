<template>
  <div class="container">
    <div>{{ email }}</div>
    <md-button class="md-raised md-primary" @click="logout">Log out</md-button>
  </div>
</template>

<script>
import AccountService from '../services/account-service'

export default {
  name: 'HomePage',
  data() {
    return {
      email: ''
    }
  },
  methods: {
    async logout() {
      AccountService.logout(() => {
        this.$router.push('/login')
      })
    }
  },
  async beforeCreate() {
    try {
      this.email = await AccountService.auth()
    } catch (error) {
      console.log(error)
      this.$router.push('/login')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
