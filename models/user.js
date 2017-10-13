import mongoose from 'mongoose'
const Schema = mongoose.Schema

const UsersSchema = new Schema({
  name: { type: String, unique: true, required: true },
  phone: { type: String, unique: true },
  introduction: { type: String },
  job: { type: String },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  icon: { type: String, default: 'http://os32fgzvj.bkt.clouddn.com/012489fbdca023b5de1f5ddb41e15f61-head-picture.jpg'},
  github: { type: String, default: 'https://github.com' },
  date: { type: Date, default: Date.now() }
})

export default mongoose.model('Users', UsersSchema)