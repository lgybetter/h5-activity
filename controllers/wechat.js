import { getToken, getUserInfo} from '../services/wechat/wechat-sns'

const exchangeToken = async (req, res, next) => {
  const code = req.body.code
  try {
    const body = await getToken(code)
    const token = body.access_token
    const openid = body.openid
    const userInfo = await getUserInfo(token, openid)
    console.log(userInfo)
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