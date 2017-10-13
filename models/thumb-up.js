import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const ThumbUpSchema = new Schema({
  createBy: { type: Schema.Types.ObjectId, ref: 'Users' },
  postId: { type: Schema.Types.ObjectId, ref: 'Post'},
  date: { type: Date, default: Date.now }
})

export default mongoose.model('ThumbUp', ThumbUpSchema)