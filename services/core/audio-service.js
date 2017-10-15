import { wechatAPI } from '../../services/wechat/wechat-api'
import fs from 'fs'

const changeMedia = (buffer, { path = '../../tempFiles', name = '', type = '.amr' }) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(`${path}/${name}/${type}`, buffer, (err) => {
      if(err) {
        return reject(err)
      }
      return resolve(`${path}/${name}/${type}`)
    })
  })
}

const getMedia = mediaId => {
  return new Promise((resolve, reject) => {
    wechatAPI.getMedia(mediaId, async (err, result, res) => {
      if(err) {
        console.log(err)
        return reject(err)
      }
      console.log(result, 'change media')
      try {
        const file = await changeMedia(result, { name: mediaId }) 
        console.log(file, 'changeFile success')
      } catch (error) {
        console.log(error)
      }
      return resolve({
        data: result,
        res
      })
    })
  })
}
export {
  getMedia,
  changeMedia
}