import { getMedia } from '../services/core/audio-service'

const saveMedia = async (req, res, next) => {
  const media = req.body.mediaId
  try {
    const res = await getMedia(mediaId)
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