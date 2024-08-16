// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Developer Sphere</h2>
        <p>Email: info.developersphere@gmail.com</p>
        <p>Phone: +92 3362857945</p>
      </div>
      <div className='links'>
        <h3>Quick Links</h3>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/about-us">About</Link></li>
          <li><Link to="/contact-us">Contact</Link></li>
          <li><Link to="/hire-us">Hire Us</Link></li>
          <li><Link to="/list-users">Clients</Link></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
