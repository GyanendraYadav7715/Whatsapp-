 import React from 'react'
 import { BrowserRouter as Router, Route,Routes, } from 'react-router-dom';
 //import Main from "./Component/Excle/Main";
 import Upload from "./Upload/Upload"
 import Sign from "./Sign-up/Sign"
 import Home from "./ Home/Home"
 import Log from "./Sign-in/Log"
 import Contact from "./Contact/Contact" 
import Displaydata from './Component/Displaydata/ConvertTablePage'
 
 
 
 function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
      

          <Route path="/displaydata" element={<Displaydata />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/register" element={<Sign />} />
          <Route path="/login" element={<Log />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}
 
 export default App
 