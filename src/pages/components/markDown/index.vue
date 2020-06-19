<template>
  <div class="content-wrapper">
    <aside>
      通过tui-editor来实现富文本编辑
    </aside>
    <markdown :content.sync="content"></markdown>
    <div v-html="content"></div>
  </div>
</template>

<script>
import markdown from '@/components/markdown'
export default {
  data () {
    return {
      content: '内容1'
    }
  },
  props: {},
  components: {
    markdown
  },
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="scss">
</style>
