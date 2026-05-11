import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios'

const Login = () => {
  const navigate=useNavigate()

  const [userData,setUserData]=useState({
    username:"",
    password:""
  })

  const[UserDataErrors,setUserDataErrors]=useState({  
     })
 
  const handleChange=({target:{name,value}})=>{
    setUserData({...userData,[name]:value})
  }

  const handleSubmit=async(e)=>{
    e.preventDefault()
      const{username,password}=userData
      setUserDataErrors({["username"]:""})
      setUserDataErrors({["password"]:""})
      const data= await axios.post("http://localhost:5020/user/checkuser",{username,password})
      if(data.data.message=="Success"){
        sessionStorage.setItem("user_id",data.data.user_id)
        navigate("/dashboard")
      }
      else if(data.data.message=="User not found"){
        setUserDataErrors({["username"]:"User not found"})
      }
      else{
        setUserDataErrors({["password"]:"Password Incorrect"})
      }
  }

  return (
    <div class="parent-login">
        <form class="child-login" onSubmit={handleSubmit}>
            <h1 style={{marginBottom:30}}>Welcome Back, Busy Bee!</h1>
            <p style={{color:"red"}}>{UserDataErrors.username}</p>
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
          <p style={{color:"red"}}>{UserDataErrors.password}</p>
  
           <button type="submit" class="btn btn-primary" style={{marginBottom:15}} >Log in</button>

           <p>Don't have an account?
            <Link to="/signup" style={{textDecoration: "none"}}> Sign Up</Link>
           </p>
        </form>
    </div>
  )
}

export default Login