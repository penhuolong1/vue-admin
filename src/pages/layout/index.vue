<template>
  <div class="app-wrapper">
    <div :style="{width: menuWidth+'px'}" class="left-wrapper">
      <sideBar/>
    </div>
    <div :style="{marginLeft: menuWidth+'px'}" class="right-wrapper">
      <div class="nav-wrapper">
        <navBar />
        <tagView />
      </div>
      <div class="main-wrapper">
        <appMain/>
      </div>
    </div>
  </div>
</template>

<script>
import sideBar from './components/sideBar/index'
import appMain from './components/appMain'
import navBar from './components/navBar'
import tagView from './components/tagView/index'
export default {
  components: {
    sideBar,
    appMain,
    navBar,
    tagView
  },
  props: {

  },
  data() {
    return {
      menuWidth: 210
    }
  },
  computed: {
    getMenuIsOpen() { // 获取菜单是否打开状态
      return this.$store.state.sidebar.isOpen
    }
  },
  watch: {
    getMenuIsOpen() { // 监听菜单是否打开
      if (this.getMenuIsOpen) {
        this.menuWidth = 64
      } else {
        this.menuWidth = 210
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
@import '~@/assets/styles/variables.scss';
.app-wrapper {
  &>.left-wrapper {
    position: fixed;
    top: 0px;
    bottom: 0px;
    left: 0px;
    width: 210px;
    background-color: $blue;
  }
  &>.right-wrapper {
    margin-left: 210px;
    overflow: hidden;
  }
  .main-wrapper {
    padding: 20px;
  }
}
</style>
