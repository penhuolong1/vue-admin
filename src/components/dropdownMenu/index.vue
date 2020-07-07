<template>
  <div :class="{'active': isActive}" class="dropdown-menu-wrapper">
    <ul >
      <li @click="clickTitle">系列文章</li>
      <li v-for="(item, index) in articleList" :key="index">{{ item.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {

  },
  props: {
    articleList: {
      type: Array,
      default: null
    }
  },
  data() {
    return {
      isActive: false
    }
  },
  created() {

  },
  mounted() {

  },
  methods: {
    // 点击头部
    clickTitle() {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style scoped lang="scss">
.dropdown-menu-wrapper {
  display: flex;
  justify-content: center;
  height: 400px;
  ul {
    height: auto;
    position: relative;
    width: 250px;
    li {
      position: absolute;
      text-align: center;
      line-height: 60px;
      width: 250px;
      background-color: #e0e0e0;
      cursor: pointer;
      width: 250px;
      transition: transform 0.28s ease;
      @for $i from 1 through 6 {
        &:nth-of-type(#{$i}) {
          transition-delay: $i*0.1;
        }
      }
      &:hover {
        background-color: #303133;
        color: white;
      }
      &:first-child {
        background-color: #303133;
        color: white;
        z-index: 2;
      }
    }
  }
  &.active {
    ul {
      li {
         @for $i from 1 through 6 {
          &:nth-of-type(#{$i}) {
            transition-delay: (6 - $i)*0.1;
            transform: translate3d(0, ($i - 1)*60px, 0);
          }
        }
      }
    }
  }
}
</style>
