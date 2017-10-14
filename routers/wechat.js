import { exchangeToken } from '../controllers/wechat'

module.exports = (router, commonRouter, authRouter, wechatRouter) => {
  wechatRouter.post('/exchangeToken', exchangeToken);
}