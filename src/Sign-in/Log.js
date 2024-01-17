 
import "./Log.css"
import React, { useRef } from 'react';
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Log (){
    const navigate = useNavigate();
     
    const passwordRef = useRef(null)
    const emailRef = useRef(null)
    function HanndleLogin() {


        
        const password = passwordRef.current.value
        const email = emailRef.current.value



        if ( password === "vishal@123" && email === "vishal@gmail.com") {
            navigate('./main');
            localStorage.setItem("isLogin", true);

        } else {
            alert("Invalid credentials. Please try again.");
        }
    }
  return (<>
   <div id='form-box-container-hell'>

<div id="anime">
    <div id="hero1" />
    <div id="hero2" />
</div>
<div className="container1">
    <h1>Create Account</h1>
    <form>
        
        <label htmlFor="email" name="email">Email Address</label>
        <input type="email" id="email" name="email" required="" ref={emailRef} />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required="" ref={passwordRef} />
         
    <button type="submit" onClick={HanndleLogin}>Login</button>
    </form>
     
    <div className="signin">
        <span>If you don't have an account?</span>
        <Link to="/register">Sign Up</Link>
    </div>
</div>
</div>

  
  </>
     
  )
}

export default Log
