import React from 'react'
import './footer.scss'
import {BsInstagram, BsLinkedin, BsMessenger, BsTwitter } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <div className="left">
          <h4>AR Shakir</h4>
          <p>Finance helps companies manage payments easily.</p>
          <div className='socialIcons'>
            <BsLinkedin/>
            <BsMessenger/>
            <BsTwitter/>
            <BsInstagram/>
          </div>
        </div>
        <div className="middle">
          <div>
            <h4>Company</h4>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div>
            <h4>Resources</h4>
            <ul>
              <li>Proposal Template</li>
              <li>Invoice Template</li>
              <li>Tuturoial</li>
              <li>How to write a contract</li>
            </ul>
          </div>
        </div>
        <div className="right">
          <h4>Join Our Newsletter</h4>
          <form action="">
            <input type="email" placeholder='Your Email Address' />
            <button>Subscribe</button>
          </form>
          <p>*  Will send you weekly updates for your better finance management.</p>
        </div>
      </div>
      <hr />
      <footer>
        <p>Copyright @ AR Shakir 2022. All Rights Reserved.</p>
      </footer>
    </div>
  )
}

export default Footer