import React, { useEffect, useState } from 'react'
import Sidebar from '../Components/Sidebar'
import axios from 'axios'
import Doughnutchart from '../Components/Doughnutchart'


const Dashboard = () => {
  const[userData,setUserData]=useState({})
  const user_id=sessionStorage.getItem("user_id")
  const[record,setRecords]=useState([])
  const[pastRecord,setPastRecord]=useState([])
  const[total,setTotal]=useState(0)
  
  useEffect(()=>{
    getUser()
  },[])

  useEffect(()=>{
    calculateSum()
  },[])

  const getUser=async()=>{
    const data=await axios.get(`http://localhost:5020/user/${user_id}`)
    console.log(data.data.data)
    setUserData(data.data.data)
  }

  const calculateSum=async()=>{
    const allData=await axios.get(`http://localhost:5020/budget/getalldata/${user_id}`)
    const fetched=allData.data.data
    
    const now=new Date()
    const current_month=now.getMonth()
    const current_year=now.getFullYear()

    const current_record=fetched.filter((item)=>{
     const date=new Date(item.date)
     return date.getMonth()==current_month && date.getFullYear()==current_year
    })

    const past_record=fetched.filter((item)=>{
     const date=new Date(item.date)
     return date.getMonth()!=current_month && date.getFullYear()!=current_year
    })

    setRecords(current_record)
    setPastRecord(past_record)

    const total=current_record.reduce((acc,item)=>acc+item.amount,0)
    console.log(total)
    setTotal(total)
  }

  return (
    <div>
        <Sidebar />
        <div class="parent-dashboard">
          <div class="child-dashboard">
            <section style={{display:"flex",flexDirection:"column",alignItems:"flex-start",marginLeft:60,marginTop:30}}>
              <p style={{marginBottom:5, color:"grey",marginLeft:10}}>Target Amount</p>
              <p class="target-amount">{userData.target_amount}</p>
            </section>
            <section style={{display:"flex",flexDirection:"column",alignItems:"flex-start",marginRight:220,marginTop:30}}>
              <p style={{marginBottom:5, color:"grey",marginLeft:10}}>Total Spendings</p>
              <p class="total-expense">{total}</p>
            </section>
          </div>
        </div>
        <hr style={{marginLeft:380, width:"70%",}}/>
        <div class="parent-chart">
          <div class="child-chart">
            <Doughnutchart />
          </div>
        </div>
    </div>
  )
}

export default Dashboard