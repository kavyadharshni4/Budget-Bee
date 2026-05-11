import React, { useEffect, useState } from 'react'
import Sidebar from '../Components/Sidebar'
import axios from 'axios'

const History = () => {
  const [budgetData,setBudgetData]=useState([])

  useEffect(()=>{
    getData()
  },[])

  const getData=async()=>{
    const user_id=sessionStorage.getItem("user_id")
    const data=await axios.get(`http://localhost:5020/budget/getalldata/${user_id}`)
    console.log(data.data.data)
    setBudgetData(data.data.data)
  }
  return (
    <div>
        <Sidebar />
        <div class="parent-history">
          <div class="child-history">
            <h2 style={{marginBottom:30, fontWeight:700}}>My Expenses</h2>
          <table class="table table-primary table-striped-columns">
            <thead >
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Amount</th>
                <th scope="col">Category</th>
                <th scope="col">Date</th>
                <th scope="col">Payment Mode</th>
              </tr>
            </thead>
            <tbody>
              {[...budgetData].reverse().map((item,index)=>{
               return(
                <tr>
                 <th scope="row">{index+1}</th>
                 <td>{item.title}</td>
                 <td>{item.amount}</td>
                 <td>{item.category}</td>
                 <td>{item.date}</td>
                 <td>{item.payment_mode}</td>
                </tr>
               )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default History