import qiniuOss from '../services/qiniu-oss'

module.exports = (router, commonRouter, authRouter) => {
  authRouter.get('/uptoken', qiniuOss.getUptoken);
}