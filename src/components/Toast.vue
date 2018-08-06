<template>
  <div class="page-toast">
    <h1 class="page-title">Toast</h1>
    <div class="page-toast-wrapper">
      <mt-button @click.native="openToast" size="large">点击弹出 Toast</mt-button>
      <mt-button @click.native="openToastWithIcon" size="large">点击弹出带有 icon 的 Toast</mt-button>
      <mt-button @click.native="openBottomToast" size="large">自定义 Toast 位置</mt-button>
    </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  name: 'Toast',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    openToast () {
      Toast('提示信息')
    },
    openToastWithIcon () {
      Toast({
        message: '操作成功',
        iconClass: 'mintui mintui-success'
      })
    },
    openBottomToast () {
      Toast({
        message: '提示信息',
        position: 'bottom'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
button {
  margin-bottom: 20px;
}
.page {
    &-toast {
      &-wrapper {
        padding: 0 20px;
        position: absolute;
        width: 100%;
      }
    }
  }
</style>
