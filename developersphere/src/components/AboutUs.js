import './AboutUs.css'
import pics from './aboutus.jpg'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Services from './Services.js';
import HireUs from './HireUs.js';
function AboutUs() {
    return(
        <div>
            <div className="imgcont" style={{ backgroundImage: `url(${pics})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '300px' }}>
                {/* Adjust height as needed */}
            </div>
            <div className="Aboutus">
                
                
                <h1>AboutUs</h1>
                <h4> Empowering Growth Through Motivation and Innovation </h4>
                <p> In the dynamic world of the internet, trust is everything. We're not just service providers; we're committed allies in your digital journey. Think of us as partners crafting solutions that not only meet but exceed expectations. Let's embark on a journey together, navigating the online landscape and propelling your growth to new heights.</p>
            <div className="aboutuss-item">
                <h4>Who are we?</h4>
                
                <p>
                    At Developersphere, we are passionate about creating exceptional
                    digital experiences.
                    We are a team of skilled professionals specializing in web development,
                    web designing, graphic designing, UI/UX, prototyping, full stack development
                    digital marketing, and advertising ideas.
                    With our expertise and dedication, we strive to bring your
                    vision to life and help your business thrive in the online world
                </p>
                <button>
                <Link to="/Services">
                     Services 
                </Link>
                </button>
            </div>
            <div className="aboutus-item">
                <h4>Our Mission</h4>
                
                <p>
                Our mission is to provide top-notch solutions tailored to your specific needs.
                Whether you're a startup looking to establish your online presence or
                an established business seeking to revamp your website,
                we've got you covered.
                We believe in the power of collaboration and
                work closely with our clients to understand their goals,
                ensuring that every project we
                undertake is a true reflection of their brand identity.
                </p>
            </div>
            <div className="aboutus-item">
                
                <h4> Why Us?</h4>
                <p>
                What sets us apart is our commitment to delivering high-quality results on time and within budget.
                We stay up-to-date with the latest industry trends and technologies, constantly honing our skills to provide cutting-edge solutions.
                With our attention to detail, creativity, and technical expertise,
                we strive to exceed your expectations and create a digital presence that leaves a lasting impression.</p>
            </div>

            <p className="last-paragraph">
            <strong>
              So, if you're ready to take your online presence to the next
              level, trust Developersphere to be your partner in success. Let's
              collaborate and create something amazing together!
            </strong>
            </p>
            <button>
            <Link to="/HireUs">
                Hire Us Now 
            </Link>
            </button>
            </div>
        </div>
        
    )
}

export default AboutUs;