import React from 'react';
import './style.css';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import RecyclingIcon from '@mui/icons-material/Recycling';
import BusinessIcon from '@mui/icons-material/Business';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PeopleIcon from '@mui/icons-material/People';

import EnhancedTiltedCarousel from '../../components/EnhancedTiltedCarousel';

const Infrastructure = () => {
    return (
       <>
       <EnhancedTiltedCarousel />
        <div className="Infrastructure-container">
            <h1 className="Infrastructure-title">Our Infrastructure</h1>
            <div className="Infrastructure-grid">
                <img src={require("../../assets/Projects/img-1.png") || "https://via.placeholder.com/600x400"}  alt="Sagar Motors Facility" className="Infrastructure-facility-image" />
                <div>
                    <h2 className="Infrastructure-facility-title">State-of-the-Art Facilities</h2>
                    <p className="Infrastructure-facility-description">
                        At Sagar Motors, we pride ourselves on our cutting-edge infrastructure that enables us to deliver top-notch services in both the automotive and environmental sectors. Our facilities are designed to support our diverse operations, from vehicle sales and service to waste management.
                    </p>
                    <div>
                        <span className="Infrastructure-badge">Automotive Showrooms</span>
                        <span className="Infrastructure-badge">Service Centers</span>
                        <span className="Infrastructure-badge">Waste Management Plants</span>
                        <span className="Infrastructure-badge">Administrative Offices</span>
                    </div>
                </div>
            </div>

            <div className="Infrastructure-grid Infrastructure-grid-3">
                <div className="Infrastructure-card">
                    <h3 className="Infrastructure-card-title"><DirectionsCarIcon /> Automotive Division</h3>
                    <p>Our state-of-the-art showrooms and service centers for Ashok Leyland and Honda 2-Wheelers provide customers with an exceptional experience.</p>
                </div>
                <div className="Infrastructure-card">
                    <h3 className="Infrastructure-card-title"><RecyclingIcon /> Waste Management Facilities</h3>
                    <p>Advanced waste processing plants capable of managing 11,000 metric tons of waste daily across various locations in India.</p>
                </div>
                <div className="Infrastructure-card">
                    <h3 className="Infrastructure-card-title"><BusinessIcon /> Corporate Headquarters</h3>
                    <p>Our modern corporate office houses our administrative and management teams, fostering innovation and strategic planning.</p>
                </div>
            </div>

            <div className="Infrastructure-highlights">
                <h2>Key Infrastructure Highlights</h2>
                <ul>
                    <li>Multiple automotive showrooms across the region</li>
                    <li>Fully equipped service centers for vehicle maintenance and repair</li>
                    <li>Large-scale waste management plants with modern recycling technology</li>
                    <li>Efficient logistics network for waste collection and transportation</li>
                    <li>Training facilities for continuous employee skill development</li>
                    <li>Research and development center for environmental innovations</li>
                </ul>
            </div>

            <div className="Infrastructure-presence">
                <h2 >Our Presence</h2>
                <p><LocationOnIcon /> Multiple locations across India</p>
            </div>

            <div className="Infrastructure-team-card">
                <h2><PeopleIcon /> Our Team</h2>
                <p>Our infrastructure is supported by a passionate and skilled team, dedicated to ensuring smooth operations and achieving the highest levels of customer satisfaction.</p>
                <p><strong>Annual Turnover: ₹220 Crore</strong></p>
            </div>
        </div>
       </>
    );
};

export default Infrastructure;
