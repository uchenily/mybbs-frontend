<template>
  <div>
    <div v-if='$store.state.username'>
        <div>欢迎, {{ this.$store.state.username }}</div>
        <router-link to="/logout"> 注销 </router-link>
    </div>
    <div v-else>
        <router-link to="/login"> 登录 </router-link>
        <router-link to="/register"> 注册 </router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Index',
  data: function() {
    return {
      token: "fake-token",
      username: ""
    }
  },
  methods: {
    getIndexInfo () {
      axios.get('/api/index.json') 
      .then(this.getIndexInfoSuccess)
    },
    getIndexInfoSuccess (result) {
      result = result.data
      if (result.token) {
        this.token = result.token
      }
      // console.log("token:", this.token)
    }
  },
  mounted: function () {
    this.getIndexInfo()
    this.username = this.$route.query.username
  }
}
</script>

<style scoped>
</style>
