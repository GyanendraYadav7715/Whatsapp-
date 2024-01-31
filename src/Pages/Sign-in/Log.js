import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Component/Navbar/Navbar";
import './Log.css';

function Log() {
  const navigate = useNavigate();
  const passwordRef = useRef(null);
  const emailRef = useRef(null);

  function HanndleLogin(e) {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (email === "vishal@gmail.com" && password === "vishal") {
      // Assuming you want to set a flag in localStorage indicating the user is logged in
      localStorage.setItem("isLogin", true);
      navigate("/upload");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  }

  return (
    <>
      <Navbar />
      <div id="form-box-container-hell">
        <div id="anime">
          <div id="hero1" />
          <div id="hero2" />
        </div>
        <div className="container1">
          <h1>Login</h1>
          <form>
            <label htmlFor="email" name="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required=""
              ref={emailRef}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required=""
              ref={passwordRef}
            />
            <button type="submit" onClick={HanndleLogin}>
              Login
            </button>
          </form>
          <div className="signin">
            <span>If you don't have an account?</span>
            <Link to="/register">Sign Up</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Log;
