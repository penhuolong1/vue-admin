
<script>
export default {
  created() {
    const { params, query } = this.$route
    this.$router.replace({ path: '/' + params.path, query })
    location.reload() // 强制刷新本页面
  },
  render: function(h) {
    return h() // avoid warning message
  }
}
</script>

<style scoped lang="scss">

</style>
