<template>
  <div>
    <el-input :value="inputValue" @input="input"/>
    <div>{{ inputValue }}</div>
  </div>
</template>

<script>
export default {
  components: {

  },
  props: {
    inputValue: {
      type: String,
      default: ''
    }
  },
  data() {
    return {

    }
  },
  created() {

  },
  mounted() {

  },
  methods: {
    input(e) {
      this.$emit('update:inputValue', e)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
