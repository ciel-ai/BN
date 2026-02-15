import React, { useState } from 'react';
import Button from './Button'; // Assuming you have a reusable Button component
import './PopupContactForm.css';

const PopupContactForm = ({ onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic Phone Validation
        const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;
        if (formData.phone && !phoneRegex.test(formData.phone)) {
            alert('Please enter a valid phone number.');
            return;
        }

        // Here you would typically send the data to your backend
        alert('Thank you for contacting us! We will get back to you shortly.');
        onClose();
    };

    return (
        <div className="popup-overlay" onClick={onClose}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                <button className="popup-close" onClick={onClose}>&times;</button>

                <div className="popup-header">
                    <h2>Get in Touch</h2>
                    <p>Have questions? We'd love to help you.</p>
                </div>

                <form className="popup-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="popup-name">Name</label>
                        <input
                            type="text"
                            id="popup-name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="popup-phone">Phone Number</label>
                        <input
                            type="tel"
                            id="popup-phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 98765 43210"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="popup-email">Email</label>
                        <input
                            type="email"
                            id="popup-email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="popup-message">Message</label>
                        <textarea
                            id="popup-message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="popup-submit">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default PopupContactForm;
