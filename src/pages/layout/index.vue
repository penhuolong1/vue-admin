<template>
    <div class="app-wrapper">
      <div class="left-wrapper" :style="{width: menuWidth+'px'}">
        <sideBar></sideBar>
      </div>
      <div class="right-wrapper" :style="{marginLeft: menuWidth+'px'}">
        <div class="nav-wrapper">
          <navBar />
          <tagView />
        </div>
        <div class="main-wrapper">
          <appMain></appMain>
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
  data () {
    return {
      menuWidth: 210
    }
  },
  props: {

  },
  components: {
    sideBar,
    appMain,
    navBar,
    tagView
  },
  computed: {
    getMenuIsOpen () { // 获取菜单是否打开状态
      return this.$store.state.sidebar.isOpen
    }
  },
  watch: {
    getMenuIsOpen () { // 监听菜单是否打开
      if (this.getMenuIsOpen) {
        this.menuWidth = 64
      } else {
        this.menuWidth = 210
      }
    }
  },
  created () {

  },
  mounted () {

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
}
</style>
