    import React from 'react';
    import './style.css'; // Import the CSS file

    const ProfileSection = () => {
        return (
            <div className="profile-container">
                <div className="profile-text">
                    <p><strong>Sagar Motors</strong> is a leading <strong>automotive</strong> and <strong>environmental</strong> company, an authorized dealer of <strong>Ashok Leyland</strong> and <strong>Honda 2-Wheelers</strong> since 1999. We manage <strong>11,000 metric tons</strong> of waste daily across India with <strong>1,000+ employees</strong> and an annual turnover of <strong>220 Cr</strong>. Led by <strong>Shri Manohar Kore</strong>, our focus is on <strong>innovation</strong>, <strong>customer satisfaction</strong>, and <strong>community development</strong>.</p>
                </div>
                <div className="profile-image">
                    {/* Use a dummy image here for testing */}
                    <img src={require('../../assets/profile/img-1.png')} alt="Shri Manohar Kore" className="director-photo" />
                    <div className="director-info">
                        <h3>Shri Manohar Kore</h3>
                        <p>Managing Director,<br />Sagar Motors & Shivsagar Motors</p>
                    </div>
                </div>
            </div>
        );
    };

    export default ProfileSection;
