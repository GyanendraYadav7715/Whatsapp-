 import React from 'react'
 import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
 import Main from "./Component/Main";
 import Login from "./Register/Login";
 
 const App = () => {
   return (
    <Router>
     
      <Routes>
        <Route path="/"  element={<Login/>} />
        <Route path="/main" element ={<Main/>} />

      </Routes>
     
  </Router>
   )
 }
 
 export default App
 