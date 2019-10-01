<template>
<div>
    <common-header></common-header>
    <ul class="wrapper">
        <li class="category" v-for="category in categories" :style="randomRGB()"><router-link :to="'/categories/' + category.id">{{ category.name }}</router-link></li>
    </ul>
</div>
</template>

<script>
import commonHeader from './common/Header'
export default {
    name: "Categories",
    components: {
        commonHeader
    },
    data: function () {
        return {
            categories: [{
                id: 1001,
                name: "科技"
            },{
                id: 1002,
                name: "笑话"
            },{
                id: 1003,
                name: "生活"
            },{
                id: 1004,
                name: "瞎扯"
            },{
                id: 1005,
                name: "情感"
            },{
                id: 1006,
                name: "交友"
            },{
                id: 1007,
                name: "闲聊"
            },{
                id: 1008,
                name: "自然"
            },{
                id: 1009,
                name: "BUG反馈"
            }]
        }
    },
    methods: {
        randomRGB () {
            let R = Math.floor(Math.random() * 255);
            let G = Math.floor(Math.random() * 255);
            let B = Math.floor(Math.random() * 255);
            return {
              background: 'rgb(' + R + ',' + G + ',' + B + ')'
            }
        }
    }
}
</script>

<style scoped>
.wrapper {
    width: 1120px;
    margin: 0 auto;
    
}
.category {
    float: left;
    margin: 12px;
}
.category a {
    color: #fff;
    display: block;    
    width: 200px;
    height: 140px;
    text-align: center;
    line-height: 140px;
    font-size: 20px;
    font-weight: 700;
}
</style>

