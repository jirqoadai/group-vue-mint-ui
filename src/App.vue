<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
.page-demo {
    padding-bottom: 50px;
    .indexicon {
      font-size: 22px;
      color: #26a2ff;
      display: inline-block;
      width: 30px;
      vertical-align: middle;
      &.icon-swipe {
        font-size: 26px;
      }
      &.icon-checklist {
        font-size: 18px;
      }
    }
  }
  @component-namespace page {
    @component title {
      font-size: 20px;
      margin: 20px auto;
      text-align: center;
      display: block;
      line-height: 1;
    }
    @component part {
      margin-bottom: 15px;
    }
  }
</style>
