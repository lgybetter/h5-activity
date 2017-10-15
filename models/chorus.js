/**
 * 合成音频
 */
import mongoose from 'mongoose'
const Schema = mongoose.Schema

const ChorusSchema = new Schema({
  url: String,
  name: String,
  createBy: { type: Schema.Types.ObjectId, ref: 'Users' },
  users: [{
    type: Schema.Types.ObjectId, ref: 'Users'
  }],
  audioId: [{
    type: Schema.Types.ObjectId, ref: 'Audio'
  }],
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now }
})

export default mongoose.model('Chorus', ChorusSchema)
