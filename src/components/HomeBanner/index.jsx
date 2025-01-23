// Banner.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.css';

function HomeBanner({ banners }) {
    const navigate = useNavigate();
    const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

    // Destructure current banner details
    const { mediaType, mediaSource, altText, title, description, buttonText, linkTo } = banners[currentBannerIndex];

    // Handle the button click and navigate to the specified link
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        navigate(linkTo);
    };

    // Handle next and previous button click
    const handleNext = () => {
        setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
    };

    const handlePrev = () => {
        setCurrentBannerIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length);
    };

    return (
        <div className="banner">
            {/* Render video or image based on the mediaType prop */}
            {mediaType === 'video' ? (
                <video className="banner-media" autoPlay muted loop playsInline>
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

            {/* Next and Previous Buttons */}
            <button className="prev-button" onClick={handlePrev}>←</button>
            <button className="next-button" onClick={handleNext}>→</button>
        </div>
    );
}

// Define propTypes for the component
HomeBanner.propTypes = {
    banners: PropTypes.arrayOf(
        PropTypes.shape({
            mediaType: PropTypes.oneOf(['video', 'image']).isRequired,
            mediaSource: PropTypes.string.isRequired,
            altText: PropTypes.string,
            title: PropTypes.string,
            description: PropTypes.string,
            buttonText: PropTypes.string,
            linkTo: PropTypes.string,
        })
    ).isRequired,
};

export default HomeBanner;
