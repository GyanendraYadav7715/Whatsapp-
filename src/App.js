 import React from 'react'
 import { BrowserRouter as Router, Route,Routes, } from 'react-router-dom';
 //import Main from "./Component/Excle/Main";
 import Upload from "./Pages/Upload/Upload"
 import Sign from "./Pages/Sign-up/Sign"
 import Home from "./Pages/ Home/Home"
 import Log from "./Pages/Sign-in/Log"
 import Contact from "./Pages/Contact/Contact" 
import Displaydata from './Pages/Displaydata/ConvertTablePage'
 
 
 
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
 