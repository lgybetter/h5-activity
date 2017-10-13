import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: { type: String, required: true },
  subTitle: { type: String, required: true },
  createBy: { type: Schema.Types.ObjectId, ref: 'Users' },
  date: { type: Date, default: Date.now },
  content: { type: String, required: true },
  open: { type: Boolean, required: true },
  summary: { type: String },
  tags: [{ type: Schema.Types.ObjectId, ref: 'Tags' }],
  commentCount: { type: Number, default: 0},
  starCount: { type: Number, default: 0 },
  shareCount: { type: Number, default: 0 },
  viewCount: { type: Number, default: 0},
  thumbUpCount: { type: Number, default: 0 },
  icon: { type: String, default: 'http://os32fgzvj.bkt.clouddn.com/012489fbdca023b5de1f5ddb41e15f61-head-picture.jpg'}
})

export default mongoose.model('Post', PostSchema)