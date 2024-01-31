import React, { useState, useEffect } from "react";

import Navbar from "../../Component/Navbar/Navbar";
import Page1 from "../Page1/Page1";
import Page2 from "../Page2/Page2";
import Page3 from "../Page3/Page3";
import Footer from "../../Component/Footer/Footer";
import Loder from "../Loder/Loder";

function Home() {
  const [loading, setLoading] = useState(true);
  // Simulating a delay for demonstration purposes
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      {loading ? (
        <Loder />
      ) : (
        <div id="main">
          <Navbar></Navbar>
          <Page1></Page1>
          <Page2></Page2>
          <Page3></Page3>
          <Footer></Footer>
        </div>
      )}
    </div>
  );
}

export default Home;
 