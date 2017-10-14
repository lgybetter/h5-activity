<template>
  <div style="height: 100%;">
    微信测试
    <a v-show="showToAuth" :href="authUrl" style="font-size: 20px;">跳转授权</a>
    <div class="btn" @click="startRecord">开始录音</div>
    <div class="btn" @click="stopRecord">停止录音</div>
    <div class="btn" @click="playVoice">播放录音</div>
    <div class="btn" @click="pauseVoice">暂停播放</div>
    <div class="btn" @click="stopVoice">停止播放</div>
  </div>
</template>

<script>
import axios from 'axios'
import config from '../config'
import wx from 'weixin-js-sdk'

export default {
  data () {
    return {
      showToAuth: false,
      authUrl: `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${config.appId}&redirect_uri=${encodeURIComponent(config.redirectUrl)}&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect`,
      localId: ''
    }
  },
  methods: {
    startRecord () {
      console.log('start')
      wx.startRecord()
    },
    stopRecord () {
      wx.stopRecord({
        success: res => {
          this.localId = res.localId
        }
      })
    },
    playVoice () {
      wx.playVoice({
        localId: this.localId // 需要播放的音频的本地ID，由stopRecord接口获得
      })
    },
    pauseVoice () {
      wx.pauseVoice({
        localId: this.localId // 需要暂停的音频的本地ID，由stopRecord接口获得
      })
    },
    stopVoice () {
      wx.stopVoice({
        localId: this.localId // 需要停止的音频的本地ID，由stopRecord接口获得
      })
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
        url: `${config.baseUrl}/api/wechat/exchangeToken`,
        data: {
          code: wechatCode
        }
      })
    }
  }
}
</script>