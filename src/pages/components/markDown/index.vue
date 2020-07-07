<template>
  <div class="content-wrapper">
    <aside>
      通过tui-editor来实现富文本编辑
    </aside>
    <markdown :content.sync="content"/>
    <div v-html="content"/>
  </div>
</template>

<script>
import markdown from '@/components/markdown'
export default {
  components: {
    markdown
  },
  props: {},
  data() {
    return {
      content: '内容1'
    }
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style scoped lang="scss">
</style>
