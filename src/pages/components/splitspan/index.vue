<template>
  <div class="content-wrapper split-span-wrapper">
    <aside>
      splitspan
    </aside>
    <split-pane @resize="resize" :min-percent='20' :max-percent="40" split="vertical">
      <template slot="paneL">
        <div class="left"></div>
      </template>
      <template slot="paneR">
        <split-pane split="horizontal" :min-percent='20' :max-percent="40">
          <template slot="paneL">
            <div class="top"></div>
          </template>
          <template slot="paneR" :min-percent='20' :max-percent="40">
            <div class="bottom"></div>
          </template>
        </split-pane>
      </template>
    </split-pane>
  </div>
</template>

<script>
import splitPane from 'vue-splitpane'
export default {
  data () {
    return {

    }
  },
  props: {

  },
  components: {
    splitPane
  },
  created () {

  },
  mounted () {

  },
  methods: {
    resize () {
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
