<template>
  <div class="panel-group-wrapper">
    <el-row :gutter="20">
      <el-col :md="6" :sm="12" :xs="12">
        <div class="panel-item">
          <div class="icon-wrapper icon-people">
            <svg-icon icon-class="peoples"/>
          </div>
          <div class="content">
            <div class="label">New Visits</div>
            <div class="number">
              <countTo :start-val="startNum" :end-val="102400" :duration="3000"/>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :md="6" :sm="12" :xs="12">
        <div class="panel-item">
          <div class="icon-wrapper icon-message">
            <svg-icon icon-class="message"/>
          </div>
          <div class="content">
            <div class="label">Message</div>
            <div class="number">
              <countTo :start-val="startNum" :end-val="81212" :duration="3000"/>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :md="6" :sm="12" :xs="12">
        <div class="panel-item">
          <div class="icon-wrapper icon-shopping">
            <svg-icon icon-class="shopping"/>
          </div>
          <div class="content">
            <div class="label">Shopping</div>
            <div class="number">
              <countTo :start-val="startNum" :end-val="9280" :duration="3000"/>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :md="6" :sm="12" :xs="12">
        <div class="panel-item">
          <div class="icon-wrapper icon-money">
            <svg-icon icon-class="money"/>
          </div>
          <div class="content">
            <div class="label">Money</div>
            <div class="number">
              <countTo :start-val="startNum" :end-val="13600" :duration="3000"/>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import countTo from 'vue-count-to'
export default {
  components: {
    countTo
  },
  props: {

  },
  data() {
    return {
      startNum: 0
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
.panel-item {
  width: 100%;
  height: 108px;
  background-color: white;
  box-shadow: 4px 4px 40px rgba(0,0,0,.05);
  border-color: rgba(0,0,0,.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 10px;
  .icon-wrapper {
    font-size: 50px;
    width: 80px;
    height: 80px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
      &.icon-people {
        color: white;
        background-color: #40c9c6;
      }
      &.icon-message {
        color: white;
        background-color: #36a3f7;
      }
      &.icon-money {
        color: white;
        background-color: #f4516c;
      }
      &.icon-shopping {
        color: white;
        background-color: #34bfa3;
      }
    }
    &.icon-people {
      color: #40c9c6;
    }
    &.icon-message {
      color: #36a3f7;
    }
    &.icon-money {
      color: #f4516c;
    }
    &.icon-shopping {
      color: #34bfa3;
    }
  }
  .content {
    .label {
      color: rgba(0,0,0,.45);
      font-size: 16px;
      margin-bottom: 12px;
      font-weight: bolder;
    }
    .number {
      font-weight: bolder;
      font-size: 20px;
    }
  }
}
</style>
