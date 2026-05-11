const BudgetRoutes=require('express').Router()
const BudgetController=require('../Controller/BudgetController')

BudgetRoutes.post("/addExpense/:id",BudgetController.addNewExpense)
BudgetRoutes.get("/getalldata/:id",BudgetController.getAllBudget)
BudgetRoutes.delete("/:id",BudgetController.deleteBudget)
module.exports=BudgetRoutes