import React from 'react';

//custom icons
// import ArrowBottomtoTop from '../customIcon/ArrowBottomtoTop';
// import ToptoBottom from '../customIcon/ToptoBottom';

import './style.css';

const SafetyGrid = () => {
  return (
    <div className="safety-container">
      <div className="container-safety">
        <div className="safety-grid">
          <div className="safety-item" style={{ animationDelay: '0.2s' }}>
            <img src={require('../../assets/safety/img-1.png') || "https://via.placeholder.com/80"} alt="PPE Kits" />
            <h3>PPE Kits</h3>
            <p>Mandatory for all staff and contractors</p>
          </div>
          <div className="safety-item" style={{ animationDelay: '0.4s' }}>
            <img src={require('../../assets/safety/img-2.png') || "https://via.placeholder.com/80"} alt="Regular Audits" />
            <h3>Regular Audits</h3>
            <p>Weekly safety audits and monthly inspections</p>
          </div>
          <div className="safety-item" style={{ animationDelay: '0.6s' }}>
            <img src={require('../../assets/safety/img-3.png') || "https://via.placeholder.com/80"} alt="Training Programs" />
            <h3>Training Programs</h3>
            <p>Comprehensive safety training for all employees</p>
          </div>
        </div>
        <div className="central-text">Safety First, Compliance Always</div>
        <div className="safety-grid">
          <div className="safety-item" style={{ animationDelay: '0.8s' }}>
            <img src={require('../../assets/safety/img-4.png') || "https://via.placeholder.com/80"} alt="NGT Guidelines" />
            <h3>NGT Guidelines</h3>
            <p>Operations follow NGT environmental standards</p>
          </div>
          <div className="safety-item" style={{ animationDelay: '1s' }}>
            <img src={require('../../assets/safety/img-5.png') || "https://via.placeholder.com/80"} alt="Penalties" />
            <h3>Penalties</h3>
            <p>Enforced for any safety or compliance violations</p>
          </div>
          <div className="safety-item" style={{ animationDelay: '1.2s' }}>
            <img src={require('../../assets/safety/img-6.png') || "https://via.placeholder.com/80"} alt="Insurance Coverage" />
            <h3>Insurance Coverage</h3>
            <p>Workers are protected with ESI and Mediclaim</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetyGrid;
