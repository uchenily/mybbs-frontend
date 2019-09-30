<template>
<div>
    您已经注销.
    <router-link to='/'> 返回主页 </router-link>
</div>
</template>

<script>
export default {
  name: 'Logout',
  mounted: function () {
    this.$store.dispatch('clearUsername')
  }
}
</script>

<style scoped>
</style>
