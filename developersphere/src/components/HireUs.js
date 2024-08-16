import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import pics from'./hireus.jpg'
import './HireUs.css'

function HireUs() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const [isTaskDisabled, setTaskDisabled] = useState(true);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    

    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleServiceChange = (event) => {
    // Enable the task field based on the selected service
    setTaskDisabled(false);
    handleChange(event); // Call handleChange to update inputs state
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Validation
    if (!inputs.name || !inputs.email || !inputs.phoneno || !inputs.service || !inputs.task) {
      alert("Please fill in all fields.");
      return;
    }
  
    if (!inputs.email.includes("@")) {
      alert("Invalid email address. Please enter a valid email.");
      return;
    }
  
    if (inputs.phoneno.length > 11) {
      alert("Invalid mobile number. Mobile number should not exceed 11 digits.");
      return;
    }
  
    // If all validations pass, proceed with the API call
    axios.post("http://localhost:80/api/user/save", inputs).then(function (response) {
      console.log(response.data);
      alert("Thanks for your approach. We will contact you for more details.");
      navigate("/");
    });
  };
  

  return (
    <div>
        <div className="imgcont" style={{ backgroundImage: `url(${pics})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '300px' }}>
                {/* Adjust height as needed */}
        </div>

            <div className="hireus">
                <div className="intro">
                    <h1>Hire Us</h1>
                    <p>
                        Developer Sphere delivers cutting-edge IT solutions and development
                        services propelling businesses into the digital forefront. Our expert
                        team combines innovation with expertise to craft solutions that elevate
                        online presence and drive success.
                    </p>
                </div>
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <label>Name: </label>
                        <input type="text" name="name" onChange={handleChange} />
                        <br />
                        <label>Email: </label>
                        <input type="text" name="email" onChange={handleChange} />
                        <br />
                        <label>Mobile: </label>
                        <input type="text" name="phoneno" onChange={handleChange} />
                        <br />
                        <label>Service: </label>
                        <select name="service" onChange={handleServiceChange}>
                        <option value="">Select Service</option>
                        <option value="Ui/Ux Design">Ui/Ux Design</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Advertising Ideas">Advertising Ideas</option>
                        </select>
                        <br />
                        <label>Task: </label>
                        <select name="task" onChange={handleChange} disabled={isTaskDisabled}>
                        <option value="">Select Task</option>
                        {inputs.service === "Ui/Ux Design" && (
                            <>
                            <option value="Website Design">Website Design</option>
                            <option value="Mobile App Interfaces">Mobile App Interfaces</option>
                            <option value="User Experience Consultations">User Experience Consultations</option>
                            <option value="Interaction Design">Interaction Design</option>
                            <option value="Wireframing and Prototyping">Wireframing and Prototyping</option>
                            <option value="Graphic Design">Graphic Design</option>
                            </>
                        )}
                        {inputs.service === "Web Development" && (
                            <>
                            <option value="Front-End Development">Front-End Development</option>
                            <option value="Back-End Development">Back-End Development</option>
                            <option value="Full-Stack Development">Full-Stack Development</option>
                            <option value="Responsive Web Design">Responsive Web Design</option>
                            </>
                        )}
                        {inputs.service === "Digital Marketing" && (
                            <>
                            <option value="Search Engine Optimization (SEO)">Search Engine Optimization</option>
                            <option value="Social Media Management">Social Media Management</option>
                            <option value="Content Marketing">Content Marketing</option>
                            <option value="E-mail Marketing">E-mail Marketing</option>
                            <option value="Analytics and Performance Tracking">Analytics and Performance Tracking</option>  
                            </>
                        )}
                        {inputs.service === "Advertising Ideas" && (
                            <>
                            <option value="Campaign Startegies">Campaign Startegies</option>
                            <option value="Creative Concept Development">Creative Concept Development</option>
                            <option value="Targeted Marketing Plans">Targeted Marketing Plans</option>
                            <option value="Branding and Identity">Branding and Identity</option>
                            <option value="Copywriting and Content Creation">Copywriting and Content Creation</option>
                            <option value="Market Reasearch">Market Reasearch</option>
                            </>
                        )}         
                        </select>
                        <br />
                        <button>Save</button>
                    </form>
                </div>
            </div>
    </div>
  );
}

export default HireUs;
