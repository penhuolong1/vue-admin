<template>
    <div class="m-title-wrapper">
      <span>{{text}}
        <span class="span span1"></span>
        <span class="span span2"></span>
      </span>
    </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: {
    text: {
      type: String
    }
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
.m-title-wrapper {
  float: right;
  line-height: 60px;
  font-weight: bolder;
  margin-right: 20px;
  cursor: pointer;
  font-size: 20px;
  color: #4dd9d5;
  overflow: hidden;
  &:hover {
    &>span {
      color: transparent;
      &::before {
        transform: translateX(100%);
      }
      .span {
        &::before {
          transition-delay: 0.3s;
          transform: translate3d(0, 0, 0);
          transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
        }
        &.span2 {
          &::before {
            transform: translate3d(0, -100%, 0);
          }
        }
      }
    }
  }
  & > span {
    transition: all 0.3s linear;
    position: relative;
    overflow: hidden;
    line-height: 1;
    &::before {
      content: '';
      width: 100%;
      height: 6px;
      position: absolute;
      top: 50%;
      margin-top: -3px;
      background-color: #409EFF;
      transition: all 0.4s;
      transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
      transform: translateX(-100%);
    }
    .span {
      position: absolute;
      width: 100%;
      height: 50%;
      left: 0;
      top: 0;
      overflow: hidden;
      &::before {
        content: 'vue-admin';
        position: absolute;
        left: 0px;
        top: 0;
        width: 100%;
        height: 100%;
        color: #3888fa;
        transition: all 0.5s;
        transform: translate3d(0, 100%, 0);
      }
      &.span2 {
        top: 50%;
        &::before {
          bottom: 0;
          transform: translate3d(0, -200%, 0);
        }
      }
    }
  }
}
</style>
