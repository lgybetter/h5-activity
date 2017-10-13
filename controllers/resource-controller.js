import ResourceService from '../services/resource-service'

class ResourceCtrl {
  constructor (resource, model, methods) {
    this.router = require('express').Router()
    this.resource = resource
    if (!ResourceService[`${model}Resource`]) {
      this.resourceService = new ResourceService.BaseResource(model)
    } else {
      this.resourceService = new ResourceService[`${model}Resource`](model)
    }
    if (methods) {
      if (!Array.isArray(methods)) {
        throw new Error('methods should be an array')
      }
      this.methods = methods
    }
  }

  routers () {
    if (this.methods) {
      this.methods.forEach(method => {
        switch (method.toUpperCase()) {
          case 'GET':
            this.router.get('/' + this.resource, this.execQuery.bind(this))
            this.router.get('/' + this.resource + '/:id', this.findById.bind(this))
            break
          case 'POST':
            this.router.post('/' + this.resource, this.create.bind(this))
            break
          case 'PUT':
            this.router.put('/' + this.resource + '/:id', this.findByIdAndUpdate.bind(this))
            break
          case 'DELETE':
            this.router.delete('/' + this.resource + '/:id', this.findByIdAndRemove.bind(this))
            break
        }
      })
    } else {
      this.router.get('/' + this.resource, this.execQuery.bind(this))
      this.router.post('/' + this.resource, this.create.bind(this))
      this.router.get('/' + this.resource + '/:id', this.findById.bind(this))
      this.router.put('/' + this.resource + '/:id', this.findByIdAndUpdate.bind(this))
      this.router.delete('/' + this.resource + '/:id', this.findByIdAndRemove.bind(this))
    }
    return this.router
  }

  // 条件查询实例
  async execQuery (req, res, next) {
    try {
      let data = await this.resourceService.execQuery({ query: req.query, user: req.user })
      res.header('X-Total-Count', data.count)
      res.json(data)
    } catch (err) {
      next(err)
    }
  }

  // 创建实体的实例
  async create (req, res, next) {
    try {
      let data = await this.resourceService.create({ body: req.body, user: req.user })
      res.json(data)
    } catch (err) {
      next(err)
    }
  }

  // 查找实例
  async findById (req, res, next) {
    try {
      let data = await this.resourceService.findById({ params: req.params, query: req.query, user: req.user })
      res.json(data)
    } catch (err) {
      next(err)
    }
  }

  // 更新实例
  async findByIdAndUpdate (req, res, next) {
    try {
      let data = await this.resourceService.findByIdAndUpdate({ params: req.params, body: req.body, query: req.query, user: req.user })
      res.json(data)
    } catch (err) {
      next(err)
    }
  }

  // 删除实例
  async findByIdAndRemove (req, res, next) {
    try {
      let data = await this.resourceService.findByIdAndRemove({ params: req.params, body: req.body, query: req.query, user: req.user })
      res.json(data)
    } catch (err) {
      next(err)
    }
  }
}

export default ResourceCtrl
