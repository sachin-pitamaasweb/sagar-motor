import React, { useState, useEffect, useCallback } from 'react';
import './Media.css';

import EventGallery from './EventGallery';

const Media = () => {
    const initialImages = [
        "https://img.freepik.com/free-photo/female-wedding-planner-working-with-bride-groom_23-2150167236.jpg",
        "https://img.freepik.com/free-photo/people-kitchen_144627-39332.jpg",
        "https://img.freepik.com/free-photo/people-kitchen_144627-39272.jpg"
    ];

    const [bannerSrc, setBannerSrc] = useState("https://img.freepik.com/free-photo/aerial-view-green-forest_144627-45271.jpg");
    const [eventImages, setEventImages] = useState(initialImages);

    const handleImageClick = useCallback((src) => {
        setEventImages(prevImages => {
            const newImages = prevImages.filter(image => image !== src);
            return [...newImages, bannerSrc];
        });
        setBannerSrc(src);
    }, [bannerSrc]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (eventImages.length > 0) {
                handleImageClick(eventImages[0]);
            }
        }, 5000);

        return () => clearInterval(interval);
    }, [eventImages, handleImageClick]);

    return (
        <>  <div className="media-container">
            <img
                src={bannerSrc}
                alt="Media Banner"
                className="banner-image"
            />

            <div className="latest-events">
                <h2>Latest Events</h2>
                <div className="event-images">
                    {eventImages.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`Event ${index + 1}`}
                            className="event-thumbnail"
                            onClick={() => handleImageClick(src)}
                        />
                    ))}
                </div>
            </div>
        </div>
            <EventGallery />
        </>
    );
};

export default Media;
