<template>
  <div class="img-hover-wrapper">
    <div class="text-wrapper">
      <span>{{ title }}</span>
    </div>
    <div class="img-wrapper">
      <img :src="url">
    </div>
  </div>
</template>

<script>
export default {
  components: {

  },
  props: {
    url: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
    }
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
.img-hover-wrapper {
  position: relative;
  width: 100px;
  height: 100px;
  z-index: 1;
  &:hover {
    .img-wrapper {
      transform: rotate(-90deg);;
    }
  }
  .text-wrapper {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    box-shadow: inset 0 0 0 5px rgba(0,0,0,.05);
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      padding: 20px;
      text-align: center;
    }
  }
  .img-wrapper {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: absolute;
    top: 0px;
    left: 0px;
    transform-origin: 100% 50%;
    transition: all 0.4s;
    z-index: 10;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
}
</style>
