import React, { useState } from 'react'

const Login = () => {
  let [user,setUser]=useState({email:"",password:""})

  let emailHandler = (event)=>{
    console.log(event)
    console.log(event.target.value)
    setUser({...user,  email:event.target.value})
  }
  let passwordHandler = (event)=>{
    setUser({...user, password:event.target.value})
  }
  let submitHandler  = (event)=>{
    event.preventDefault();
    console.log(user)
  }
 return <>
 <div className="container">
 <h3>Login Details</h3>
  <pre>{JSON.stringify(user)}</pre>
  <div className="row">
  
    <div className="col-5">
    <form onSubmit={submitHandler}>
        <div className='form-group'>
           <label >Email Id:</label> 
           <input  className='form-control' type="mail" onChange={emailHandler} /> 
        </div>
        <div className='form-group'>
          <label >Password:</label>
          <input className='form-control' type="password" onChange={passwordHandler} />
        </div>
        <div className="form-group">
            <input type="submit" value="Login"  className='btn btn-warning'/>
        </div> 

      </form>
    </div>
  </div>
 </div>
     
     
      </>
}

export default Login