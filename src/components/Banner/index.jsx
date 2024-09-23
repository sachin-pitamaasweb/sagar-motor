import React from 'react';
import PropTypes from 'prop-types';
import './style.css'; // Import the CSS file

function Banner({ mediaType, mediaSource, altText }) {
    return (
        <div className="banner">
            {mediaType === 'video' ? (
                <video className="banner-media" autoPlay muted loop>
                    <source src={mediaSource} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ) : (
                <img className="banner-media" src={mediaSource} alt={altText} />
            )}
            <div className="overlay"></div>
            <div className="banner-content">
                <div className="banner-text" >
                    <h1 className="banner-title">Innovating <span className='banner-title-span'>MOBILITY</span>, Sustaining the <span className='banner-title-span'>FUTURE</span></h1>
                    <p className="banner-description">Connecting Communities Through Quality Vehicles and Sustainable Solutions</p>
                    <button className="learn-more">Learn More</button>
                </div>
            </div>
        </div>
    );
}

// PropTypes to validate the component's props
Banner.propTypes = {
    mediaType: PropTypes.oneOf(['video', 'image']).isRequired,
    mediaSource: PropTypes.string.isRequired,
    altText: PropTypes.string,
};

Banner.defaultProps = {
    altText: 'Banner media',
};

export default Banner;
