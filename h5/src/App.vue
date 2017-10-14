<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'app',
  async created () {
    const code = localStorage.getItem('code')
    const wechatCode = this.$route.query.code
    if (!code && !wechatCode) {
      window.open(`https://open.weixin.qq.com/connect/qrconnect?appid=wx8bb878c38f43a3ef&redirect_uri=${encodeURIComponent('http://119.29.193.240/#/')}&response_type=code&scope=snsapi_login&state=state#wechat_redirect`)
    } else {
      if (!code && wechatCode) {
        localStorage.setItem('code', wechatCode)
      }
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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
