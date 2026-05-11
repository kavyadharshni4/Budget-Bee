const mongoose=require('mongoose')

const connection= (URL) =>{
    try{
       mongoose.connect(URL)
       const db=mongoose.connection
       db.once('open',()=>{
        console.log("Connection Success!!")
       })
    }
    catch(error){
        console.log("Connection Failed!!")
    }
}

module.exports=connection