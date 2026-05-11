const mongoose=require('mongoose')
const schema=mongoose.Schema({
    username:{type:String, require:true},
    hashed_password:{type:String,require:true},
    target_amount:{type:Number,require:true}
})

const Model=mongoose.model('Users',schema)
module.exports=Model