<template>
<div>
    <common-header></common-header>
    <ul class="wrapper">
        <li class="category" v-for="(category, index) in categories" :style="getBackground(index)"><router-link :to="'/categories/' + category.id">{{ category.name }}</router-link></li>
    </ul>
</div>
</template>

<script>
import Header from './common/Header'
export default {
    name: "Categories",
    components: {
        CommonHeader: Header
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
        getBackground (index) {
            let bgList = [
                "rgb(171, 70, 188)",
                "rgb(33, 137, 232)",
                "rgb(250, 148, 3)",
                "rgb(199, 219, 8)",
                "rgb(255, 102, 105)",
                "rgb(217, 27, 97)",
                "rgb(254, 140, 105)",
                "rgb(68, 174, 0)",
                "rgb(240, 185, 30)",
                "rgb(69, 192, 207)",
                "rgb(177, 180, 47)",
                "rgb(221, 44, 0)",
                "rgb(50, 178, 241)", 
                "rgb(50, 100, 241)",
                "rgb(48, 174, 232)"
            ]
            return {
              background: bgList[index % bgList.length]
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

