import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"

function Footer() {
  return (
    <>
      <div id="page4">
        <div id='cover'>

          <div class="two-way-cow">
            <div id='left'>
              <h4><Link to='/register'>Register</Link></h4>
              <h4><Link to='/Studio'>Work</Link></h4>
              <h4><Link to='/contact'>Contact</Link></h4>

            </div>
            <div id='right'>
              <p>"Stay in the loop with the latest industry insights and<br/> creative inspiration delivered straight to your email."</p>
              <input type='email' placeholder='Your Email' />
            </div>
            

          </div>
          <h1>StartUpWay24</h1>
          <div id='bom'>
            <p>Copyright © StartUp-Way24</p>
            <p>Delhi,110094</p>
            <p>Instagram</p>
            <p>LinkedIn</p>

          </div>
        </div>

      </div>
    </>
  )
}

export default Footer
