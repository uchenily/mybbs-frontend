<template>
<div>
    <common-header></common-header>
    <div class="wrapper">
        <textarea placeholder="随便写点什么吧~"></textarea>
        <button>提交</button>
    </div>
</div>
</template>

<script>
import commonHeader from './common/Header'
export default {
    name: "TopicNew",
    components: {
        commonHeader
    },
    data: function () {
        return {
            username: "",
        }
    }
}
</script>

<style scoped>
.wrapper {
    width: 70%;
    margin: 0 auto;
}
.wrapper textarea {
    width: 100%;
    height: 500px;
    padding: 0;
    padding-left: 1px;
    font-size: 18px;
    font-weight: 500;
    font-family: Consolas, emoji, "Microsoft YaHei";
    border: 1px dotted #eee;
}
.wrapper textarea:focus {
    outline: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
}
.wrapper button {
    padding: 12px 24px;
    float: right;
}
</style>
