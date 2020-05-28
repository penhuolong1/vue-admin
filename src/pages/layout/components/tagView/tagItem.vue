<template>
    <div class="tag-item-wrapper" @click="toPath" :class="{'active':active}">
      {{item.name}}
      <span class="el-icon-close" @click.prevent.stop="closeSelectedTag()" />
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data () {
    return {

    }
  },
  props: {
    item: {
      type: Object
    },
    active: {
      type: Boolean
    },
    index: {
      type: Number
    }
  },
  components: {

  },
  created () {
  },
  mounted () {

  },
  computed: {
    ...mapGetters([
      'tagViewList'
    ])
  },
  methods: {
    // 删除标签
    closeSelectedTag () {
      if (this.tagViewList.length === 1) { // 假如只有一个标签删除后跳转到首页
        this.$router.push('/')
      } else {
        if (this.active && this.index === this.tagViewList.length - 1) { // 如果删除的是选中的标签并且这个标签为最后一个标签则跳转到倒数第二个标签
          this.$router.push(this.tagViewList[this.tagViewList.length - 2].path)
        }
      }
      if (this.active && this.index !== this.tagViewList.length - 1) { // 如果这个标签为选中的标签并且这个标签不是最后一个标签则路由跳转到最后一个标签
        this.$router.push(this.tagViewList[this.tagViewList.length - 1].path)
      }
      this.$store.commit('DEL_TAG', this.index)
      // this.$router.push(this.tagViewList(this.index - 1).path)
    },
    // 跳转到该标签的位置
    toPath () {
      this.$router.push(this.item.path)
      this.$store.commit('SET_INDEX', this.index)
    }
  }
}
</script>

<style scoped lang="scss">
.tag-item-wrapper {
  display: inline-block;
  height: 26px;
  line-height: 26px;
  border: 1px solid #d8dce5;
  margin-left: 5px;
  margin-top: 4px;
  font-size: 14px;
  color: #495060;
  padding: 0 5px;
  border-radius: 3px;
  cursor: pointer;
  &.active {
    background-color: #42b983;
    border-color: #42b983;
    color: white;
  }
}
</style>
