<template>
<div>
    <common-header></common-header>
    <div class="category">
        <div class="name">{{ name }}</div>
        <div class="desc">{{ description }}</div>
    </div>
    <common-content :items="items"></common-content>
</div>
</template>

<script>
import Header from './common/Header'
import Content from './common/Content'
export default {
    name: "Category",
    components: {
        CommonHeader: Header,
        CommonContent: Content
    },
    data: function () {
        return {
            name: "科技",
            description: "这是该分类下的描述信息这是该分类下的描述信息这是该分类下的描述信息这是该分类下的描述信息这是该分类下的描述信息这是该分类下的描述信息这是该分类下的描述信息这是该分类下的描述信息这是该分类下的描述信息这是该分类下的描述信息这是该分类下的描述信息",
            items: [{
                id: 1001,
                author: "zhangsan",
                category: "科技",
                title: '这是一个测试科技帖1',
                latestReply: "写得不错, 继续加油~"
            },{
                id: 1002,
                author: "lisi",
                category: "科技",
                title: '这是一个测试科技帖2',
                latestReply: "这是一条莫得感情的评论"
            },{
                id: 1003,
                author: "wangwu",
                category: "科技",
                title: '这是一个测试科技帖3'
            }],
        }
    }
}
</script>

<style scoped>
.category {
    width: 70%;
    margin: 0 auto;
    background: #10c1b9;
    color: #fff;
    padding: 40px;
    margin-bottom: 40px;
}
.name {
    font-size: 24px; 
    margin-bottom: 24px;
}
</style>
