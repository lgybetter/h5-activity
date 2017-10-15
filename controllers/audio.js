import { getMedia, changeMedia, changeAudioFormat } from '../services/core/audio-service'

const saveMedia = async (req, res, next) => {
  // 当前的音频
  const mediaId = req.body.mediaId
  // 之前已经录制过的音频(如果有则合并音频)
  const preMedia = req.body.preMediaId
  try {
    // 获取微信的音频
    const mp3 = await getMedia(mediaId)
    const path = mp3.path
    const name = mp3.name
    if (preMedia) {
      // 需要合并音频
    }
    res.json({
      code: 200,
      data: {
        res
      }
    })
  } catch (error) {
    res.json({
      code: 400,
      msg: error.message
    })    
  }
}

export {
  saveMedia
}