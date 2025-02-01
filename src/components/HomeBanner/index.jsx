import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './style.css';

function HomeBanner({ banners }) {
    const navigate = useNavigate();
    const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

    const currentBanner = banners[currentBannerIndex] || {};
    const {
        mediaType = 'image',
        mediaSource = '',
        altText = 'Banner Image',
        title = '',
        description = '',
        buttonText = 'Learn More',
        linkTo = '/',
        isTrue = ''
    } = currentBanner;

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (linkTo) navigate(linkTo);
    };

    const handleNext = () => {
        setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
    };

    const handlePrev = () => {
        setCurrentBannerIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length);
    };

    console.log('Number of Banners:', banners.length); // Debug log

    return (
        <div className="banner">
            {mediaType === 'video' ? (
                <video className="banner-media" autoPlay muted loop playsInline preload="auto">
                    <source src={mediaSource} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ) : (
                <img className="banner-media" src={mediaSource} alt={altText} />
            )}

            {!isTrue.includes('home') && <div className="overlay"></div>}

            <div className="banner-content">
                <div className="banner-text">
                    {title && (
                        <h1 className="banner-title">
                            {title.split(' ').map((word, index) => (
                                <span key={index} className={index % 2 === 1 ? 'banner-title-span' : ''}>
                                    {word}{' '}
                                </span>
                            ))}
                        </h1>
                    )}

                    {description && <p className="banner-description">{description}</p>}

                    {/* ✅ Hide Button if only 1 Banner */}
                    {buttonText && banners.length > 1 && (
                        <button className="learn-more" onClick={handleClick}>
                            {buttonText}
                        </button>
                    )}
                </div>
            </div>

            {/* ✅ Hide Navigation Buttons if Only 1 Banner */}
            {banners.length > 1 && (
                <>
                    <button className="prev-button" onClick={handlePrev}>
                        <ChevronLeft className="icon" />
                    </button>
                    <button className="next-button" onClick={handleNext}>
                        <ChevronRight className="icon" />
                    </button>
                </>
            )}
        </div>
    );
}

HomeBanner.propTypes = {
    banners: PropTypes.arrayOf(
        PropTypes.shape({
            mediaType: PropTypes.oneOf(['video', 'image']),
            mediaSource: PropTypes.string,
            altText: PropTypes.string,
            title: PropTypes.string,
            description: PropTypes.string,
            buttonText: PropTypes.string,
            linkTo: PropTypes.string,
        })
    ).isRequired,
};

export default HomeBanner;
