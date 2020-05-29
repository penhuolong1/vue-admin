<template>
  <div>
    <el-submenu v-if="item.children && item.children.length > 0 && !item.onlychild" :index="item.path">
      <template slot="title">
        <i v-if="item.meta && item.meta.icon" :class="item.meta.icon"></i>
        <span slot="title">{{item.name}}</span>
      </template>
      <sidebarItem v-for="child in item.children"
       :key="child.path"
       :item="child"
       :basePath="basePath+'/'+child.path"></sidebarItem>
    </el-submenu>

    <!-- 当菜单下面只有一个菜单时 -->
    <el-menu-item v-if="item.children && item.children.length == 1 && item.onlychild" :index="this.basePath+'/'+item.children[0].path"
     @click.native="goPath(basePath+'/'+item.children[0].path)">
        <i v-if="item.children[0].meta && item.children[0].meta.icon"     :class="item.children[0].meta.icon"></i>
        <span slot="title">{{item.children[0].name}}</span>
    </el-menu-item>

    <!-- 当菜单下面没有菜单时 -->
    <el-menu-item v-if="!item.children" :index="basePath"
    @click.native="goPath(basePath)">
      <i v-if="item.meta && item.meta.icon" class="item.meta.icon"></i>
      <span>{{item.name}}</span>
    </el-menu-item>
  </div>
</template>

<script>
export default {
  name: 'sidebarItem',
  data () {
    return {
    }
  },
  props: {
    item: {
      type: Object
    },
    basePath: {
      type: String
    }
  },
  created () {
    // console.log(this.basePath)
  },
  mounted () {

  },
  methods: {
    goPath (path) {
      this.$router.push({
        path
      })
    }
  }
}
</script>

<style scoped lang="scss">
/*隐藏文字*/
.el-menu--collapse  .el-submenu__title span{
  display: none;
}
/*隐藏 > */
.el-menu--collapse  .el-submenu__title .el-submenu__icon-arrow{
  display: none;
}
</style>
