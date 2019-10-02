<template>
  <div>
    <common-header></common-header>
    <div class="select clearfix">
        <div :class="{hot:'hot', active:current=='hot'}" @click="active('hot')">热门</div>
        <div :class="{latest:'latext', active:current=='latest'}" @click="active('latest')">最新</div>
        <div :class="{agree:'agree', active:current=='agree'}" @click="active('agree')">点赞</div>
        <div :class="{trend:'trend', active:current=='trend'}" @click="active('trend')">趋势</div>
    </div>
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
      username: "",
      current: "latest"
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
    },
    active (select) {
        this.current = select 
    }
  },
  mounted: function () {
    this.getIndexInfo()
    this.username = this.$route.query.username
  }
}
</script>

<style scoped>
.select {
    width: 70%;
    margin: 0 auto;
}
.select div {
    float: left;
    margin: -10px 40px 20px 0;
    padding: 16px 34px;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
}
.select div.active {
    filter:alpha(Opacity=30);
    -moz-opacity:0.3;
    opacity: 0.3;
}
.select .hot {
    background: #ff3860;
}
.select .latest {
    background: #01d1b2;
}
.select .agree {
    background: #3faaf1;
}
.select .trend {
    background: #ff470f;
}
</style>
