import React, { useState } from "react";
import Navbar from "../../Component/Navbar/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";

function Sign() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      // Assuming you have a server endpoint for registration
      const response = await axios.post("/api/register", {
        fullName,
        email,
        password,
      });

      // Handle success, maybe redirect the user to a login page
      console.log("Registration successful", response.data);
    } catch (error) {
      // Handle errors, show an error message to the user
      console.error("Registration failed", error.response.data);
    }
  };

  return (
    <>
      <Navbar />
      <div id="form-box-container-hell">
        <div id="anime">
          <div id="hero1" />
          <div id="hero2" />
        </div>
        <div className="container1">
          <h1>Create Account</h1>
          <form onSubmit={handleRegister}>
            <label htmlFor="name" name="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <label htmlFor="email" name="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div>
              <input type="checkbox" id="terms" name="terms" required="" />
              <label className="terms" htmlFor="terms">
                I agree to the terms of service and privacy policy
              </label>
            </div>
            <button type="submit">Register</button>
          </form>
          <div className="signin">
            <span>Already Have an account?</span>
            <Link to="/login">Sign in</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sign;
