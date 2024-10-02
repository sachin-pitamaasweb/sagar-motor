import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './style.css';

// Updated Image URLs (using larger placeholders for illustration purposes)
const images = [
   require("../../assets/Projects/img-1.png") || "https://via.placeholder.com/1000x600?text=1",
   require("../../assets/Projects/img-2.png") || "https://via.placeholder.com/1000x600?text=2",
   require("../../assets/Projects/img-3.png") ||"https://via.placeholder.com/1000x600?text=3",
   require("../../assets/Projects/img-4.png") ||"https://via.placeholder.com/1000x600?text=4",
   require("../../assets/Projects/img-5.png") ||"https://via.placeholder.com/1000x600?text=5",
];

export default function EnhancedTiltedCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const getImageIndex = (index) => {
    if (index < 0) return images.length + index;
    if (index >= images.length) return index - images.length;
    return index;
  };

  return (
    <div className="EnhancedCarousel-container">
      <div className="EnhancedCarousel-inner">
        <AnimatePresence initial={false}>
          {[-2, -1, 0, 1, 2].map((offset) => {
            const index = getImageIndex(currentIndex + offset);
            return (
              <motion.div
                key={index}
                className="EnhancedCarousel-item"
                initial={{
                  x: offset * 600,
                  rotateY: offset * 60,
                  scale: 0.5,
                  opacity: 0,
                }}
                animate={{
                  x: offset * 600,
                  rotateY: offset * 60,
                  scale: 1 - Math.abs(offset) * 0.2,
                  opacity: 1 - Math.abs(offset) * 0.3,
                  zIndex: 5 - Math.abs(offset),
                }}
                exit={{
                  x: offset * 600,
                  rotateY: offset * 60,
                  scale: 0.5,
                  opacity: 0,
                }}
                transition={{ duration: 0.5 }}
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1500px',
                }}
              >
                <img
                  src={images[index]}
                  alt={`Landscape ${index + 1}`}
                  className="EnhancedCarousel-image"
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
