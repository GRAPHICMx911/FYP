import React from "react";
import { NavLink, Link} from "react-router-dom";
import { FaLinkedin, FaGithub, FaYoutube, FaInstagramSquare} from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <footer className="py-5">
    <div className="container-xxl">
      <div className="row">
        <div className="col-5">
        <div className="footer-top-data d-flex gap-30 align-items-center footer-upper mt-1">
              <img className="newsletter" src="images\newsletter.png" alt="newsletter" />
              <h5 className="mb-0 text-white">Sign Up for NewsLetter </h5>
              </div>
              </div>
          <div className="col-5">
             <div className="input-group">
              <input type="text" className="form-control py-1 " placeholder="Your Email Address" aria-label="Your Email Address" aria-describedby="basic-addon2" />
              <span className="input-group-text" id="basic-addon2">
                Subscribe
              </span>
            </div>
        </div>
      </div>
    </div>
    </footer>
    <footer className="py-4">
<div className="container-xxl">
  <div className="row">
    <div className="col-4">
      <h4 className="text-white mb-4">Contact Us</h4>
      <div className="footer-link d-flex flex-column">
        <address className="text-white fs-6">
          PMAS Arid Agriculture University Shamsabad, <br /> Muneeb Ahmad, Rawalpindi <br /> Pin Code: 131103
        </address>
        <a href="tel: +92 302 2309111" className="text-white mt-2 d-block mb-1">+92 302 2309111</a>
        <a href="mailto: graphicmx911@gmail.com" className="text-white mt-3 d-block mb-1">graphicmx911@gmail.com</a>
        <div className="social_icons d-flex align-items-center gap-30 mt-3">
          <a href=""><FaLinkedin className="text-white" size={25} /></a>
          <a href=""><FaInstagramSquare className="text-white" size={25} /></a>
          <a href=""><FaGithub className="text-white" size={25} /></a>
          <a href=""><FaYoutube className="text-white" size={25} /></a>
        </div>
      </div>
    </div>
    <div className="col-3">
      <h4 className="text-white mb-4">Information</h4>
      <div className="footer-link d-flex flex-column text-decoration-none">
      <Link className= "text-white py-2 mb-1 " to="/privacy-policy">Privacy Policy</Link>
      <Link className= "text-white py-2 mb-1" to="/refund-policy">Refund Policy</Link>
      <Link className= "text-white py-2 mb-1" to="/shipping-policy">Shipping Policy</Link>
      <Link className= "text-white py-2 mb-1" to="/term-and-condition">Terms & Conditions</Link>
      <Link className= "text-white py-2 mb-1">Blogs</Link>
      </div>
    </div>
    <div className="col-3">
      <h4 className="text-white mb-4">Accounts</h4>
      <div className="footer-link d-flex flex-column">
      <Link className= "text-white py-2 mb-1">About Us</Link>
      <Link className= "text-white py-2 mb-1">Faq</Link>
      <Link className= "text-white py-2 mb-1">Contact</Link>
      </div>
    </div>
    <div className="col-2">
      <h4 className="text-white mb-4">Quick Links</h4>
      <div className="footer-link d-flex flex-column">
      <Link className= "text-white py-2 mb-1">Laptop</Link>
      <Link className= "text-white py-2 mb-1">Headphones</Link>
      <Link className= "text-white py-2 mb-1">Tablets</Link>
      <Link className= "text-white py-2 mb-1">Watch</Link>
      </div>
    </div>
  </div>
</div>
    </footer>
    <footer className="py-4">
      <div className="container xxl">
        <div className="row">
          <div className="col-12">
            <div className="text-center mb-0 text-white">&copy; { new Date().getFullYear()}; Powered By Developers's Corner</div>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer;