import jwt from 'jsonwebtoken'
import nconf from 'nconf'
import { getToken, getUserInfo} from '../services/wechat/wechat-sns'
import { saveUser, findUser } from '../services/core/user-service'

const exchangeToken = async (req, res, next) => {
  const code = req.body.code
  try {
    const body = await getToken(code)
    const refresh_token = body.refresh_token
    const access_token = body.access_token
    const openid = body.openid
    const userInfo = await getUserInfo(access_token, openid)
    const user = await findUser({ openid })
    if (!user) {
      await saveUser({
        ...userInfo,
        refresh_token,
        access_token
      })
    }
    const token = jwt.sign({
      user: JSON.parse(JSON.stringify(userInfo)),
      exp: Date.now()
    }, nconf.get('secret'))
    res.json({
      code: 200,
      msg: '微信登录成功',
      data: {
        token
      }
    })
  } catch (error) {
    console.log(error.message)
    res.json({
      code: 400,
      msg: error.message
    })
  }
}

export {
  exchangeToken
}