<template>
  <div>
    <comment :is-comment.sync="article.isComment"/>
    <div>{{ article.isComment }}</div>
  </div>
</template>

<script>
import comment from './Dropdown/comment'
export default {
  components: {
    comment
  },
  props: {

  },
  data() {
    return {
      article: {
        isComment: '1'
      }
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
