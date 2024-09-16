import React, { useState } from "react";
import axios from 'axios';
import './Contact.css'
import yourImg  from "./myimg.png";

const Contact =()=>{

    const[formData, setFormData] = useState({
        fullName: '',
        email:'',
        message:''
    });

    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };



    const handelsubmit = async (e) =>{
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:5000/contacts/contactUS',formData);
            alert("message send successfully!");
            setFormData({
                fullName: '',
                email: '',
                message: ''
            });
        }catch(error){
            alert("There was an error  sending the message.");
        }  
    };

    return ( 
    <section className="contact-section">
        <div className="contact-form">
            <h2>Contact Me</h2>
            <form onSubmit={handelsubmit}>
                <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input 
                    type="text"
                    name = "fullName"
                    id="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required />
                </div>
                <div className="form-group">
                    <label htmlFor="fullName"> Email</label>
                    <input 
                    type="email"
                    name = "email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required />
                </div>
                <div className="form-group">
                    <label htmlFor="fullName">Message</label>
                    <input 
                    name = "message"
                    id="fullName"
                    value={formData.message}
                    onChange={handleChange}
                    required />
                </div>

                <button type="submit" className="submit-button">send Message</button>
            </form>
        </div>
        <div className="contact-image">
            <img src={yourImg} alt="Contact" />
        </div>
    </section>
     );
}

export default Contact;