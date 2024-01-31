import React from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import Footer from '../../Component/Footer/Footer'
import "./Contact.css"

function Contact() {
    return (
        <>
            <Navbar></Navbar>
            <div id="Contact">
                <div id="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9936.79733873866!2d77.2512128293307!3d28.71470705452978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cffb27867571d%3A0x9df0f7f337d0beb4!2sSTARTUPWAY24%20IT%20SERVICES%20PVT.%20LTD.!5e1!3m2!1sen!2sin!4v1705485580774!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div id="address">
                    <div className='glass'>
                        <h1>LET'S WORK<br />
                            TOGETHER</h1>
                        <h5>startup@gmail.com</h5>
                    </div>
                    <div id="animeo">
                        <div id="hero121"></div>
                        <div id="hero222"></div>

                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Contact;


