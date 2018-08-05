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

<style lang="scss">
@import 'reset.scss';
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
  .page-title{
      font-size: 24px;
      margin: 40px 8px;
      text-align: left;
      display: block;
      line-height: 1;
  }
  .page-part {
      margin-bottom: 15px;
  }
</style>
