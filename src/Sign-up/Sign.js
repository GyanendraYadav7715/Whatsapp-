
import "./Sign.css"
import Navbar from '../Component/Navbar/Navbar'
import Footer from '../Component/Footer/Footer'

import { Link } from 'react-router-dom'



function Sign() {

    return (<>

         <Navbar></Navbar>
        <div id='form-box-container-hell'>

            <div id="anime">
                <div id="hero1" />
                <div id="hero2" />
            </div>
            <div className="container1">
                <h1>Create Account</h1>
                <form>
                    <label htmlFor="name" name="name" >Full Name</label>
                    <input type="text" id="name" name="name" />
                    <label htmlFor="email" name="email">Email Address</label>
                    <input type="email" id="email" name="email" />
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" />
                    <div>

                        <input type="checkbox" id="terms" name="terms" required="" />
                        <label className="terms" htmlFor="terms">
                            I agree to the terms of service and privacy policy
                        </label>
                    </div>
                    <button type="submit">Register</button>
                </form>

                <div className="signin">
                    <span>Already Have an account?</span>
                    <Link to="/login">Sign in</Link>
                </div>
            </div>
        </div>

     <Footer></Footer>
    </>

    )
}

export default Sign
