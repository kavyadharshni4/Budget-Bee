const AuthModel=require('../Model/AuthModel')
const bcrypt=require('bcrypt')

const AuthController={
    async createUser(req,res){
      try{
         const{username,password,target_amount}=req.body

         const hashed_password=await bcrypt.hash(password,10)
         const createdUser=await AuthModel.create({
            username,
            hashed_password,
            target_amount
         })
         res.status(201).json({"message":"User created successfully"})
      }
      catch(error){
        res.status(500).json({"message":"Something went wrong", error:error.message})
      }
    },
    async checkUser(req,res){
      try{
         const{username,password}=req.body

         const RegisteredUN=await AuthModel.findOne({username:username})
         if(RegisteredUN){
            if(await bcrypt.compare(password,RegisteredUN.hashed_password)){
                res.status(200).json({"message":"Success", "user_id": RegisteredUN._id})
            }
            else{
              res.status(200).json({"message":"Password Incorrect"})
            }
         }
         else{
          res.status(200).json({"message":"User not found"})
         }
      }
      catch(error){
        res.status(500).json({"message":"Something went wrong", error:error.message})
      }
    },
    async getOneUser(req,res){
      try{
        const {id}=req.params
        const userData=await AuthModel.findOne({_id:id})
        if(!userData){
          res.status(404).json({"message":"User not found"})
        }
        else{
          res.status(201).json({data:userData})
        }
      }
      catch(error){
        res.status(500).json({"message":"Something went wrong", error:error.message})
      }
    },
    async updateUser(req,res){
      try{
        const {id}=req.params
        const userData=await AuthModel.findOne({_id:id})
        if(!userData){
          res.status(404).json({"message":"User not found"})
        }
        else{
          const{username,password,target_amount}=req.body
          const updatedData=await AuthModel.updateOne({_id:id},{target_amount})
          res.status(201).json({data:updatedData})
        }
      }
      catch(error){
        res.status(500).json({"message":"Something went wrong", error:error.message})
      }
    },
    async deleteUser(req,res){
      try{
        const {id}=req.params
        const userData=await AuthModel.findOne({_id:id})
        if(!userData){
          res.status(404).json({"message":"User not found"})
        }
        else{
          const deletedData=await AuthModel.deleteOne({_id:id})
          res.status(201).json({data:deletedData})
        }
      }
      catch(error){
        res.status(500).json({"message":"Something went wrong", error:error.message})
      }
    }
}

module.exports=AuthController