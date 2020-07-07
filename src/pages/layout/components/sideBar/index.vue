<template>
  <div>
    <el-menu
      :default-active="$route.path"
      :collapse="iscollapse"
      :collapse-transition="false"
      :unique-opened="false"
      background-color="#324157"
      text-color="#fff"
      active-text-color="#ffd04b"
      mode="vertical"
      @open="handleOpen"
      @close="handleClose"
    >
      <sidebarItem
        v-for="item in getRouters"
        :key="item.path"
        :item="item"
        :base-path="item.path"/>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import sidebarItem from './sidebarItem'
export default {
  components: {
    sidebarItem
  },
  props: {

  },
  data() {
    return {
      iscollapse: false
    }
  },
  computed: {
    ...mapGetters(['getRouters']),
    getIsOpen() {
      return this.$store.state.sidebar.isOpen
    }
  },
  watch: {
    getIsOpen() {
      this.iscollapse = this.$store.state.sidebar.isOpen
    }
  },
  created() {
  },
  mounted() {

  },
  methods: {
    handleOpen() {

    },
    handleClose() {

    }
  }
}
</script>

<style scoped lang="scss">
.el-menu {
  border-right: none;
}
</style>
