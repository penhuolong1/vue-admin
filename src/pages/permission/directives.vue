<template>
  <div class="content-wrapper">
    <changeRole/>
    <div v-permission="['admin']" class="permission-label">Only <el-tag>admin</el-tag> can see this</div>
    <div v-permission="['editor']" class="permission-label">Only <el-tag>editor</el-tag> can see this</div>
    <div v-permission="['editor','admin']" class="permission-label">Only <el-tag>editor</el-tag> <el-tag>admin</el-tag> can see this</div>
    <div style="margin-top:60px;">
      <aside>
        在某些情况下，不适合使用 v-permission。例如：Element-UI 的 el-tab 或 el-table-column 以及其它动态渲染 dom 的场景。你只能通过手动设置 v-if 来实现。
        <br> e.g.
      </aside>

      <el-tabs type="border-card" style="width:550px;">
        <el-tab-pane v-permission="['admin']" label="Admin">
          Admin can see this
          <el-tag class="permission-sourceCode" type="info">
            v-permission="['admin']"
          </el-tag>
        </el-tab-pane>

        <el-tab-pane v-permission="['editor']" label="Editor">
          Editor can see this
          <el-tag class="permission-sourceCode" type="info">
            v-permission="['admin']"
          </el-tag>
        </el-tab-pane>

        <el-tab-pane v-permission="['editor','admin']" label="Admin-OR-Editor">
          Both admin or editor can see this
          <el-tag class="permission-sourceCode" type="info">
            v-permission="['editor','admin']"
          </el-tag>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import changeRole from './components/changeRole'
import permission from '@/directives/permission'
export default {
  directives: {
    permission: permission
  },
  components: {
    changeRole
  },
  props: {

  },
  data() {
    return {

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
.permission-label {
  width: 320px;
  margin-top: 15px;
  background-color: #f0f9eb;
  color: #67c23a;
  padding: 8px 16px;
  border-radius: 4px;
}
</style>
