import { wechatAPI } from '../../services/wechat/wechat-api'

const getMedia = mediaId => {
  return new Promise((resolve, reject) => {
    wechatAPI.getMedia(mediaId, (err, result, res) => {
      if(err) {
        console.log(err)
        return reject(err)
      }
      console.log(res, 'media')
      return resolve({
        data,
        res
      })
    })
  })
}

export {
  getMedia
}