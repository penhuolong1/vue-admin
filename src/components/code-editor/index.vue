<template>
  <div class="code-editor-wrapper">
    <textarea ref="editor"></textarea>
    <el-select v-model="mode" class="mode-select" placeholder="请选择" @change="changeMode">
      <el-option
        v-for="item in modes"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
  </div>
</template>

<script>
import {modes} from './modes'
import codemirror from 'codemirror'
// 核心样式
import 'codemirror/lib/codemirror.css'
// 引入主题后还需要在 options 中指定主题才会生效
import 'codemirror/theme/cobalt.css'

// 需要引入具体的语法高亮库才会有对应的语法高亮效果
// codemirror 官方其实支持通过 /addon/mode/loadmode.js 和 /mode/meta.js 来实现动态加载对应语法高亮库
// 但 vue 貌似没有无法在实例初始化后再动态加载对应 JS ，所以此处才把对应的 JS 提前引入
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/mode/css/css.js'
import 'codemirror/mode/xml/xml.js'
import 'codemirror/mode/clike/clike.js'
import 'codemirror/mode/markdown/markdown.js'
import 'codemirror/mode/python/python.js'
import 'codemirror/mode/r/r.js'
import 'codemirror/mode/shell/shell.js'
import 'codemirror/mode/sql/sql.js'
import 'codemirror/mode/swift/swift.js'
import 'codemirror/mode/vue/vue.js'
export default {
  data () {
    return {
      code: '',
      modes: modes,
      mode: 'application/json'
    }
  },
  props: {
    content: null
  },
  components: {

  },
  created () {

  },
  mounted () {
    this.init()
  },
  methods: {
    // 初始化codemirror
    init () {
      this.code = codemirror.fromTextArea(this.$refs.editor, {
        // 缩进格式
        tabSize: 2,
        // 主题，对应主题库 JS 需要提前引入
        theme: 'cobalt',
        // 显示行号
        lineNumbers: true,
        line: true,
        mode: this.mode
      })
      if (this.content) {
        this.code.setValue(JSON.stringify(this.content, null, 2))
      }
      this.code.on('change', () => {
        this.$emit('update:content', this.code.getValue())
      })
    },
    // 选择模式
    changeMode (val) {
      this.code.setOption('mode', val)
    }
  }
}
</script>

<style scoped lang="scss">
.code-editor-wrapper {
  position: relative;
  .mode-select {
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 10;
  }
}
</style>
