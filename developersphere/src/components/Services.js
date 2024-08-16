import React from 'react';
import './Services.css';
import pics from './services.jpg';

function Services() {

    return (
        <div>
            <div className="imgcont" style={{ backgroundImage: `url(${pics})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '300px' }}>
                {/* Adjust height as needed */}
            </div>

            <div className="services">
                <div className="service">
                    <h1>Services</h1>
                    <p>
                        Developer Sphere delivers cutting-edge IT solutions and development
                        services propelling businesses into the digital forefront. Our expert
                        team combines innovation with expertise to craft solutions that elevate
                        online presence and drive success.
                    </p>
                    <div className="service-item">
                        <h4>UI/UX Design</h4>
                        <p>
                            Crafting seamless user experiences is our forte in UI/UX design. Our IT
                            company specializes in creating intuitive interfaces that marry
                            functionality with aesthetics. Elevate your digital presence with our
                            services, where user-centric design meets cutting-edge technology.
                        </p>
                    </div>

                    <div className="service-items">
                        <h4>Web Development</h4>
                        <p>
                            Elevate your online presence with our bespoke web development designs.
                            We craft tailored solutions that not only meet but exceed your unique
                            business needs, ensuring a lasting impact in the digital landscape.
                        </p>
                    </div>

                    <div className="services-item">
                        <h4>Digital Marketing</h4>
                        <p>
                            Elevate your brand through data-driven digital marketing strategies. Our
                            IT company leverages analytics to refine and optimize campaigns, ensuring
                            every marketing effort is not just visible but measurably effective,
                            maximizing your return on investment.
                        </p>
                    </div>

                <div className="services-items">
                        <h4>Advertising Ideas</h4>
                        <p>
                            Harness the power of strategic advertising to propel your IT solutions
                            forward. Our team crafts compelling campaigns that resonate with your
                            target audience, maximizing visibility and solidifying your position as a
                            leader in the digital landscape.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
