<template>
  <div class="content-wrapper split-span-wrapper">
    <aside>
      splitspan
    </aside>
    <split-pane :min-percent="20" :max-percent="40" split="vertical" @resize="resize">
      <template slot="paneL">
        <div class="left"/>
      </template>
      <template slot="paneR">
        <split-pane :min-percent="20" :max-percent="40" split="horizontal">
          <template slot="paneL">
            <div class="top"/>
          </template>
          <template slot="paneR" :min-percent="20" :max-percent="40">
            <div class="bottom"/>
          </template>
        </split-pane>
      </template>
    </split-pane>
  </div>
</template>

<script>
import splitPane from 'vue-splitpane'
export default {
  components: {
    splitPane
  },
  props: {

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
    resize() {
      console.log('resize')
    }
  }
}
</script>

<style scoped lang="scss">
.split-span-wrapper {
  height: 100vh;
  .left {
    height: 100%;
    background-color: #F38181;
  }
  .top {
    background-color: #FCE38A;
    width: 100%;
    height: 100%;
  }

  .bottom {
    width: 100%;
    background-color: #95E1D3;
    height: 100%;
  }
}
</style>
