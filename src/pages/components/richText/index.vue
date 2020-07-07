<template>
  <div class="content-wrapper">
    <aside>
      通过tinymce来实现富文本编辑
    </aside>
    <tinymceEditor :content.sync="value"/>
    <div v-html="value"/>
  </div>
</template>

<script>
import tinymceEditor from '@/components/tinymceEditor'
export default {
  components: {
    tinymceEditor
  },
  props: {

  },
  data() {
    return {
      value: `<h1 style="text-align: center;">Welcome to the TinyMCE demo!</h1><p style="text-align: center; font-size: 15px;"><img title="TinyMCE Logo" src="//www.tinymce.com/images/glyph-tinymce@2x.png" alt="TinyMCE Logo" width="110" height="97" /><ul>
        <li>Our <a href="//www.tinymce.com/docs/">documentation</a> is a great resource for learning how to configure TinyMCE.</li><li>Have a specific question? Visit the <a href="https://community.tinymce.com/forum/">Community Forum</a>.</li><li>We also offer enterprise grade support as part of <a href="https://tinymce.com/pricing">TinyMCE premium subscriptions</a>.</li>
      </ul>`
    }
  },
  created() {

  },
  mounted() {

  },
  methods: {

  }
}
</script>

<style scoped lang="scss">

</style>
