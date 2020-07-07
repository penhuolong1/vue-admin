<template>
  <div class="navigation-wrapper">
    <transition name="breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="(item, index) in this.$route.matched" :key="index" :to="{ path: item.path }" @click.native="toPath(item.path)">{{ item.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </transition>
  </div>
</template>

<script>
export default {
  components: {

  },
  props: {

  },
  data() {
    return {
      naviteList: []
    }
  },
  computed: {
  },
  watch: {
  },
  created() {

  },
  mounted() {

  },
  methods: {
    // 跳转到指定页面
    toPath(path) {
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
