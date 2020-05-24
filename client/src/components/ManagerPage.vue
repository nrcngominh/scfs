<template>
  <div class="container">
    <h1>{{menu}}</h1>
    <div class="abc">
        <button @click="logout">Logout</button>
    </div>
    <div id="app">
    <ul class="collection">
        <li v-for="item in foods" :key="item.name">
          <ul>{{item.name}}</ul>
        </li>    
    </ul>
</div>
</template>

<script>
import axios from '../services/axios-service';
new Vue({
  el: '#v-for-object',
  data: {
    object: {
      title: 'How to do lists in Vue',
      author: 'Jane Doe',
      publishedAt: '2016-04-10'
    }
  }
})
export default {
  name: "ManagerPage",
  data() {
    return {
        menu: "ManagerPage"
    }
  },
  beforeCreate() {
    document.body.className = "admin";
  },
  methods: {
    logout() {
      this.$router.push('/')
    },
  },
  mounted() { 
      axios.get('/food')
      .then((res) => {
        console.log(res.data);  
        this.foods = res.data;
      })
  }
}
</script>
