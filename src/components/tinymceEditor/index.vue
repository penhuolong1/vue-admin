<template>
  <div>
    <div class="editor" id="tinymicId"></div>
  </div>
</template>

<script>
import load from '@/utils/dynamicLoadScript'
const tinymceCDN = 'https://cdn.jsdelivr.net/npm/tinymce-all-in-one@4.9.3/tinymce.min.js'
export default {
  data () {
    return {

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
    init () {
      load(tinymceCDN, err => {
        if (err) {
          console.log(err)
          return
        }
        this.initTinymce()
      })
    },
    initTinymce () {
      let that = this
      window.tinymce.init({
        selector: '#tinymicId',
        language: 'zh_CN',
        plugins: 'print preview searchreplace autolink directionality visualblocks visualchars fullscreen image link media template code codesample table charmap hr pagebreak nonbreaking anchor insertdatetime advlist lists wordcount imagetools textpattern help emoticons autosave bdmap indent2em autoresize lineheight formatpainter axupimgs',
        init_instance_callback: editor => {
          if (that.content) {
            editor.setContent(that.content)
          }
          editor.on('NodeChange Change KeyUp SetContent', () => {
            console.log(editor.getContent())
            that.$emit('update:content', editor.getContent())
          })
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">

</style>
