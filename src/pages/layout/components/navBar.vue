<template>
    <div class="header-wrapper">
      <div>
        <div id="toggle-menu" class="icon-wrapper" @click="toggleMenu">
          <i class="el-icon-s-unfold menu-icon"></i>
        </div>
        <navigation></navigation>
      </div>
      <div>
        <div class="icon-wrapper" id="search-icon">
          <el-tooltip  effect="dark" content="搜索" placement="bottom">
            <i class="el-icon-search"></i>
          </el-tooltip>
        </div>
        <div class="icon-wrapper">
          <el-tooltip  effect="dark" content="全屏" placement="bottom">
            <i class="el-icon-full-screen"></i>
          </el-tooltip>
        </div>
        <div class="icon-wrapper">
          <el-tooltip  effect="dark" content="布局" placement="bottom">
            <i class="el-icon-s-grid"></i>
          </el-tooltip>
        </div>
        <div class="icon-wrapper">
          <svg-icon class="svg-icon" icon-class="translate"></svg-icon>
        </div>
        <el-dropdown trigger="click">
          <div class="avator-wrapper">
            <img src="http://img2.imgtn.bdimg.com/it/u=433095846,3800291930&fm=11&gp=0.jpg" alt="">
            <i class="el-icon-caret-bottom"></i>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>首页</el-dropdown-item>
            <el-dropdown-item>项目地址</el-dropdown-item>
            <el-dropdown-item>Docs</el-dropdown-item>
            <el-dropdown-item divided @click.native="loginOut">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
</template>

<script>
import navigation from './navigation'
export default {
  data () {
    return {

    }
  },
  props: {

  },
  components: {
    navigation
  },
  created () {

  },
  mounted () {

  },
  methods: {
    loginOut () {
      this.$store.dispatch('loginOut')
    },
    // 展开和隐藏菜单
    toggleMenu () {
      let isOpen = this.$store.state.sidebar.isOpen
      this.$store.commit('SET_ISOPEN', !isOpen)
    }
  }
}
</script>

<style scoped lang="scss">
.header-wrapper {
  height: 50px;
  line-height: 50px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
  &>div {
    display: flex;
  }
  .avator-wrapper {
    display: flex;
    padding-top: 5px;
    align-items: baseline;
    cursor: pointer;
    img {
      width: 40px;
      height: 40px;
      border-radius: 10px;
      margin-right:5px;
    }
    margin-right: 10px;
    margin-left: 10px;
  }
}
.icon-wrapper {
  cursor: pointer;
  .menu-icon {
    padding: 0 15px;
  }
  i {
    font-size: 20px;
    padding: 0 8px;
  }
  &:hover {
    background-color: rgba(0,0,0,.025);
  }
}
.svg-icon {
  font-size: 20px;
  color: black;
  font-size: 27px;
  padding: 0 3px;
  position: relative;
  top: 3px;
}
</style>
