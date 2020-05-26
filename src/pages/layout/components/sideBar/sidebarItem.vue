<template>
  <div>
    <el-submenu v-if="item.children && item.children.length > 1" :index="item.path" data->
      <template slot="title">
        <i v-if="item.meta && item.meta.icon" class="item.meta.icon"></i>
        <span>{{item.name}}</span>
      </template>
      <sidebarItem v-for="child in item.children"
       :key="child.path"
       :item="child"
       :basePath="basePath+'/'+child.path"></sidebarItem>
    </el-submenu>
    <el-menu-item v-if="item.children && item.children.length == 1" :index="this.basePath+'/'+item.children[0].path"
     @click.native="goPath(basePath+'/'+item.children[0].path)">
      <template slot="title">
        <i v-if="item.children[0].meta && item.children[0].meta.icon" class="item.children[0].meta.icon"></i>
        <span>{{item.children[0].name}}</span>
      </template>
    </el-menu-item>
    <el-menu-item v-if="!item.children" :index="basePath"
    @click.native="goPath(basePath)">
      <template slot="title">
        <i v-if="item.meta && item.meta.icon" class="item.meta.icon"></i>
        <span>{{item.name}}</span>
      </template>
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
  components: {

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
</style>
