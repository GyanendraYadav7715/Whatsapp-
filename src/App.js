 import React from 'react'
 import { BrowserRouter as Router, Route,Routes, } from 'react-router-dom';
 import Main from "./Component/Main";
 import Navbar from './Navbar/Navbar';
 import Upload from "./Upload/Upload"
 import Sign from "./Sign-up/Sign"
 
 
 const App = () => {
   return (<>
   

 
<Router>
     
      <Routes>
        <Route path="/"element={<Navbar/>} />
        <Route path="/main" element ={<Main/>} />
        <Route path="/upload" element ={<Upload/>} />
        <Route path="/register"element={<Sign/>} />

      </Routes>
     
  </Router> 
  </>
   )
 }
 
 export default App
 