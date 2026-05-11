const BudgetModel=require('../Model/BudgetModel')
const AuthModel=require('../Model/AuthModel')

const BudgetController={
    async addNewExpense(req,res){
        try{
           const{title,amount,category,date,payment_mode}=req.body
           const{id}=req.params
           const user=await AuthModel.findOne({_id:id})
           console.log(user)

           const createdExpense= await BudgetModel.create({title,amount,category,date,payment_mode,user_id:user._id})

           res.status(201).json({"message":"Expense created Successfully", data:createdExpense})
        }
        catch(error){
           res.status(500).json({"messge":"Something went wrong", error:error.message})
        }
    },
   async getAllBudget(req,res){
    try{
      const{id}=req.params
      const user=await AuthModel.findOne({_id:id})

      const history=await BudgetModel.find({user_id:user._id})
       res.status(201).json({"message":"All Expenses", data:history})
    }
    catch(error){
       res.status(500).json({"messge":"Something went wrong", error:error.message})
    }
   },
   async deleteBudget(req,res){
      try{
        const{id}=req.params
        const user=await AuthModel.findOne({_id:id})

        if(!user){
          res.status(404).json({"message":"User not found"})
        }
        else{
          const deletedData=await BudgetModel.deleteMany({user_id:user._id})
          res.status(201).json({data:deletedData})
        }

      }
      catch(error){
         res.status(500).json({"messge":"Something went wrong", error:error.message})
      }
   }

}

module.exports=BudgetController 