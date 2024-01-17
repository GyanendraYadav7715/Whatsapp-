import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import Page1 from '../Pages/Page1/Page1'
import Page2 from '../Pages/Page2/Page2'
import Page3 from '../Pages/Page3/Page3'
import Footer from '../Component/Footer/Footer'
 
 function Home (){
  return (<>
   <div id="main">
    <Navbar></Navbar>
    <Page1></Page1>
    <Page2></Page2>
    <Page3></Page3>
    <Footer></Footer>
    </div>
  </>



  )
}

export default Home;

