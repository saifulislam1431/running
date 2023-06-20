import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../assets/logo/running.png";
import icon1 from "../../../assets/icons/facebook.png";
import icon2 from "../../../assets/icons/instagram.png";
import icon3 from "../../../assets/icons/linkedin.png";
import icon4 from "../../../assets/icons/twitter.png";
const Footer = () => {
    return (
<footer>
<div className="footer p-10 bg-primary bg-opacity-10 text-base-content">
  <div>
  <Link to="/">
        <img src={logo} alt="Logo" className='w-14'/>
        <p className='relative brand -top-1'>Running...</p>
        <h1 className='secTitle font-extrabold tracking-widest'>Every Step Matter.</h1>
    </Link>
    
  </div> 
  <div>
    <span className="footer-title">Brand</span> 
    <Link to="/"  className="link link-hover font-semibold">Nike</Link> 
    <Link to="/"  className="link link-hover font-semibold">Adidas</Link> 
    <Link to="/"  className="link link-hover font-semibold">Reebok</Link> 
    <Link to="/"  className="link link-hover font-semibold">Puma</Link>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <Link to="/shop"  className="link link-hover font-semibold">Shop</Link> 
    <Link to="/about"  className="link link-hover font-semibold">About us</Link> 
    <Link to="/contact"  className="link link-hover font-semibold">Contact</Link> 
    <Link to="/"  className="link link-hover font-semibold">Press kit</Link>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <Link to="/"  className="link link-hover font-semibold">Terms of use</Link> 
    <Link to="/"  className="link link-hover font-semibold">Privacy policy</Link> 
    <Link to="/"  className="link link-hover font-semibold">Cookie policy</Link>
  </div>

  <div>
    <span className="footer-title">Follow Us</span> 
    <div className='flex space-x-3'>
        <img src={icon1} alt="" />
        <img src={icon2} alt="" />
        <img src={icon3} alt="" />
        <img src={icon4} alt="" />
    </div>
  </div>
</div>
<div className="footer footer-center p-4 bg-primary bg-opacity-10 text-base-content border-t-2 border-primary">
    <p>Copyright © 2023 - All right reserved by Running Shop LTD.</p>
  </div>
</footer>
    );
};

export default Footer;