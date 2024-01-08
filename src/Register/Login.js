import React ,{useRef} from 'react';
import "./Login.css"
import { useNavigate } from 'react-router-dom'
 

 

 
function Login() {
  const navigate = useNavigate();
//  const isLogin = localStorage.getItem("isLogin");
//  console.log(isLogin)
//  if(isLogin==="true")
//  {
//   navigate('./main');
  
//  }
  
  const userNameRef =useRef(null)
  const passwordRef =useRef(null)
  const emailRef =useRef(null)
  function HanndleLogin () {
    

   const username=userNameRef.current.value
   const password =passwordRef.current.value
   const email =emailRef.current.value



    if (username === "vishal"&& password==="vishal@123" && email ==="vishal@gmail.com" ) {
      navigate('./main');
      localStorage.setItem("isLogin", true);
       
    } else {
      alert("Invalid credentials. Please try again.");
    }
  }
  return (
    <>
      <div className="main">
  <div className="container2">
    <img
      src="\Image\young-women-showing-whatsapp-messenger-icon.jpg"
      alt=""
    />
  </div>
  <div className="container1">
    <h1>Create Account</h1>
    <form>
      <label htmlFor="name"name="name" >Full Name</label>
      <input type="text" id="name" name="name" required=""  ref={userNameRef}/>
      <label htmlFor="email" name="email">Email Address</label>
      <input type="email" id="email" name="email" required="" ref={emailRef} />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" required="" ref={passwordRef} />
      <div>
        {" "}
        <input type="checkbox" id="terms" name="terms" required="" />
        <label className="terms" htmlFor="terms">
          I agree to the terms of service and privacy policy
        </label>
      </div>
      <button type="submit" onClick={HanndleLogin}>Login</button>
    </form>
    <div className="opt">
      <div />
      <span>Or Sign Up With </span>
      <div />
    </div>
    <div className="social">
      <img src= "\Image\google.png"alt="Google" />
      <img src="\Image\facebook.png"   alt="Facebook" />
      <img src="\Image\instagram.png"   alt="Instagram" />
      <img src= "\Image\twitter.png"  alt="Twitter" />
      <img src= "\Image\linkedin.png"  alt="LinkedIn" />
    </div>
    <div className="signin">
      <span>Already Have an account?</span>
      <a href="#">Sign in</a>
    </div>
  </div>
</div>

    </>
  )
}

export default Login
