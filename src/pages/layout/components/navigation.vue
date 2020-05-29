<template>
    <div class="navigation-wrapper">
      <transition name="breadcrumb">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item v-for="(item, index) in this.$route.matched" :key="index" :to="{ path: item.path }" @click.native="toPath(item.path)">{{item.name}}</el-breadcrumb-item>
        </el-breadcrumb>
      </transition>
    </div>
</template>

<script>
export default {
  data () {
    return {
      naviteList: []
    }
  },
  props: {

  },
  watch: {
  },
  computed: {
  },
  components: {

  },
  created () {

  },
  mounted () {

  },
  methods: {
    // 跳转到指定页面
    toPath (path) {
      this.$router.push(path)
    }
  }
}
</script>

<style scoped lang="scss">
.navigation-wrapper {
  display: flex;
  align-items: center;
}
</style>
