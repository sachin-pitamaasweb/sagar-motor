import React from 'react';
import './style.css'; // Import the external CSS

const ContactInfo = () => {
    return (
        <div className="contact-info-container">
            <div className="contact-info-section">
                <p className="contact-label">PHONE NO.</p>
                <p className="contact-value">+1 (555) 123-4567</p>
            </div>

            <div className="contact-info-section">
                <p className="contact-label">ADDRESS</p>
                <p className="contact-value">123 Main St, Springfield, USA</p>
            </div>

            <div className="contact-info-section">
                <p className="contact-label">EMAIL</p>
                <p className="contact-value">contact@sagarmotors.com</p>
            </div>
        </div>
    );
};

export default ContactInfo;
