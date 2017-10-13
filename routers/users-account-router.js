const usersAccountController = require('../controllers/users-account-controller');

module.exports = (router, commonRouter, authRouter) => {
  commonRouter.get('/user', usersAccountController.userLogIn); //用户登录
  commonRouter.post('/user', usersAccountController.userSignIn); //用户注册
  authRouter.put('/user', usersAccountController.userUpdate); //用户修改信息
  authRouter.get('/user/:id', usersAccountController.userInfo); //用户获取详细信息
}