import { wechatAPI } from '../../services/wechat/wechat-api'

const getMedia = mediaId => {
  return new Promise((resolve, reject) => {
    wechatAPI.getMedia(mediaId, (err, result, res) => {
      if(err) {
        return reject(err)
      }
      console.log(res)
      return Promise.resolve(res)
    })
  })
}

export {
  getMedia
}