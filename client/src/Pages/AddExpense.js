import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddExpense = () => {
  const navigate=useNavigate()
  const [budgetData,setBudgetData]=useState({
    title:"",
    amount:"",
    category:"",
    date:"",
    payment_mode:""
  })

  const handleChange=({target:{name,value}})=>{
    setBudgetData({...budgetData,[name]:value})
  }

  const handleSubmit= async(e)=>{
    e.preventDefault()
    const user_id=sessionStorage.getItem("user_id")
    const addExpense=await axios.post(`http://localhost:5020/budget/addExpense/${user_id}`,budgetData)
    if(addExpense){
      navigate('/dashboard')
    }
  }
  return (
    <div class="addwhole">
        <Sidebar />
        <div class="add-parent">
          <form class="add-child" onSubmit={handleSubmit}>
            <h1 style={{marginBottom:80, fontWeight:700}}>Record Your Spending!</h1>
            <div class="add-title">
              <label for="title12">Title</label>
              <input type="text" id="title12" style={{width:280 ,height:32}} name='title' onChange={handleChange}/>
            </div>

            <div class="add-amount">
              <label for="amount12">Amount</label>
              <input type="number" id="amount12"style={{width:280 ,height:32}} name='amount' onChange={handleChange} />
            </div>

            <div class="add-category">
              <label for="category12">Category</label>
              <select name="category12" style={{width:280 ,height:32}} name='category'onChange={handleChange}>
                <option value="" selected disabled>--Choose your option--</option>
                <option value="Food & Drinks">Food & Drinks</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Medical">Medical</option>
                <option value="Education">Education</option>
                <option value="Shopping">Shopping</option>
                <option value="Transport">Transport</option>
                <option value="Rent">Rent</option>
              </select>
            </div>

            <div class="add-date">
              <label for="date12">Date</label>
              <input type="date" id="date12" style={{width:280 ,height:32}} name='date' onChange={handleChange}></input>
            </div>

            <div class="add-payment">
              <label for="payment12" style={{marginRight:10}}>Mode of Payment</label>
              <select name="payment12" style={{width:280 ,height:32}} name='payment_mode' onChange={handleChange}>
                <option value="" selected disabled>--Choose your option--</option>
                <option value="UPI">UPI</option>
                <option value="Cash">Cash</option>
                <option value="Credit">Credit</option>
              </select>
            </div>

            <button type="submit" class="btn btn-primary">Add your Expense</button>
          </form>
        </div>
    </div>
  )
}

export default AddExpense