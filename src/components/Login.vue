<template>
<div>
  <form>
    <input type='text' placeholder='用户名' v-model='formInfo.username'/>
    <input type='password' placeholder='密码' v-model='formInfo.password'/>
    <button @click='onSubmit()'>登录</button>
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
form {
    position: absolute;
    width: 30%;
    left: 35%;
    top: 30%;
}
input, button {
    box-sizing: border-box;
    width: 100%;
    display: block;
    outline-style: none;
    border: 1px solid #e7e7e7; 
    margin-bottom: -1px;
    border-radius: 3px;
    padding: 13px 14px;
    font-size: 16px;
    font-weight: 200;
    font-family: "Microsoft YaHei";
}
button {
    border-color: #00bdb5;
    font-weight: 700;
    background: #00bdb5;
    color: #fff;
}
button:hover {
    background: #02afa7;
}
input:focus {
    border-color: #00bdb5;
    outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(0,189,181,.5);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(0,189,181,.5)
}
</style>
