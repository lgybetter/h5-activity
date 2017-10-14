<template>
  <div>
    微信测试
    <a v-show="showToAuth" :href="authUrl" style="font-size: 20px;">跳转授权</a>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      showToAuth: false,
      authUrl: `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxed73c69d3bdf1dce&redirect_uri=${encodeURIComponent('http://119.29.193.240/#/')}&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect`
    }
  },
  async mounted () {
    const wechatCode = this.$route.query.code
    console.log(wechatCode)
    if (!wechatCode) {
      this.showToAuth = true
    } else {
      await axios.request({
        method: 'post',
        url: 'http://119.29.193.240/api/wechat/exchangeToken',
        data: {
          code: wechatCode
        }
      })
    }
  }
}
</script>