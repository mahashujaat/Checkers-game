// App.js
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Services from './components/Services';
import EditUser from './components/EditUser';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import HireUs from './components/HireUs';
import Footer from './Footer';
import ListUser from './components/ListUser';
// Update the import path for the logo image
import logo from './DeveloperSphere.png';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <nav>
          
          <ul>
          <img src={logo} alt="Logo" />
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/hire-us">Hire Us</Link>
            </li>
            <li>
              <Link to="/list-users">Our Clients</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>

          </ul>
        </nav>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/list-users" element={<ListUser />} />
          <Route path="/user/:id/edit" element={<EditUser />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/hire-us" element={<HireUs />} />
        </Routes>
        <div>
        <Footer /> {/* Add this line */}
        </div>
      </BrowserRouter>
    </div>
  );
}





 






export default App;
