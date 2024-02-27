import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>SHOP DROP</p>
      </div>
      <ul className="footer-links">
        <li><a href='https://www.google.com/' target='blank'>Company</a></li>
        <li><a href='https://www.google.com/' target='blank'>Products</a></li>
        <li><a href='https://www.google.com/' target='blank'>Offices</a></li>
        <li><a href='https://www.google.com/' target='blank'>About</a></li>
        <li><a href='https://www.google.com/' target='blank'>Contact</a></li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <a href='https://www.instagram.com/' target='blank'>
            <img src={instagram_icon} alt="" />
          </a>
        </div>
        <div className="footer-icons-container">
          <a href='https://www.pinterest.com/' target='blank'>
            <img src={pintester_icon} alt="" />
          </a>
        </div>
        <div className="footer-icons-container">
          <a href='https://www.whatsapp.com/' target='blank'>
            <img src={whatsapp_icon} alt="" />
          </a>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
