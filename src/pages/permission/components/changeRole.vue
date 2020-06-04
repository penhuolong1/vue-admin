<template>
  <div>
    你的权限: ['{{role}}']
    <div style="margin-top: 10px;">切换权限
      <el-radio-group v-model="radio1">
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
      role: null,
      radio1: ''
    }
  },
  props: {

  },
  components: {

  },
  created () {
    this.radio1 = this.$store.state.user.roles[0]
    debugger
  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style scoped lang="scss">

</style>
