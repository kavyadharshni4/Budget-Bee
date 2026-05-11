const express=require('express')
const app=express()
const db=require("../server/config/DB")
const dotenv=require("dotenv").config()
const cors=require("cors")
const AuthRouter=require('./Router/AuthRoutes')
const BudgetRouter=require('./Router/BudgetRoutes')

app.use(express.json())
app.use(cors(
    {origin:"http://localhost:3000"}
))
db(process.env.MONGO_URL)
app.use('/user',AuthRouter)
app.use('/budget',BudgetRouter)

app.listen(process.env.PORT ,()=>{
    console.log(`Server running in port ${process.env.PORT}`)
})