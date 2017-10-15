import { wechatAPI } from '../../services/wechat/wechat-api'
import fs from 'fs'
import Path from 'path'
import ffmpeg from 'fluent-ffmpeg'
import cp from 'child_process'

const changeAudioFormat = ({ name, type = '.amr',  path = Path.resolve(__dirname, '../../tempFiles'), output = Path.resolve(__dirname, '../../tempFiles') }) => {
  return new Promise((resolve, reject) => {
    const command = ffmpeg(`${path}/${name}${type}`)
      .on('end', () => {
        console.log('file has been converted succesfully');
      })
      .on('error', err => {
        return reject(err)
      })
      .save(`${output}/${name}.mp3`);
    return resolve({
      path: output,
      type: '.mp3',
      name
    })
  })
}

const mergeAudio = (audio1, audio2, output = '') => {
  return new Promise((resolve, reject) => {
    cp.exec(`ffmpeg -i "concat:${audio1}|${audio2}" -acodec copy ${output}`, (err) => {
      if(err) {
        return reject(err)
      }
      return resolve(output)
    })
  })
}

const changeMedia = (buffer, { path = Path.resolve(__dirname, '../../tempFiles'), name = '', type = '.amr' }) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(`${path}/${name}${type}`, buffer, (err) => {
      if(err) {
        return reject(err)
      }
      return resolve({
        path,
        name,
        type
      })
    })
  })
}

const getMedia = mediaId => {
  return new Promise((resolve, reject) => {
    wechatAPI.getMedia(mediaId, async (err, result, res) => {
      if(err) {
        return reject(err)
      }
      const file = await changeMedia(result, { name: mediaId }) 
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
