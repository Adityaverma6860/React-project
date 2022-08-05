import React from 'react'
import { useState } from 'react'

export default function Login() {
 const[data, setData] = useState(
{
    email:"",
    password:""
})
const handleInput =(e) =>{
    // console.log(e.target.name)
    // console.log(e.target.value)
    setData({...data,[e.target.name]:e.target.value})
}
const handleSubmit =(e) =>{
   e.preventDefault()
   localStorage.setItem('auth',"Success")
   window.location.reload()

 }



  return (
<div style={{width:"300px",marginLeft:"500px",marginTop:"50px"}}>
    <h1>Login Here</h1>
  <div class="mb-3" >
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" name='email' onChange={handleInput} value={data.email} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1"  class="form-label">Password</label>
    <input type="password" onChange={handleInput} name='password' value={data.password} class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" onClick={(e)=>handleSubmit(e)} class="btn btn-primary">Submit</button>
  </div>
  )
}
