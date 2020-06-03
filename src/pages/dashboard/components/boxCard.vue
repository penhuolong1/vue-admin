<template>
  <div class="box-card-wrapper">
    <div class="img-wrapper">
      <img src="@/assets/img/boxcard.jpg">
    </div>
    <div class="progress-wrapper">
      <div class='title'>Vue</div>
      <el-progress :percentage="70"></el-progress>
      <div class='title'>JavaScript</div>
      <el-progress :percentage="18"></el-progress>
      <div class='title'>Css</div>
      <el-progress :percentage="12"></el-progress>
      <div class='title'>Eslint</div>
      <el-progress :percentage="100" status="success"></el-progress>
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
.box-card-wrapper {
  overflow: hidden;
  background-color: #fff;
  padding-bottom: 30px;
  .img-wrapper {
    img {
      width: 100%;
      transition: all 0.2s linear;
    }
    &:hover {
      img {
        transform: scale(1.1, 1.1);
        filter: contrast(130%);
      }
    }
  }
  .progress-wrapper {
    padding: 0 15px;
    .title {
      font-size: 14px;
      color: #303133;
      margin-top: 12px;
    }
  }
}
</style>
