<template>
    <div class="tag-view-wrapper">
      <div>
        <tagItem
          v-for="(item, index) in tagViewList"
          :key="index"
          :item="item"
          :index="index"
          :active="tagViewActiveIndex === index"
          @contextmenu.prevent.native="showMenu($event, index)"
        ></tagItem>
      </div>
       <ul class="other-features-wrapper" :style="{left: left+'px',top: top+'px'}" v-show="isShow">
        <li @click="refresh">刷新</li>
        <li @click="closeOther">关闭其他</li>
        <li @click="closeAll">关闭所有</li>
      </ul>
    </div>
</template>

<script>
import tagItem from './tagItem'
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      isShow: false,
      left: 0,
      top: 0,
      index: ''
    }
  },
  props: {

  },
  components: {
    tagItem
  },
  created () {

  },
  watch: {
    getRoutes () {
    },
    isShow () {
      if (this.isShow) {
        document.body.addEventListener('click', this.closeMenu)
      } else {
        document.body.removeEventListener('click', this.closeMenu)
      }
    }
  },
  computed: {
    ...mapGetters([
      'tagViewList',
      'tagViewActiveIndex'
    ]),
    getRoutes () {
      if (this.$route.path.indexOf('redirect') === -1) { // 判断如果不是刷新重定向的路由则加入标签的列表里面
        this.$store.commit('ADD_TAG', this.$route)
      }
      return this.$route
    }
  },
  mounted () {
  },
  methods: {
    // 显示菜单功能
    showMenu (e, index) {
      this.index = index
      this.left = e.screenX
      this.top = e.screenY - 100
      this.isShow = true
    },
    // 关闭菜单
    closeMenu () {
      this.isShow = false
    },
    // 关闭所有
    closeAll () {
      this.$store.commit('DEL_ALL_LIST')
      this.$router.push('/')
    },
    // 关闭其他
    closeOther () {
      this.$router.push(this.tagViewList[this.index].path)
      this.$store.commit('DEL_ALL_LIST')
    },
    // 刷新
    refresh () {
      this.$store.commit('SET_INDEX', this.index)
      this.$router.push(`/redirect${this.tagViewList[this.index].path}`)
    }
  }
}
</script>

<style scoped lang="scss">
.tag-view-wrapper {
  height: 34px;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.12), 0 0 3px 0 rgba(0,0,0,.04);
}
.other-features-wrapper {
  margin: 0;
  background: #fff;
  z-index: 3000;
  position: absolute;
  list-style-type: none;
  padding: 5px 0;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 400;
  color: #333;
  -webkit-box-shadow: 2px 2px 3px 0 rgba(0,0,0,.3);
  box-shadow: 2px 2px 3px 0 rgba(0,0,0,.3);
  li {
    padding: 0 12px;
    line-height: 20px;
    line-height: 20px;
    cursor: pointer;
    &:hover {
      background-color: #eee;
    }
  }
}
</style>
