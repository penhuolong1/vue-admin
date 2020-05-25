<template>
    <div class="app-wrapper">
      <div class="left-wrapper"></div>
      <div class="right-wrapper">
        <div class="nav-wrapper"></div>
        <div class="hmain-wrapper"></div>
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
}
</style>
