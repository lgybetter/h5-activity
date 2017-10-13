import BaseResource from './base-resource-service'
import mongoose from 'mongoose'
const Post = mongoose.model('Post')
const User = mongoose.model('Users')

class CollectionResource extends BaseResource {
  query ({ user }) {
    this.filters = this.filters || {}
    this.filters = Object.assign(this.filters, { createBy: user._id })
    this.listQuery = this.Model.find(this.filters).populate('postId createBy').select(this.selectField).populate({ path: 'tags comments' }).select(this.selectField).limit(this.limit).skip(this.skip).sort(this.sort)
  }

  async create ({ body, user }) {
    let data = body
    if (!data.postId) {
      throw new Error({ code: 400, msg: 'required postId', level: 'error' })       
    }
    let _post = await this.Model.findOne({ createBy: user._id, postId: data.postId })
    if (_post) {
      throw new Error({ code: 400, msg: 'have collected', level: 'error' })       
    }
    data.createBy = user._id
    let entity = new this.Model(data)
    try {
      await Post.findByIdAndUpdate(data.postId, { 
        '$inc': { starCount: 1 } 
      })
      await entity.save()
      return this._mongoIdToWebId(entity)
    } catch (err) {
      throw new Error({ code: 500, msg: err, level: 'error' }) 
    }
  }
  
  async findByIdAndRemove({ params, body, query, user }) {
    let postId = params.id || query.id
    if (!postId) {
      throw new Error({ code: 400, msg: 'required postId', level: 'error' })       
    }
    this.queryParams({ query, user })     
    try {
      await Post.findByIdAndUpdate(postId, { 
        '$inc': { starCount: -1 } 
      })
      let entity = await this.Model.findOneAndRemove({ postId: postId, createBy: user._id }).select(this.selectField) 
      if (!entity) {
        throw new Error('not found')
      }
      return this._mongoIdToWebId(entity) 
    } catch (err) {
      throw new Error({ code: 500, msg: err, level: 'error' }) 
    }
  }
}

export default CollectionResource