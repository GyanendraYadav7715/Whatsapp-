import React from 'react'
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Main from "./Component/Main";
import Navbar from './Navbar/Navbar';


const App = () => {
  return (<>
    <Router>

      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/main" element={<Main />} />

      </Routes>

    </Router>
  </>
  )
}

export default App
