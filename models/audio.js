/**
 * 音频映射
 */
import mongoose from 'mongoose'
const Schema = mongoose.Schema

const AudioSchema = new Schema({
  url: String,
  name: String
})

export default mongoose.model('Audio', UserSchema)
