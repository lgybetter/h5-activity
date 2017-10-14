export default {
  port: 3000,
  mongodb: 'mongodb://localhost/meilai',
  host: '0.0.0.0',
  secret: 'lgybetter',
  qiniu: {
    ACCESS_KEY: 'TQH16oTDMXh1nZgVjdBtdj-hHloZVbCawbOsamG0',
    SECRET_KEY: 'd5lswyGYlKbFMzmPLh-8drEPmkVcYXBAyzlrKSvB',
    Bucket_Name: 'gyblog',
    Port: 80,
    Domain: 'http://os32fgzvj.bkt.clouddn.com/'
  },
  wechat: {
    baseUrl: 'https://api.weixin.qq.com',
    appId: 'wx8bb878c38f43a3ef',
    appSecret: '8ec145d34d1849c639edb54e063a41d8',
    scope: 'snapi_userinfo',
    state: 'state',
    token: 'meilaiToken',
    wechatDNS: 'http://119.29.193.240'
  }
}