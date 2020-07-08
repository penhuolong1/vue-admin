<template>
  <el-dropdown>
    <el-button type="primary">
      command:{{ isComment == 1 ? 'closed':'opened' }}<i class="el-icon-arrow-down el-icon--right"/>
    </el-button>
    <el-dropdown-menu slot="dropdown">
      <template>
        <el-radio v-model="isComment_disable" label="1">close commet</el-radio>
        <el-radio v-model="isComment_disable" label="2">close open</el-radio>
      </template>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  components: {

  },
  props: {
    isComment: {
      type: String,
      default: '1'
    }
  },
  data() {
    return {
    }
  },
  computed: {
    isComment_disable: {
      get() {
        console.log(this.isComment)
        return this.isComment
      },
      set(val) {
        this.$emit('update:isComment', val)
      }
    }
  },
  created() {

  },
  mounted() {

  },
  methods: {

  }
}
</script>

<style scoped lang="scss">

</style>
