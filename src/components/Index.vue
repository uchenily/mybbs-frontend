<template>
  <div>
    <common-header></common-header>
    <div class="select clearfix">
        <div :class="{hot:'hot', active:current=='hot'}" @click="active('hot')">热门</div>
        <div :class="{latest:'latext', active:current=='latest'}" @click="active('latest')">最新</div>
        <div :class="{agree:'agree', active:current=='agree'}" @click="active('agree')">点赞</div>
        <div :class="{trend:'trend', active:current=='trend'}" @click="active('trend')">趋势</div>
    </div>
    <common-content :items="items"></common-content>
  </div>
</template>

<script>
import axios from 'axios'
import Header from './common/Header'
import Content from './common/Content'
export default {
  name: 'Index',
  data: function() {
    return {
      result: {}
    }
  },
  components: {
    CommonHeader: Header,
    CommonContent: Content
  },
  methods: {
   active (select) {
        this.result.current = select 
    }
  },
  computed: {
    user: function () {
      return this.result.user
    },
    current: function () {
      return this.result.current
    },
    items: function () {
      return this.result.items
    }
  },
  mounted: function () {
    axios.get('api/index.json')
    .then((result) => {
      result = result.data 
      if (result.token) {
        this.result = result.data
      }
    })
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
