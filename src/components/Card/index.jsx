// Card.js
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './style.css';

const Card = ({ title, description, image }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <>
            <div className="card-container-motion">
                <motion.div
                    ref={ref}
                    className="horizontal-card"
                    initial={{ opacity: 0, x: -50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    <div className="card-image-container">
                        <img src={image} alt={title} className="card-image" />
                    </div>
                    <div className="card-content">
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default Card;
