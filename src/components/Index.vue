<template>
  <div>
    <common-header></common-header>
    <common-content></common-content>
  </div>
</template>

<script>
import axios from 'axios'
import commonHeader from './common/Header'
import commonContent from './common/Content'
export default {
  name: 'Index',
  data: function() {
    return {
      token: "fake-token",
      username: ""
    }
  },
  components: {
    commonHeader,
    commonContent
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
body {
    background: #f8fafc;
}
</style>
