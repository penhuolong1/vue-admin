<template>
    <div class="tag-view-wrapper">
      <div>
        <tagItem
          v-for="(item, index) in tagViewList"
          :key="index"
          :item="item"
          :index="index"
          :active="tagViewActiveIndex === index"
        ></tagItem>
      </div>
    </div>
</template>

<script>
import tagItem from './tagItem'
import {mapGetters} from 'vuex'
export default {
  data () {
    return {

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
    }
  },
  computed: {
    ...mapGetters([
      'tagViewList',
      'tagViewActiveIndex'
    ]),
    getRoutes () {
      this.$store.commit('ADD_TAG', this.$route)
      return this.$route
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
.tag-view-wrapper {
  height: 34px;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.12), 0 0 3px 0 rgba(0,0,0,.04);
}
</style>
