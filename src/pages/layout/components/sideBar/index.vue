<template>
    <div>
      <el-menu
      :default-active="$route.path"
      @open="handleOpen"
      @close="handleClose"
      :collapse="iscollapse"
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
      iscollapse: false
    }
  },
  props: {

  },
  watch: {
    getIsOpen () {
      this.iscollapse = this.$store.state.sidebar.isOpen
    }
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
    getIsOpen () {
      return this.$store.state.sidebar.isOpen
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
.el-menu {
  border-right: none;
}
</style>
