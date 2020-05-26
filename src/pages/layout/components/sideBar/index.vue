<template>
    <div>
      <el-menu
      :default-active="$route.path"
      @open="handleOpen"
      @close="handleClose"
      background-color="#324157"
      text-color="#fff"
      active-text-color="#ffd04b"
      :collapse-transition="false"
      mode="vertical"
      :unique-opened="false"
      >
        <sidebarItem v-for="item in routesData"
        :key="item.path"
        :item="item"
        :basePath="item.path">
        </sidebarItem>
    </el-menu>
    </div>
</template>

<script>
import { asyncRoutes } from '@/router/index'
import sidebarItem from './sidebarItem'
export default {
  data () {
    return {
      routesData: asyncRoutes
    }
  },
  props: {

  },
  components: {
    sidebarItem
  },
  created () {
    console.log(this.$route)
  },
  mounted () {

  },
  computed: {
    activeMenu () {
      const route = this.$route
      const {path} = route
      console.log(path)
      return path
    }
  },
  methods: {
    handleOpen () {

    },
    handleClose () {

    }
  }
}
</script>

<style scoped lang="scss">

</style>
