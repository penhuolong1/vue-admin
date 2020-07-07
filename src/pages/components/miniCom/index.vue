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
            <lineBtn :content="'document'" :color="'#324157'"/>
          </el-col>
          <el-col :span="4" class="text-center">
            <lineBtn :content="'icon'" :color="'#3a71a8'"/>
          </el-col>
          <el-col :span="4" class="text-center">
            <lineBtn :content="'excel'" :color="'#e65d6e'"/>
          </el-col>
          <el-col :span="4" class="text-center">
            <lineBtn :content="'table'" :color="'#30b08f'"/>
          </el-col>
          <el-col :span="4" class="text-center">
            <lineBtn :content="'from'" :color="'#4ab7bd'"/>
          </el-col>
          <el-col :span="4" class="text-center">
            <lineBtn :content="'theme'" :color="'#fec171'"/>
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
          <div class="card-body">
            <mdInput :label="'标题'" :value.sync="mdinputvalue"/>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <div slot="header" class="clearfix">
            <span>图片的hover效果</span>
          </div>
          <div class="card-body">
            <imgHover
              :title="'vue-element-admin'"
              :url="'https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191'"/>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <div slot="header" class="clearfix">
            <span>水波纹效果</span>
          </div>
          <div class="card-body">
            <el-button v-waves type="primary">水波纹</el-button>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <div slot="header" class="clearfix">
            <span>Material Design 的input</span>
          </div>
          <div class="card-body">
            <mTitle :text="'vue-element'"/>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20" style="margin-top: 20px;">
      <el-col :span="6">
        <el-card>
          <div slot="header" class="clearfix">
            <span>share</span>
          </div>
          <div class="card-body">
            <dropdownMenu :article-list="articleList"/>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import lineBtn from '@/components/btns/line-btn'
import mdInput from '@/components/mdInput'
import imgHover from '@/components/imgHover/index'
import mTitle from '@/components/mTitle/index'
import dropdownMenu from '@/components/dropdownMenu/index'
import waves from '@/directives/waves/index.js'

export default {
  directives: {
    waves
  },
  components: {
    lineBtn,
    mdInput,
    imgHover,
    mTitle,
    dropdownMenu
  },
  props: {

  },
  data() {
    return {
      mdinputvalue: '',
      articleList: [
        { title: '基础篇' },
        { title: '登录权限篇' },
        { title: '实战篇' },
        { title: 'vue-admin-template 篇' },
        { title: 'v4.0 篇' },
        { title: '优雅的使用 icon' }
      ]
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
.content-wrapper {
  .card-body {
    padding: 20px;
    overflow: hidden;
    min-height: 150px;
  }
  .text-center {
    text-align: center;
  }
}
</style>
