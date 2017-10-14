import { getToken, getUserInfo} from '../services/wechat/wechat-sns'

const exchangeToken = async (req, res, next) => {
  const code = req.body.code
  try {
    const body = await getToken(code)
    console.log(body)
    res.json({
      code: 200,
      data: body
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