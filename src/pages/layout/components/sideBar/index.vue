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
        <sidebarItem v-for="item in getRouters"
        :key="item.path"
        :item="item"
        :basePath="item.path">
        </sidebarItem>
    </el-menu>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import sidebarItem from './sidebarItem'
export default {
  data () {
    return {
    }
  },
  props: {

  },
  components: {
    sidebarItem
  },
  created () {
  },
  mounted () {

  },
  computed: {
    ...mapGetters(['getRouters']),
    activeMenu () {
      const route = this.$route
      const {path} = route
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
