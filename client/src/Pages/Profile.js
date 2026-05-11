import React, { useEffect, useState } from 'react'
import Sidebar from '../Components/Sidebar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const navigate=useNavigate()
  const[userData,setUserData]=useState({})

  useEffect(()=>{
    getUser()
  },[])
  
  const handleChange=({target:{name,value}})=>{
      setUserData({...userData,[name]:value})
  }

  const handleUpdate=async()=>{
    const user_id=sessionStorage.getItem("user_id")
    const{username,password,target_amount}=userData
    const updatedData=await axios.put(`http://localhost:5020/user/${user_id}`,{target_amount})
    console.log(updatedData)
  }

  const handleDelete=async()=>{
    const user_id=sessionStorage.getItem("user_id")
    const deletedData_budget=await axios.delete(`http://localhost:5020/budget/${user_id}`)
    const deletedData=await axios.delete(`http://localhost:5020/user/delete/${user_id}`)
    console.log(deletedData)
    if(deletedData){
       navigate("/")
    }
  }
  const getUser=async ()=>{
    const user_id=sessionStorage.getItem("user_id")
    const data=await axios.get(`http://localhost:5020/user/${user_id}`)
    console.log(data.data.data)
    setUserData(data.data.data)
  }
  return (
    <div>
        <Sidebar />
        <div class="parent-profile">
          <div class="child-profile">
            <h2 style={{textAlign:"center", marginTop:20, fontWeight:700, marginBottom:30}}>Bee Profile</h2>
            <table>
              <tbody class="child-pro-content">
                <tr class="child-rows">
                  <th >Username</th>
                  <td><input type='text'value={userData.username} disabled></input></td>
                </tr>
                <tr class="child-rows">
                  <th>Password</th>
                  <td><input type='password' value={userData.password}disabled></input></td>
                </tr>
                <tr class="child-rows">
                  <th>Target Amount</th>
                  <td><input type='number' defaultValue={userData.target_amount} onChange={handleChange} name="target_amount"></input></td>
                  <td><button class="btn btn-primary" onClick={handleUpdate}>Update</button></td>
                </tr>
                <tr class="child-rows">
                  <th><button type="button" class="btn btn-danger" onClick={handleDelete}>Delete Account</button></th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    </div>
  )
}

export default Profile