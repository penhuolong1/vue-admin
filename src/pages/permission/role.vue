<template>
  <div class="content-wrapper">
    <el-button type="primary" @click="addRole">新增角色</el-button>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="key"
        label="角色"
        width="180"
        align="center"/>
      <el-table-column
        prop="name"
        label="名称"
        width="180"
        align="center"/>
      <el-table-column
        prop="description"
        label="描述"
        align="center"/>
      <el-table-column
        label="编辑"
        align="center">
        <template slot-scope="scope">
          <el-button type="primary" @click="edit(scope.key)">编辑权限</el-button>
          <el-button type="danger" @click="del(scope.key)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog :visible.sync="visible" title="编辑角色">
      <el-form :modal="roleForm" label-width="80px">
        <el-form-item label="名字">
          <el-input v-model="roleForm.name"/>
        </el-form-item>
        <el-form-item label="descrpition">
          <el-input v-model="roleForm.descrpition" type="textarea"/>
        </el-form-item>
        <el-form-item label="权限">
          <el-tree
            ref="tree"
            :data="data"
            :props="defaultProps"
            show-checkbox
            node-key="path"/>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { asyncRoutes } from '@/router/asyncRoutes'
export default {
  components: {

  },
  props: {

  },
  data() {
    return {
      tableData: [{
        key: 'admin',
        name: 'admin',
        description: '管理员'
      }, {
        key: 'editor',
        name: 'editor',
        description: '编辑者'
      }, {
        key: 'other',
        name: 'other',
        description: '其他用户'
      }],
      visible: false,
      roleForm: {
        name: ''
      },
      data: [],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  created() {
    this.data = this.getData(asyncRoutes)
  },
  mounted() {

  },
  methods: {
    edit() {
      this.visible = true
      this.$nextTick(() => {
        const ary = this.getData(asyncRoutes, '', 'editor')
        console.log(ary)
        this.$refs.tree.setCheckedNodes([
          { path: '/dashboard/index', label: '首页' },
          { path: '/guide/index', label: '引导页' },
          { path: '/page/',
            label: '权限',
            children: [
              { path: '/permission/directive', label: '指令权限' }
            ] }
        ])
      })
    },
    // 获取树控件数据
    getData(route, baseUrl = '', role) {
      const res = []
      if (route && route.length > 0) {
        route.forEach(item => {
          if (item.hidden) {
            return false
          }
          // 没有子节点的情况下
          if (!item.children || item.children.length === 0) {
            if (role) {
              if (item.meta.roles && item.meta.roles.indexOf(role) === -1) {
                return true
              }
            }
            const obj = {
              path: `${baseUrl}/${item.path}`,
              label: item.name
            }
            res.push(obj)
          }
          // 只有一个子节点的情况
          if (item.children && item.children.length === 1 && item.onlychild) {
            if (role) {
              if (item.children[0].meta.roles && item.children[0].meta.roles.indexOf(role) === -1) {
                return true
              }
            }
            const obj = {
              path: `${item.path}/${item.children[0].path}`,
              label: item.children[0].name
            }
            res.push(obj)
          }
          // 当有多个子节点的情况
          if (item.children && item.children.length > 1) {
            if (role) {
              if (item.meta.roles && item.meta.roles.indexOf(role) === -1) {
                return true
              }
            }
            const obj = {
              path: `${baseUrl}/${item.children[0].path}/`,
              label: item.name,
              children: this.getData(item.children, item.path, role)
            }
            res.push(obj)
          }
        })
      }
      return res
    },
    // 添加角色
    addRole() {

    }
  }
}
</script>

<style scoped lang="scss">

</style>
