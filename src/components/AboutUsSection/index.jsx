import React from 'react';
import { Grid, Box } from '@mui/material';
import './style.css'; // Import the external CSS file

const AboutUsSection = () => {
    return (
        <Box className="about-container">
            {/* Heading Section */}
            <h2 className="about-heading">
                Steering Toward a Brighter, Greener Future
            </h2>

            {/* MUI Grid for responsive layout */}
            <Grid container spacing={3} justifyContent="center">
                {/* Customer Satisfaction */}
                <Grid item xs={12} sm={4}>
                    <Box className="feature">
                        <img
                            src={require("../../assets/aboutus/img-1.png") || "https://via.placeholder.com/200"}
                            alt="Customer Satisfaction"
                            className="feature-icon"
                        />
                        <h3 className="feature-title">Customer Satisfaction</h3>
                        <p className="feature-description">
                            We are dedicated to meeting and exceeding the expectations of our customers through quality products and services.
                        </p>
                    </Box>
                </Grid>

                {/* Innovation */}
                <Grid item xs={12} sm={4}>
                    <Box className="feature">
                        <img
                            src={require("../../assets/aboutus/img-2.png") || "https://via.placeholder.com/200"}
                            alt="Innovation"
                            className="feature-icon"
                        />
                        <h3 className="feature-title">Innovation</h3>
                        <p className="feature-description">
                            We continuously seek new ways to improve our services and deliver value to our customers.
                        </p>
                    </Box>
                </Grid>

                {/* Community Development */}
                <Grid item xs={12} sm={4}>
                    <Box className="feature">
                        <img
                            src={require("../../assets/aboutus/img-3.png") || "https://via.placeholder.com/200"}
                            alt="Community Development"
                            className="feature-icon"
                        />
                        <h3 className="feature-title">Community Development</h3>
                        <p className="feature-description">
                            We are committed to contributing to the well-being of the communities we serve, both through our business practices and social initiatives.
                        </p>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AboutUsSection;
