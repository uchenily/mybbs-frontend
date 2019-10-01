<template>
<div>
    <common-header></common-header>
    <div class="category">
        <div class="name">{{ name }}</div>
        <div class="desc">{{ description }}</div>
    </div>
    <common-content></common-content>
</div>
</template>

<script>
import commonHeader from './common/Header'
import commonContent from './common/Content'
export default {
    name: "Category",
    components: {
        commonHeader,
        commonContent
    },
    data: function () {
        return {
            name: "科技",
            description: "这是该分类下的描述信息这是该分类下的描述信息这是该分类下的描述信息这是该分类下的描述信息这是该分类下的描述信息这是该分类下的描述信息这是该分类下的描述信息这是该分类下的描述信息这是该分类下的描述信息这是该分类下的描述信息这是该分类下的描述信息"
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
