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
             <div id='logo'>
              
              <div id='logo-gola'></div>
              <div id='logo-text'>
              <h2>Start-Up</h2>
              <h4>Way24</h4>
              </div>
             </div>
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
          <img
            src="https://images.unsplash.com/photo-1702575041625-e93d0648b6ac?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
             
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
              <img src="https://plus.unsplash.com/premium_photo-1671599016130-7882dbff302f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              <p>
               Our passion is in creation, problem-solving, and collaboration. We thrive on turning fantastic ideas into reality. With us, you're not just a client; you're a partner. We're committed to walking with you through every step of the process because, at StartUpWay24, we believe that relationships are the foundation of everything we build.
              </p>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Navbar;
