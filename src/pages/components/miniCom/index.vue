<template>
  <div class="content-wrapper">
    <aside>一些小组件</aside>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>buttons</span>
      </div>
      <div class="card-body">
        <el-row :gutter="20">
          <el-col :span="4" class="text-center">
            <lineBtn :content="'document'" :color="'#324157'"></lineBtn>
          </el-col>
          <el-col :span="4" class="text-center">
            <lineBtn :content="'icon'" :color="'#3a71a8'"></lineBtn>
          </el-col>
          <el-col :span="4" class="text-center">
            <lineBtn :content="'excel'" :color="'#e65d6e'"></lineBtn>
          </el-col>
          <el-col :span="4" class="text-center">
            <lineBtn :content="'table'" :color="'#30b08f'"></lineBtn>
          </el-col>
          <el-col :span="4" class="text-center">
            <lineBtn :content="'from'" :color="'#4ab7bd'"></lineBtn>
          </el-col>
          <el-col :span="4" class="text-center">
            <lineBtn :content="'theme'" :color="'#fec171'"></lineBtn>
          </el-col>
        </el-row>
      </div>
    </el-card>
    <el-row :gutter="20" style="margin-top: 20px;">
      <el-col :span="6">
        <el-card>
          <div slot="header" class="clearfix">
            <span>Material Design 的input</span>
          </div>
          <div class="card-body"></div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <div slot="header" class="clearfix">
            <span>Material Design 的input</span>
          </div>
          <div class="card-body"></div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <div slot="header" class="clearfix">
            <span>Material Design 的input</span>
          </div>
          <div class="card-body"></div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <div slot="header" class="clearfix">
            <span>Material Design 的input</span>
          </div>
          <div class="card-body"></div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import lineBtn from '@/components/btns/line-btn'
export default {
  data () {
    return {

    }
  },
  props: {

  },
  components: {
    lineBtn
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
.content-wrapper {
  .card-body {
    padding: 20px;
    overflow: hidden;
  }
  .text-center {
    text-align: center;
  }
}
</style>
