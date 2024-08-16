import React from 'react';
import pics from './contactus.jpg';
import './ContactUs.css';

function ContactUs() {
    return (
        <div>
            <div className="imgcont" style={{ backgroundImage: `url(${pics})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '300px' }}>
                {/* Adjust height as needed */}
            </div>

            <div className="contactus">
                <div className="contactus">
                    <h1>Contact Us</h1>
                    <p>
                        Developer Sphere delivers cutting-edge IT solutions and development
                        services propelling businesses into the digital forefront. Our expert
                        team combines innovation with expertise to craft solutions that elevate
                        online presence and drive success.
                    </p>

                    {/* Buttons for call and email */}
                    <div className="button-container">
                        <div>
                        <button onClick={() => window.location.href = 'tel:+923303913048'}>Call Us: +923303913048</button>
                        </div>
                        <div>
                        <button onClick={() => window.location.href = 'mailto:maha.shujaat567@gmail.com'}>Email Us: maha.shujaat567@gmail.com</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
