<template>
    <div class="header-wrapper">
      <div>
        <div class="icon-wrapper">
          <i class="el-icon-s-unfold menu-icon"></i>
        </div>
      </div>
      <div>
        <div class="icon-wrapper">
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
            <el-dropdown-item divided>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: {

  },
  components: {

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
.header-wrapper {
  height: 50px;
  line-height: 50px;
  display: flex;
  justify-content: space-between;
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
