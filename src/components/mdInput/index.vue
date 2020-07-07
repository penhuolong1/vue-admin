<template>
  <div :class="mdClass" class="md-input-wrapper">
    <input
      :value="value"
      type="text"
      @input="handleModelInput"
      @focus="handleMdFocus"
      @blur="handleMdBlur">
    <label class="md-label">{{ label }}</label>
    <p class="md-bar"/>
  </div>
</template>

<script>
export default {
  components: {

  },
  props: {
    label: {
      type: String,
      default: null
    },
    value: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      isFocus: false,
      isValue: false
    }
  },
  computed: {
    mdClass() {
      return {
        'md-active': this.isFocus || this.isValue
      }
    }
  },
  watch: {
    value() {
      this.init()
    }
  },
  created() {
    this.init()
  },
  mounted() {

  },
  methods: {
    handleModelInput(e) {
      if (e.target.value === '') {
        this.isValue = false
      }
      this.$emit('update:value', e.target.value)
    },
    // 初始化数据
    init() {
      if (this.value) {
        this.isValue = true
      }
    },
    // 获取焦点触发
    handleMdFocus() {
      this.isFocus = true
    },
    // 失去焦点触发
    handleMdBlur() {
      this.isFocus = false
    }
  }
}
</script>

<style scoped lang="scss">
@import '~@/assets/styles/variables.scss';
.md-input-wrapper {
  line-height: 30px;
  position: relative;
  margin-top: 20px;
  &.md-active {
    .md-label {
      color: $themeColor;
      left: 0px;
      top: -20px;
    }
    .md-bar {
      width: 100%;
    }
  }
  input {
    width: 100%;
    line-height: 30px;
    border: none;
    border-bottom: 1px solid #e0e0e0;
    position: relative;
    display: block;
    &:focus {
      outline: none;
      border: none;
      border-bottom: 1px solid #e0e0e0;
    }
  }
  .md-label {
    position: absolute;
    top: 0px;
    left: 20px;
    color: #9e9e9e;
    transition: all 0.4s;
  }
  .md-bar {
    position: absolute;
    bottom: 0px;
    width: 0px;
    left: 0;
    height: 2px;
    background-color: $themeColor;
    transition: all 0.4s;
  }
}
</style>
