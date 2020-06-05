<template>
  <div>
    你的权限: ['{{role}}']
    <div style="margin-top: 10px;">切换权限
      <el-radio-group v-model="role" @change="selectRole">
        <el-radio-button label="editor"></el-radio-button>
        <el-radio-button label="admin"></el-radio-button>
      </el-radio-group>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      role: ''
    }
  },
  props: {

  },
  components: {

  },
  created () {
    this.role = this.$store.state.user.roles[0]
  },
  mounted () {

  },
  methods: {
    selectRole (val) {
      this.$store.dispatch('changeRole', val) // 切换角色
      let roles = this.$store.state.user.roles
      this.$store.dispatch('generateRoutes', roles) // 重新获取路由
      location.reload() // 刷新本页面
    }
  }
}
</script>

<style scoped lang="scss">

</style>
