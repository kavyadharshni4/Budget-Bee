import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {
   const navigate=useNavigate()
   const[UserData,setUserData]=useState({
      username:"",
      password:"",
      confirm_password:"",
      target_amount:""
   })
 
   const[UserDataErrors,setUserDataErrors]=useState({  
   })
   const handleChange=({target:{name,value}})=>{
      setUserData({...UserData,[name]:value})
   }

   const handleSubmit= async (e)=>{
      e.preventDefault()
      const{username,password,confirm_password,target_amount}=UserData
      if(password!=confirm_password){
         setUserDataErrors({["confirm_password"]:"Password mismatched"})
      }
      else{
         setUserDataErrors({["confirm_password"]:""})
        console.log(UserData)
        const data= await axios.post("http://localhost:5020/user/create",{username,password,target_amount})
        if(data){
           navigate("/")
        }
      }

   }
  
   console.log(UserDataErrors)
  return (
    <div>
        <div class="parent-signup">
                <form class="child-signup" onSubmit={handleSubmit}>
                    <h1 style={{marginBottom:30}}>Welcome, New Bee!</h1>
                   <div class="row mb-3">
                      <label for="inputUsername" class="col-sm-2 col-form-label">Username</label>
                      <div class="col-sm-10">
                        <input type="text" class="form-control" id="inputUsername" style={{width:450, height:40}} name="username" required onChange={handleChange}/>
                      </div>
                   </div>
                   <div class="row mb-3">
                     <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                     <div class="col-sm-10">
                      <input type="password" class="form-control" id="inputPassword3" style={{width:450, height:40}} name="password" required onChange={handleChange}/>
                     </div>
                   </div>

                   <div class="row mb-3">
                     <label for="inputPassword4" class="col-sm-2 col-form-label">Re-enter Password</label>
                     <div class="col-sm-10">
                      <input type="password" class="form-control" id="inputPassword4" style={{width:450, height:40}} name="confirm_password" required onChange={handleChange}/>
                      <p style={{color:"red"}}>{UserDataErrors.confirm_password}</p>
                     </div>
                   </div>

                   <div class="row mb-3">
                     <label for="targetamount1" class="col-sm-2 col-form-label">Target Amount</label>
                     <div class="col-sm-10">
                       <div className="input-group has-validation" style={{ width: 450 }}>
                        <span class="input-group-text" id="inputGroupPrepend">$</span>
                        <input type="number" class="form-control" id="targetamount1" aria-describedby="inputGroupPrepend" style={{height:40, flex:1}} name="target_amount" required onChange={handleChange}/>
                       </div>
                     </div>
                   </div>
          
                   <button type="submit" class="btn btn-primary" style={{marginBottom:15}} >Sign Up</button>
        
                   <p>Already have an account?
                    <Link to="/login" style={{textDecoration: "none"}}> Login</Link>
                   </p>
                </form>
            </div>
    </div>
  )
}

export default Signup