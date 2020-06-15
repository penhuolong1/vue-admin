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
      window.tinymce.init({
        selector: '#tinymicId',
        language: 'zh_CN',
        plugins: 'print preview searchreplace autolink directionality visualblocks visualchars fullscreen image link media template code codesample table charmap hr pagebreak nonbreaking anchor insertdatetime advlist lists wordcount imagetools textpattern help emoticons autosave bdmap indent2em autoresize lineheight formatpainter axupimgs'
      })
      console.log(123)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
