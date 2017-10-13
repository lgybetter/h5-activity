import qiniu from 'qiniu'
import nconf from 'nconf'
import crypto from 'crypto'

qiniu.conf.ACCESS_KEY = nconf.get('qiniu').ACCESS_KEY
qiniu.conf.SECRET_KEY = nconf.get('qiniu').SECRET_KEY

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

export default {
  getUptoken
}