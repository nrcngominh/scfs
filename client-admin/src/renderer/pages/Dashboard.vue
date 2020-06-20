<template>
  <div class="dashboard">
    <md-button class="md-raised md-primary" @click="logout">Log out</md-button>
  </div>
</template>

<script>
import AccountService from '../services/account-service'

export default {
  name: 'Dashboard',
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
