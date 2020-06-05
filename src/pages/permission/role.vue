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
        align="center">
      </el-table-column>
      <el-table-column
        prop="name"
        label="名称"
        width="180"
        align="center">
      </el-table-column>
      <el-table-column
        prop="description"
        label="描述"
        align="center">
      </el-table-column>
      <el-table-column
        label="编辑"
        align="center">
        <template slot-scope="scope">
          <el-button type="primary" @click="edit(scope.key)">编辑权限</el-button>
          <el-button type="danger"  @click="del(scope.key)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="编辑角色" :visible.sync="visible">
      <el-form :modal="roleForm" label-width="80px">
        <el-form-item label="名字">
          <el-input v-model="roleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="descrpition">
          <el-input type="textarea" v-model="roleForm.descrpition"></el-input>
        </el-form-item>
        <el-form-item label="权限">
          <el-tree
            :data="data"
            show-checkbox
            node-key="id"
            :default-expanded-keys="[2, 3]"
            :default-checked-keys="[5]"
            :props="defaultProps">
          </el-tree>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
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
      data: [{
        id: 1,
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
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
    edit () {
      this.visible = true
    },
    addRole () {

    }
  }
}
</script>

<style scoped lang="scss">

</style>
