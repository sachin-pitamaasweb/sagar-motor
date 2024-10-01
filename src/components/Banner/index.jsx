// import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.css';

function Banner({ mediaType, mediaSource, altText, title, description, buttonText, linkTo }) {
    const navigate = useNavigate();

    // Handle the button click and navigate to the specified link
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        navigate(linkTo);
    };

    return (
        <div className="banner">
            {/* Render video or image based on the mediaType prop */}
            {mediaType === 'video' ? (
                <video className="banner-media" autoPlay muted loop>
                    <source src={mediaSource} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ) : (
                <img className="banner-media" src={mediaSource} alt={altText} />
            )}

            {/* Overlay to create a darker background effect */}
            <div className="overlay"></div>
            
            {/* Banner content */}
            <div className="banner-content">
                <div className="banner-text">
                    {/* Dynamic title and description */}
                    <h1 className="banner-title">
                        {title.split(' ').map((word, index) => (
                            <span key={index} className={index % 2 === 1 ? 'banner-title-span' : ''}>{word} </span>
                        ))}
                    </h1>
                    <p className="banner-description">{description}</p>
                    
                    {/* Dynamic button text */}
                    <button className="learn-more" onClick={handleClick}>
                        {buttonText}
                    </button>
                </div>
            </div>
        </div>
    );
}

// Define propTypes for the component
Banner.propTypes = {
    mediaType: PropTypes.oneOf(['video', 'image']).isRequired,
    mediaSource: PropTypes.string.isRequired,
    altText: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    buttonText: PropTypes.string,
    linkTo: PropTypes.string,
};

// Define default props
Banner.defaultProps = {
    altText: 'Banner media',
    title: 'Innovating MOBILITY, Sustaining the FUTURE',
    description: 'Connecting Communities Through Quality Vehicles and Sustainable Solutions',
    buttonText: 'Learn More',
    linkTo: '/about',
};

export default Banner;
