<template>
<div>
    <common-header></common-header>
    <div class="left-column">
        <div class='detail'>
            <div class='title'>{{ topic.title }}</div>
            <div class='info'>ID: {{ topic.id }}</div>
            <div class='info'>author: {{ topic.author }}</div>
            <div v-html='topic.content'>{{ topic.content }}</div>
        </div>
        <div class="point">
            <div class="agree"><span>👍</span>{{ topic.agree }}</div>
            <div class="disagree"><span>👎</span>{{ topic.disagree }}</div>
        </div>
        <div class="comment">
            <div class="header">留下一条友善的评论吧~</div>
            <div class="wrapper clearfix">
                <textarea autofocus></textarea>
                <button v-if="$store.state.username">提交</button>
                <button v-else class="disabled">提交</button>
            </div>
        </div>
        <div class="reply">
            <div class="header">
                <div v-if="topic.replies">最新评论:</div>
                <div v-else>还没有评论哦~</div>
            </div>
            <ul>
                <div class="wrapper">
                    <li v-for="reply in topic.replies">
                        <div class="info clearfix">
                            <div class="user"><router-link :to="'/users/' + reply.user">{{ reply.user }}</router-link></div>
                            <div class="date">{{ reply.date }}</div>
                        </div>
                        <div class="content">{{ reply.content }}</div>
                    </li>
                </div>
            </ul>
        </div>
    </div>
    <div class="right-column">
        <div class="post">
            <button>发起新的帖子</button>
        </div>
        <div class="recommand">
            <div class="header">推荐帖子</div>
            <ul>
                <li class="item" v-for="item in recommand"><router-link :to="'/topics/' + item.id">{{ item.title }}</router-link></li>
            </ul>
        </div> 
        <div></div> 
    </div>
</div>
</template>

<script>
import commonHeader from './common/Header'
export default {
    name: "Topic",
    data: function () {
        return {
            topic: {
                title: "测试专用贴",
                id: this.$route.params.id,
                author: "chen",
                content: "<b>国庆节</b>是由一个国家制定的用来纪念国家本身的法定假日 <br/>它们通常是这个国家的独立、宪法的签署、元首诞辰或其他有重大纪念意义的周年纪念日；也有些是这个国家守护神的圣人节然绝大部分国家都有类似的纪念日，但是由于复杂的政治关系，部分国家的这一节日不能够称为国庆日，比如美国只有独立日，没有国庆日，但是两者意义相同。而中国古代把皇帝即位、诞辰称为“国庆”。世界各国确定国庆节的依据千奇百怪。据统计，全世界以国家建立的时间为国庆节的国家有35个。以占领首都那天为国庆节的有古巴、柬埔寨等。有些国家以国家独立日为国庆节。<br/> <br/>1804年1月1日，海地人民歼灭了拿破仑的6万远征军，在太子港宣布独立，从此就把每年的1月1日定为国庆节。墨西哥、加纳等国也是如此。还有些国家以武装起义纪念日作为国庆节。7月14日是法国国庆日。 [2 1789年的这一天，巴黎人民攻占了象征封建统治的巴士底狱，推翻了君主政权。另有一些国家以重大会议日为国庆节。美国以1776年7月4日大陆会议通过《独立宣言》的日子为国庆日。 [3] 加拿大以英国议会1867年7月1日通过《大不列颠北美法案》这一天为国庆节。还有以国家元首的生日为国庆节的，如尼泊尔、泰国、瑞典、荷兰、丹麦、比利时等国家。国庆节是每个国家的重要节日，但名称有所不同。许多国家叫“国庆节”或“国庆日”，还有一些国家叫“独立日”或“独立节”，也有的叫“共和日”、“共和国日”、“革命日”、“解放日”、“国家复兴节”、“宪法日”等，还有直接以国名加上“日”的，如“澳大利亚日”、“巴基斯坦日”，有的则以国王的生日或登基日为国庆日，如遇国王更替，国庆的具体日期也随之更换。",
                replies: [{
                    user: "zhangsan",
                    date: "2019-10-01 14:51:23",
                    content: "你写的是啥???"
                },{
                    user: "leilei",
                    date: "2019-09-29 14:51:23",
                    content: "这是更早的评论..."
                },{
                    user: "wanwan",
                    date: "2019-09-27 14:51:23",
                    content: "hello world"
                }],
                agree: "1.2K",
                disagree: "109",
            },
            recommand: [{
                id: 1001,
                title: "测试帖1"
            },{
                id: 1002,
                title: "测试帖2"
            },{
                id: 1003,
                title: "测试帖3"
            }]
        }
    },
    components: {
        commonHeader
    },
    // 解决跳转同一路由下router-link不跳转问题
    // watch: {
    // 　　'$route' (to, from) {
    //     　　this.$router.go(0);
    // 　　}
    // }
}
</script>

<style scoped>
.left-column, .right-column {
}
.left-column {
    float: left;
    width: 48%;
    margin-left: 15%;
}
.right-column {
    float: right;
    width: 20%;
    margin-right: 15%;
}
.detail, .comment, .point, .reply, .post, .recommand {
    background: #fff;
    border: 1px solid #eee;
    padding: 30px;
    font-size: 16px;
    line-height: 1.4em;
}
.detail .title {
    font-size: 2em;
    font-weight: 400;
}
.detail .info {
    margin: 10px 0;
    font-size: 12px;
    font-weight: 900;
}
.point {
    margin-top: -1px;
}
.point div {
    padding: 10px 24px;
    margin-right: 30px;
    display: inline-block;
    background: rgba(0, 189, 181, 0.24);
}
.point div span {
    margin-right: 20px;
}
.comment, .reply, .recommand {
    margin-top: 40px;
}
.comment .wrapper textarea {
    width: 100%;
    padding: 0;
    height: 100px;
    font-size: 20px;
    margin: 14px -1px;
}
.comment .wrapper button {
    float: right;
    padding: 8px 24px;
}
.comment .wrapper button.disabled {
    filter:alpha(Opacity=20);
    -moz-opacity:0.2;
    opacity: 0.2;
}
.reply .header, .comment .header {
    font-size: 18px;
    font-weight: 600;
}
.reply .wrapper li {
    border-bottom: 1px dotted #dcebf5;
    padding: 6px 0;
}
.reply .wrapper .info .user {
    float: left;
}
.reply .wrapper .info .date {
    float: right;
}
.post button {
    width: 100%;
    padding: 13px 14px;
    font-size: 16px;
    font-weight: 200;
    font-family: "Microsoft YaHei";
}
.post button:hover {
    background: #02afa7;
}
.recommand .header {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 10px;
}
.recommand .item {
    margin-left: 20px;
    list-style-type: circle;
}
.recommand .item a:hover {
    text-decoration: underline; 
}
</style>
