import ResourceCtrl from '../controllers/resource-controller'
import express from 'express'

module.exports = (router, commonRouter, authRouter) => {
  authRouter.use(new ResourceCtrl('post', 'Post').routers())
  authRouter.use(new ResourceCtrl('comment', 'Comment').routers())
  authRouter.use(new ResourceCtrl('collection', 'Collection').routers())
  authRouter.use(new ResourceCtrl('thumb-up', 'ThumbUp').routers())
}