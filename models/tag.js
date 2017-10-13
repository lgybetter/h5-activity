import mongoose from 'mongoose'
const Schema = mongoose.Schema

const TagsSchema = new Schema({
  name: { type: String, required: true }
})

export default mongoose.model('Tags', TagsSchema)