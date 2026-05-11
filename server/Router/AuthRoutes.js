const AuthRouter=require('express').Router()
const AuthController=require('../Controller/AuthController')

AuthRouter.post('/create',AuthController.createUser)
AuthRouter.post('/checkuser',AuthController.checkUser)
AuthRouter.get('/:id',AuthController.getOneUser)
AuthRouter.put('/:id',AuthController.updateUser)
AuthRouter.delete('/delete/:id',AuthController.deleteUser)

module.exports=AuthRouter