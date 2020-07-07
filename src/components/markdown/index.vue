<template>
  <div/>
</template>

<script>
import Editor from 'tui-editor'
import 'tui-editor/dist/tui-editor.css' // editor's ui
import 'tui-editor/dist/tui-editor-contents.css' // editor's content
import 'codemirror/lib/codemirror.css' // codemirror
import 'highlight.js/styles/github.css'
export default {
  components: {},
  props: {
    content: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      instance: null
    }
  },
  created() {},
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.instance = new Editor({
        el: this.$el,
        initialEditType: 'markdown',
        previewStyle: 'vertical',
        height: '300px',
        initialValue: this.content
      })
      this.instance.on('change', () => {
        this.$emit('update:content', this.instance.getHtml())
      })
    }
  }
}
</script>

<style scoped lang="scss">
/deep/ .tui-editor .te-preview-style-vertical .te-preview {
  width: auto!important;
}
</style>
