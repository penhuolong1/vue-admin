<template>
    <div class="app-wrapper">
      <div class="left-wrapper">
        <sideBar></sideBar>
      </div>
      <div class="right-wrapper">
        <div class="nav-wrapper">
          <navBar />
        </div>
        <div class="main-wrapper">
          <appMain></appMain>
        </div>
      </div>
    </div>
</template>

<script>
import sideBar from './components/sideBar/index'
import appMain from './components/appMain'
import navBar from './components/navBar'
export default {
  data () {
    return {

    }
  },
  props: {

  },
  components: {
    sideBar,
    appMain,
    navBar
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
@import '~@/assets/styles/variables.scss';
.app-wrapper {
  &>.left-wrapper {
    position: fixed;
    top: 0px;
    bottom: 0px;
    left: 0px;
    width: 210px;
    background-color: $blue;
  }
  &>.right-wrapper {
    margin-left: 210px;
  }
}
</style>
