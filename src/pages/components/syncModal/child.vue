<template>
  <div>
    <el-input :value="inputValue" @input="input"></el-input>
    <div>{{inputValue}}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: {
    inputValue: {
      type: String
    }
  },
  components: {

  },
  created () {

  },
  mounted () {

  },
  methods: {
    input (e) {
      this.$emit('update:inputValue', e)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
