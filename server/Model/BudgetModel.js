const mongoose=require('mongoose')

const schema=mongoose.Schema({
    title:{type:String , require:true},
    amount:{type:Number,require:true},
    category:{type:String, require:true},
    date:{type:String, require:true},
    payment_mode:{type:String ,require:true},
    user_id:{type:mongoose.Schema.Types.ObjectId,require:true}
})

const BudgetModel=mongoose.model("budget",schema)
module.exports=BudgetModel