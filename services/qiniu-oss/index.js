import qiniu from 'qiniu'
import nconf from 'nconf'
import crypto from 'crypto'

qiniu.conf.ACCESS_KEY = nconf.get('qiniu').ACCESS_KEY
qiniu.conf.SECRET_KEY = nconf.get('qiniu').SECRET_KEY
const mac = new qiniu.auth.digest.Mac(accessKey, secretKey)
const options = {
  scope: nconf.get('qiniu').Bucket_Name,
}
const putPolicy = new qiniu.rs.PutPolicy(options)

const getUptoken = (req, res, next) => {
  let key = crypto.createHash('md5').update(((new Date()) * 1 + Math.floor(Math.random() * 10).toString())).digest('hex') + '-' + req.query.fileName
  let url = nconf.get('qiniu').Domain
  let uptoken = new qiniu.rs.PutPolicy(nconf.get('qiniu').Bucket_Name + ':' + key)
  let token = uptoken.token()
  res.header("Cache-Control", "max-age=0, private, must-revalidate")
  res.header("Pragma", "no-cache")
  res.header("Expires", 0)
  if (token) {
    res.json({
      uptoken: token,
      key,
      url
    })
  }
}

const uploadToQiniu = (dir, fileName) => {
  let uploadToken = putPolicy.uploadToken(mac)
  let config = new qiniu.conf.Config()
  // 空间对应的机房: 华南机房
  config.zone = qiniu.zone.Zone_z2;
  // 是否使用https域名
  //config.useHttpsDomain = true
  // 上传是否使用cdn加速
  //config.useCdnDomain = true
  let localFile = dir + '/' + fileName
  let formUploader = new qiniu.form_up.FormUploader(config)
  let putExtra = new qiniu.form_up.PutExtra()
  let key = fileName
  // 文件上传
  return new Pormise((resolve, reject) => {
    formUploader.putFile(uploadToken, key, localFile, putExtra, (respErr, respBody, respInfo) => {
      if (respErr) {
        return reject(err)
      }
      return resolve(respBody)
    })
  })
}

export default {
  getUptoken
}