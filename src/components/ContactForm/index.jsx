import React from 'react';
import { Grid, Box } from '@mui/material'; // Importing MUI Grid and Box
import './style.css'; // Import the external CSS

const ContactForm = () => {
    return (
        <Box className="contact-form-container">
            <h2 className="contact-form-heading">
                Your Trusted Partner, Always Within Reach
            </h2>

            <Grid container spacing={3} alignItems="center">
                {/* Form Section: 8 columns */}
                <Grid item xs={12} sm={8}>
                    <form className="contact-form">
                        <div className="contact-form-row">
                            <input
                                type="text"
                                placeholder="First Name"
                                className="contact-input"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="contact-input"
                                required
                            />
                        </div>
                        <input
                            type="tel"
                            placeholder="Phone No."
                            className="contact-input full-width"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="contact-input full-width"
                            required
                        />
                        <textarea
                            placeholder="Message"
                            className="contact-textarea"
                            required
                        ></textarea>
                        <button type="submit" className="contact-submit-button">
                            SEND
                        </button>
                    </form>
                </Grid>

                {/* Image Section: 4 columns */}
                <Grid item xs={12} sm={4}>
                    <Box className="contact-image">
                        <img
                            src={'https://res.cloudinary.com/dtivafy25/image/upload/v1726654760/1321231131_glgvqm.gif' || "https://via.placeholder.com/300x300.png?text=Paper+Plane"}
                            alt="Paper Plane"
                        />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ContactForm;
