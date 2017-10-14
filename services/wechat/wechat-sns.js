import nconf from 'nconf'
import request from 'request'

const getToken = (code) => {
  const url = `${nconf.get('wechat:baseUrl')}/sns/oauth2/access_token?appid=${nconf.get('wechat:appId')}&secret=${nconf.get('wechat:appSecret')}&code=${code}&grant_type=authorization_code`;
  return new Promise((resolve, reject) => {
    return request(url, (err, res, body) => {
      if(er) {
        return reject(err)
      }
      body = JSON.parse(body)
      if (!body.access_token) {
        return reject(new Error(body.errcode +'/'+ body.errmsg))
      }
      return resolve(body)
    })
  })
}
const getUserInfo =(token, openid) => {
  return new Promise((resolve, reject) => {
    const url = `${nconf.get('wechat:baseUrl')}/sns/userinfo/?access_token=${token}&openid=${openid}&lang=zh_CN`
    return request(url, (err, res, body) => {
      if(err) {
        return reject(err)
      }
      body = JSON.parse(body)
      if(!body.openid) {
        return reject(new Error(body.errcode +'/'+ body.errmsg))
      }
      return resolve(body)
    })
  })
}

export {
  getToken,
  getUserInfo
}