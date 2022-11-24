<template>
  <div class="ali-pay">
    <div v-html="payInfo.codeUrl" ref="pay"></div>
  </div>
</template>

<script>
import { Loading } from 'element-ui';
export default {
  name: "index",
  components: {},
  data() {
    return {
      payInfo: {},
    }
  },
  mounted() {
    let loadingInstance = Loading.service({ fullscreen: true , text: '支付页面跳转中'});

    this.payInfo = this.$route.query
    this.$nextTick( () => {
      this.$refs.pay.children[0].submit()
    })
  }
}
</script>

<style scoped>
  .ali-pay {
    margin-top: 100px
  }
</style>
