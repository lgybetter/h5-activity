import { getToken, getUserInfo} from '../services/wechat/wechat-sns'

const exchangeToken = async (req, res, next) => {
  const code = req.body.code
  try {
    const body = await getToken(code)
    console.log('微信授权', body)
  } catch (error) {
    console.log(error)
  }
}

export {
  exchangeToken
}