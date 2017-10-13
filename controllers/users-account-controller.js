import userAccountService from '../services/users-account-service'
import Promise from 'bluebird'
import jwt from 'jsonwebtoken'

/**
 * 用户登录
 * @param:
 *  email: 邮箱
 *  password: 口令
 */
exports.userLogIn = async (req, res, next) => {
  let data = req.query || {};
  try {
    let user = await userAccountService.verifyUser(data)
    res.json(user)
  } catch (err) {
    next(err)
  }
}

/**
 * 用户注册
 * @param:
 *  email: 邮箱
 *  name: 昵称
 *  password: 口令
 */
exports.userSignIn = async (req, res, next) => {
  let data = req.body || {};
  try {
    let user = await userAccountService.createUser(data)
    res.json(user)
  } catch (err) {
    next(err)
  }
}

/**
 * 用户信息更新
 * @param:
 *  phone: 手机号码
 */
exports.userUpdate = async (req, res, next) => {
  let data = req.body || {}
  let id = req.user._id
  try {
    let user = await userAccountService.updateUser(id, data)
    res.json(user)
  } catch (err) {
    next(err)
  }
}

exports.userInfo = async (req, res, next) => {
  let id = req.params.id
  let _id = req.user._id
  try {
    let user = await userAccountService.findUser(id, _id)
    res.json(user)
  } catch (err) {
    next(err)
  }
}
