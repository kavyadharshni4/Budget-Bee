import React, { useEffect, useState } from 'react'
import 'chart.js/auto'
import {Doughnut} from 'react-chartjs-2'
import axios from 'axios'

const Doughnutchart = () => {
  const[userData,setUserData]=useState([])

  useEffect(()=>{
    getData()
  },[])

  const getData=async()=>{
    const user_id=sessionStorage.getItem("user_id")
    const Data=await axios.get(`http://localhost:5020/budget/getalldata/${user_id}`)
    const fetchedData=Data.data.data
    const now=new Date()
    const current_month=now.getMonth()
    const current_year=now.getFullYear()

    const record=fetchedData.filter((item)=>{
     const date=new Date(item.date)
     return date.getMonth()==current_month && date.getFullYear()==current_year
    })
    setUserData(record)
  }
  return (
    <div>
      <div>
        <Doughnut
          data={{
            labels:userData.map((item)=> item.category),
            datasets:[
            {
              labels:"amount",
              data:userData.map((item)=>item.amount),
              backgroundColor:[
                "rgb(40, 40, 117)",
                "rgb(169, 52, 175)",
                "rgb(233, 17, 104)",
                "rgb(231, 194, 5)",
                "rgb(40, 199, 170)",
                "rgb(27, 132, 23)",
                "rgb(119, 63, 18)"
              ],
              borderColor:[
                "rgb(40, 40, 117)",
                "rgb(169, 52, 175)",
                "rgb(233, 17, 104)",
                "rgb(231, 194, 5)",
                "rgb(40, 199, 170)",
                "rgb(27, 132, 23)",
                "rgb(119, 63, 18)"
              ]
            }
          ]
          }}
          
        />
      </div>
    </div>
  )
}

export default Doughnutchart