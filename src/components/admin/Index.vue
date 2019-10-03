<template>
<div>
    <admin-header></admin-header>
    <admin-content></admin-content>
</div>
</template>

<script>
import axios from 'axios'
import AdminHeader from './common/Header'
import AdminContent from './common/Content'
export default {
    name: 'AdminIndex',
    components: {
        AdminHeader,
        AdminContent
    },
    mounted: function () {
        if (!this.$store.state.username) {
            this.$router.push('/admin/login')
            return;
        }
        let target =  "category"
        let items = [{
            id: 1001,
            name: "生活",
            description: "这是对分类的描述信息",
            action: ["delete", "update"]
        },{
            id: 1002,
            name: "生活",
            description: "这是对分类的描述信息",
            action: ["delete", "update"]
        },{
            id: 1003,
            name: "生活",
            description: "这是对分类的描述信息",
            action: ["delete", "update"]
        },{
            id: 1004,
            name: "生活",
            description: "这是对分类的描述信息",
            action: ["delete", "update"]
        },{
            id: 1005,
            name: "生活",
            description: "这是对分类的描述信息",
            action: ["delete", "update"]
        }]
        this.$store.state.dashboard.target = target
        this.$store.state.dashboard.items = items
    }
}
</script>

<style scoped>
</style>
