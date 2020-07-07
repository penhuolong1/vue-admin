<template>
  <div class="box-card-wrapper">
    <div class="img-wrapper">
      <img src="@/assets/img/boxcard.jpg">
    </div>
    <div class="title-wrapper">
      <div class="avator-wrapper">
        <img src="http://img2.imgtn.bdimg.com/it/u=433095846,3800291930&fm=11&gp=0.jpg" alt="">
      </div>
      <mTitle :text="'vue-admin'" style="float:right;"/>
      <div class="clear"/>
    </div>
    <div class="progress-wrapper">
      <div class="title">Vue</div>
      <el-progress :percentage="70"/>
      <div class="title">JavaScript</div>
      <el-progress :percentage="18"/>
      <div class="title">Css</div>
      <el-progress :percentage="12"/>
      <div class="title">Eslint</div>
      <el-progress :percentage="100" status="success"/>
    </div>
  </div>
</template>

<script>
import mTitle from '@/components/mTitle'
export default {
  components: {
    mTitle
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
  .title-wrapper {
    position: relative;
    .avator-wrapper {
      position: absolute;
      left: 20px;
      top: -10px;
      width: 70px;
      height: 70px;
      background: #fff;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover {
        img {
          transform: rotate(-110deg);
        }
      }
      img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        transform-origin: 100% 50%;
        transition: all 0.2s linear;
      }
    }
    .clear {
      clear: both;
    }
  }
}
</style>
