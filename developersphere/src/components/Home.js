// Home.js
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file
import pic from './coding.jpg';
import Services from './Services.js';
import AboutUs from './AboutUs.js';
import ContactUs from './ContactUs.js';
import HireUs from './HireUs.js';
function Home() {
  return (
    <div>
      <div className="container"> {/* Use className instead of style */}
        <div className="quote">
          <h1>Your Success, Our Commitment</h1>
          <h4>Delivering Excellence in IT Services</h4>
          <p>Embark on a journey to success with our unwavering commitment to excellence in IT services. At Developer Sphere, we don't just provide solutions, we empower your business with cutting-edge technologies, ensuring your success becomes our shared achievement.</p>
        </div>
        <div className="imgcontt" style={{ backgroundImage: `url(${pic})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '500px', width: '400px' }}>
                {/* Adjust height as needed */}
        </div>
      
      </div>

      <div className="services">
        <div className="service">
          <h1>Services</h1>
          <p>Developer Sphere delivers cutting-edge IT solutions and development services propelling businesses into the digital forefront. Our expert team combines innovation with expertise to craft solutions that elevate online presence and drive success.</p>
          <button>
          <Link to="/Services">
            See More
          </Link>
          </button>
        </div>
      </div>
      <div className="Aboutus">
        <div className="Aboutus">
          <h1>AboutUs</h1>
          <h4>Elevate Your Digital Future: Connect with Us Today!</h4>
          <p>Have questions or ready to embark on a transformative journey? Our dedicated team is just a message away. Contact us now, and let's shape the future of your digital presence together.</p>
          <button>
          <Link to="/about-us">
            AboutUs
          </Link>
          </button>
        </div>
      </div>
      <div className="Contactus">
        <div className="ContactUs">
          <h1>Contact Us</h1>
          <h4>Elevate Your Digital Future: Connect with Us Today!</h4>
          <p>Have questions or ready to embark on a transformative journey? Our dedicated team is just a message away. Contact us now, and let's shape the future of your digital presence together.</p>
          <button>
          <Link to="/contact-us">
            Contact Us 
          </Link>
          </button>
        </div>
      </div>
      <div className="Hireus">
        <div className="HireUs">
          <h1>Hire Us</h1>
          
          <h4>Innovation Leaders, Dedication to Excellence, Proven Expertise</h4>
          <p>Unlock your business's full potential with our IT expertise. We're not just a team; we're your strategic partners in innovation</p>
          
          <button>
          <Link to="/hire-us">
            Hire Us 
          </Link>
          </button>
        </div>
      </div>
    </div>  
  );
}

export default Home;
