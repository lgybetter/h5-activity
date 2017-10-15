/**
 * 合成音频
 */
import mongoose from 'mongoose'
const Schema = mongoose.Schema

const ChorusSchema = new Schema({
  url: String,
  name: String,
  createBy: { type: Schema.Types.ObjectId, ref: 'Users' },
  status: Number, // 0: 重新开始录制歌曲，当前记录只呈现　1: 未录制新的歌曲
  users: [{
    type: Schema.Types.ObjectId, ref: 'Users'
  }],
  audioId: [{
    type: Schema.Types.ObjectId, ref: 'Audio'
  }],
  createAt: { type: Date, default: Date.now }
})

export default mongoose.model('Chorus', ChorusSchema)
