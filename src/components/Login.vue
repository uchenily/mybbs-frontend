<template>
<div>
  <form>
    用户: <input type='text' v-model='formInfo.username'/>
    密码: <input type='password' v-model='formInfo.password'/>
    <button @click='onSubmit()'> 登录 </button>
  </form>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Login',
  data: function() {
    return {
      formInfo: {
        username: "",
        password: ""
      }
    }
  },
  methods: {
    onSubmit () {
      // let formData = new FormData()
      // for (let key in this.formInfo) {
      //   formData.append(key, this.formInfo[key])
      // }
      // axios({
      //   method: "post",
      //   url: "/api/user.json",
      //   header: {
      //     "Content-Type": "multipart/form-data"
      //   },
      //   data: formData
      // }).then(
      //   (res) => {
      //     console.log(res)
      //   }
      // )
      axios.get("api/user.json").then(
        (res) => {
          // console.log(res)
          // console.log("token:", res.data.token)
          // let username = res.data.username
          let username = this.formInfo.username
          console.log("username:", username)
          this.$store.dispatch('updateUsername', username)
        }
      )
      // 跳转到首页
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
</style>
