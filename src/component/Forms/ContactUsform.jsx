import React, { useState } from 'react';
import './ContactUsform.css'; // Import the CSS for the form
import { FaArrowRight } from "react-icons/fa6";
import toast, { Toaster } from 'react-hot-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Sending message...");

    try {
        const response = await fetch('https://xeltratech.onrender.com/contact', { 
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });

        console.log("res", response);

        if (response.ok) {
            console.log('Form submitted successfully!');
            setFormData({ name: '', email: '', phone: '', message: '' });
            toast.dismiss(toastId);
            toast.success("Message sent successfully! Our team will contact you shortly", { id: toastId });
        } else {
            console.error('Error submitting form:', response.status);
            toast.dismiss(toastId); // Stop loading if there's an error
            toast.error("Failed to send message. Please try again.");
        }
    } catch (error) {
        console.error('Error submitting form:', error);
        toast.dismiss(toastId); // Stop loading on error
        toast.error("Something went wrong. Please try again later.");
    }
};


  return (
    <form onSubmit={handleSubmit} className='form'>
    <div className='maindivcontact'>
            <div id="">
                <label htmlFor="name">Name:</label><br />
                <input type="text"  id='name' name="name" value={formData.name} onChange={handleChange} required /><br /><br />
            </div>
            <div id="namediv">
                <label htmlFor="email">Email:</label><br />
                <input type="text"  id='email' name="email" value={formData.email} onChange={handleChange} required /><br /><br />
            </div>
            
            <div id="namediv">
                 <label htmlFor="phone">Phone Number:</label><br />
                 <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required /><br /><br />
            </div>
            
           
      </div>
    
      <div id="messagediv">
            <label htmlFor="message">Message:</label><br />
            <textarea id="message" name="message" rows="1" value={formData.message} onChange={handleChange}  required />
      </div>
      

      <button id='button' type="submit">
        <div className='messagehead'>
            <div className='messagebutton'>Leave us a Message</div>
            <FaArrowRight/>
        </div>
      </button>
    </form>
  );
};

export default ContactForm;