<template>
    <div class="header-wrapper">
      <div>
        <div class="icon-wrapper">
          <i class="el-icon-s-unfold menu-icon"></i>
        </div>
      </div>
      <div>
        <div class="icon-wrapper">
          <svg-icon icon-class='search'></svg-icon>
        </div>
        <div class="icon-wrapper">
          <svg-icon icon-class="fullscreen"></svg-icon>
        </div>
        <div class="icon-wrapper">
          <svg-icon icon-class="layout"></svg-icon>
        </div>
        <div class="icon-wrapper">
          <svg-icon icon-class="translate"></svg-icon>
        </div>
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
.header-wrapper {
  height: 50px;
  line-height: 50px;
  display: flex;
  justify-content: space-between;
  &>div {
    display: flex;
  }
}
.icon-wrapper {
  cursor: pointer;
  .menu-icon {
    padding: 0 15px;
  }
  i {
    font-size: 20px;
  }
  &:hover {
    background-color: rgba(0,0,0,.025);
  }
}
</style>
