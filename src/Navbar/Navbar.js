import { useEffect } from 'react';
import './Navbar.css';
import LocomotiveScroll from 'locomotive-scroll';


const Navbar = () => {

  const imagePath = process.env.PUBLIC_URL + '/Images/logo.jpg';
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('#main'), // Replace with your container selector
      smooth: true,
      // Add other options as needed
    });

    return () => {
      scroll.destroy();
    };
  }, []);
  return (
    <>
      <div id="main">
        <div id="page1">
          <nav>
            {" "}
            {/* This is navbar coding */}
            <img
              src={imagePath}
              alt="Logo"
            />
            <div id="nav-part2">
              <h4>
                <a href="C:\Users\Gyanendra Yadav\Desktop\my-data\src\Component\Main.js">Register</a>
              </h4>
              <h4>
                <a href="">Work</a>
              </h4>
              <h4>
                <a href="">Sudio</a>
              </h4>
              <h4>
                <a href="">Contact</a>
              </h4>
            </div>
          </nav>
          <div id="center">
            <div id="left">
              <h2>
                
              <span> StartUpWay24</span>

                ,Uniting software and business mastery for exceptional end-to-end experiences. Tailored solutions, innovation, and expertise to elevate your venture's success.
              </h2>
            </div>
            <div id="right">
              <h1>BUSINESS THAT INSPIRE</h1>
            </div>
          </div>
          <div id="hero-shape">
            <div className="hero1" />
            <div className="hero2" />
            <div className="hero3" />
          </div>
          <video
            src="https://player.vimeo.com/progressive_redirect/playback/822063732/rendition/1080p/file.mp4?loc=external&signature=79851f90dc501a79b69488c261bfb3c1db78d45a4eba6d058173e6f9576f6186"
            autoPlay=""
            loop=""
          />
        </div>
        <div id="page2">
          <div id="moving-text">
            <div className="con">
              <h1>EXPERIENCES</h1>
              <div className="gola" />
              <h1>CONTENT</h1>
              <div className="gola" />
              <h1>BUSINESS</h1>
              <div className="gola" />
            </div>
            <div className="con">
              <h1>EXPERIENCES</h1>
              <div className="gola" />
              <h1>CONTENT</h1>
              <div className="gola" />
              <h1>BUSINESS</h1>
              <div className="gola" />
            </div>
            <div className="con">
              <h1>EXPERIENCES</h1>
              <div className="gola" />
              <h1>CONTENT</h1>
              <div className="gola" />
              <h1>BUSINESS</h1>
              <div className="gola" />
            </div>
          </div>
          <div id="bottom">
            <div id="heading-part">
              <h1>
              At StartUpWay24, we're passionate about design and driven by goals. Meticulous attention to detail defines our approach, making a difference in every venture.
              </h1>
              <div id="animation">
                <div className="hero11"></div>
                <div className="hero12"></div>
              </div>
              
            </div>
            <div id="page2-right">
              <img src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15d1_Holding_thumb-p-500.jpg" />
              <p>
                We love to create, we love to solve, we love to collaborate, and we
                love to turn amazing ideas into reality. We’re here to partner with
                you through every step of the process and know that relationships are
                the most important things we build.
              </p>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Navbar;
