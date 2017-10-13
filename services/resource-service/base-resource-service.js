'use strict' 
import _ from 'lodash' 
import mongoose from 'mongoose' 

class BaseResource {

  constructor(model) {
    this.Model = mongoose.model(model)
    this.listQuery = null 
  }

  queryParams({ query, user }) {
    //当前的所在页面
    this.page = query._page
    //每一页需要多少条数据
    this.perPage = query._perPage 
    //按照哪个字段排序
    this.sortField = query._sortField 
    //选择具体所需要的字段
    this.selectField = query._select
    //排序的方式: asc(上升的) 或者 desc(下降的)
    this.sortDir = query._sortDir 
    //需要过滤的条件
    this.filters = query._filters 
    this.skip = parseInt((this.page - 1) * this.perPage) 
    this.limit = parseInt(this.perPage) 
    if (this.selectField) {
      this.selectField = this.selectField.replace(/,/g, ' ') 
    }
    this.sort = {} 
    try {
      this.sort[this.sortField] = this.sortDir.toLowerCase() 
    } catch (err) {}
    try {
      if (this.filters) {
        if (typeof query._filters !== 'object') {
          this.filters = JSON.parse(this.filters) 
        }
        Object.keys(this.filters).map((k) => {
          if (isNaN(this.filters[k]) && this.filters[k].toString().length !== 24 && typeof this.filters[k] !== 'object') {
            this.filters[k] = new RegExp(this.filters[k], 'ig') //模糊查询参数
          } else if (k === 'name' && !isNaN(this.filters[k])) {
            // 修改对搜索数字的支持
            this.filters[k] = new RegExp(this.filters[k].toString()) //模糊查询参数
          }
        })
      }
    } catch (err) {
      this.filters = {}
    }
  }

  query() {
    this.listQuery = this.Model.find(this.filters).select(this.selectField).limit(this.limit).skip(this.skip).sort(this.sort) 
  }

  async execQuery({ query, user }) {
    this.queryParams({ query, user })
    this.query({ query, user }) 
    try {
      let result = await Promise.all([this.Model.count(this.filters), this.listQuery]) 
      return {
        count: result[0],
        objects: result[1].map(this._mongoIdToWebId)
      }
    } catch (err) {
      throw new Error({ code: 500, msg: err, level: 'error', expect: [] }) 
    }
  }

  // 创建实体的实例
  async create({ body, user }) {
    let data = body 
    let entity = new this.Model(data)
    try {
      await entity.save() 
      return this._mongoIdToWebId(entity) 
    } catch (err) {
      throw new Error({ code: 500, msg: err, level: 'error' }) 
    }
  }

  // 查找实例
  async findById({ params, query, user }) {
    this.queryParams({ query, user }) 
    let id = params.id 
    try {
      let entity = await this.Model.findById(id).select(this.selectField) 
      if (!entity) {
        throw new Error('not found') 
      }
      return this._mongoIdToWebId(entity) 
    } catch (err) {
      throw new Error({ code: 500, msg: err, level: 'error' }) 
    }
  }

  // 更新实例
  async findByIdAndUpdate({ params, body, query, user }) {
    let id = params.id 
    let data = body
    this.queryParams({ query, user })     
    try {
      let entity = await this.Model.findByIdAndUpdate(id, data).select(this.selectField) 
      if (!entity) {
        throw new Error('not found')
      }
      return this._mongoIdToWebId(entity)
    } catch (err) {
      throw new Error({ code: 500, msg: err, level: 'error' }) 
    }
  }

  // 删除实例
  async findByIdAndRemove({ params, query, user, body }) {
    let id = params.id 
    this.queryParams({ query, user })     
    try {
      let entity = await this.Model.findByIdAndRemove(id).select(this.selectField) 
      if (!entity) {
        throw new Error('not found') 
      }
      return this._mongoIdToWebId(entity) 
    } catch (err) {
      throw new Error({ code: 500, msg: err, level: 'error' }) 
    }
  }

  // 将mongo对象转化为js对象
  _mongoIdToWebId (entity) {
    let o = entity.toObject() 
    o.id = o._id.toString() 
    delete o._id 
    return o 
  }

  //字段筛选
  _selectSomeField (data, selectField) {
    return _.map(data, item => {
      return _.pick(item, selectField)
    }) 
  }
}

export default BaseResource

