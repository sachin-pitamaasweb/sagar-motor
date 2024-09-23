import React from 'react';
import { motion } from 'framer-motion';
import './style.css';

const textVariants = {
  initial: { opacity: 0, y: 20 },
  animate: (i) => ({
    opacity: [0, 1, 1, 0], // Fade in and out
    y: [20, 0, 0, -20], // Move up and down
    transition: {
      duration: 1,
      ease: 'easeInOut',
      delay: i * 0.2, // Delay each letter
      repeat: Infinity, // Loop the animation
      repeatType: 'loop',
    },
  }),
};

const Loader = () => {
  const letters = "Loading...".split(""); // Split the text into an array of letters

  return (
    <div className="loader-container">
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          custom={index}
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="loader-text"
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
};

export default Loader;
