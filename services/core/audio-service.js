import { wechatAPI } from '../../services/wechat/wechat-api'
import fs from 'fs'
import Path from 'path'

const changeMedia = (buffer, { path = Path.resolve(__dirname, '../../tempFiles'), name = '', type = '.amr' }) => {
  console.log(path)
  return new Promise((resolve, reject) => {
    fs.writeFile(`${path}/${name}${type}`, buffer, (err) => {
      if(err) {
        return reject(err)
      }
      return resolve(`${name}${type}`)
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
