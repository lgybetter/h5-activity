import nconf from 'nconf'
import { saveMedia } from '../controllers/audio'

module.exports = (router, commonRouter, authRouter, wechatRouter) => {
  authRouter.post('/audio', saveMedia)
};
