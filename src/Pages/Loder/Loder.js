import React, { useEffect } from "react";
import Typed from "typed.js";
import "./Loder.css"; // You can style your loader in a separate CSS file

const Loader = () => {
  useEffect(() => {
    // Create a new instance of Typed
    const options = {
      strings: ["EXPERIENCES", "BUSINESS", "CONTENT"],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    };

    const typed = new Typed(".typed-text", options);

    // Clean up the instance on component unmount
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="loader-container">
      <h1 className="typed-text"></h1>
    </div>
  );
};

export default Loader;
