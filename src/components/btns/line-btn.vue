<template>
  <div
    :style="{'background': bcColor, 'color': fontColor, '--bc': color}"

    class="line-btns-wrapper"
    @mouseover="mouseOver"
    @mouseleave="mouseLeave">
    {{ content }}
  </div>
</template>

<script>
export default {
  components: {

  },
  props: {
    content: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      bcColor: null,
      fontColor: '#fff'
    }
  },
  created() {
    this.bcColor = this.color
  },
  mounted() {
  },
  methods: {
    mouseOver() {
      this.fontColor = this.color
      this.bcColor = '#fff'
    },
    mouseLeave() {
      this.fontColor = '#fff'
      this.bcColor = this.color
    }
  }
}
</script>

<style scoped lang="scss">
.line-btns-wrapper {
  padding: 14px 40px;
  border-radius: 5px;
  color: #fff;
  transition: all 0.6s;
  cursor: pointer;
  position: relative;
  display: inline-block;
  &:after, &:before{
    content: '';
    background-color: var(--bc);
    height: 2px;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 0;
    transition: all 0.6s;
  }
  &::after {
    content: '';
    top: inherit;
    right: 0px;
    bottom: 0px;
    left: inherit;
  }
  &:hover {
    &:before,&:after {
      width: 100%;
    }
  }
}
</style>
