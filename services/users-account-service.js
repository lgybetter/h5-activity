import mongoose from 'mongoose'
import nconf from 'nconf'
import Promise from 'bluebird'
import jwt from 'jsonwebtoken'
const Users = mongoose.model('Users')

const createUser = (data) => {
  return new Users(data).save()
}

const removeUser = (id) => {
  return Users.findByIdAndRemove(id).select({
    password: 0
  })
}

const updateUser = async (id, data) => {
  await Users.findByIdAndUpdate(id, data)
  return Users.findById(id).select({
    password: 0
  })
}

const queryUsers = () => {
  return Users.find({}).select({
    password: 0
  })
}

const findUser = (id, _id) => {
  return Users.findById(id).select({
    password: 0
  })
}

const verifyUser = (data) => {
  let email = data.email;
  let password = data.password;
  return Users.findOne({ email: email }).then(user => {
    if (!user) {
      return Promise.reject({ code: 301, msg: 'user not sign in' });
    }
    if (user.password === password) {
      let token = jwt.sign({
        user: JSON.parse(JSON.stringify(user)), exp: Date.now()
      }, nconf.get('secret'))
      return Promise.resolve({
        code: 200,
        msg: 'login success',
        data: user,
        token: token
      });
    } else {
      return Promise.resolve({
        code: 401,
        msg: 'password uncorrect '
      });
    }
  });
}

export default {
  createUser,
  removeUser,
  updateUser,
  queryUsers,
  findUser,
  verifyUser
}
