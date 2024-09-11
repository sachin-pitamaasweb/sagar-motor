import React from 'react';

const ArrowBack = ({ style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="77"
      height="32"
      viewBox="0 0 77 32"
      fill="none"
      style={style}  // Applies the style object passed via props
    >
      <line
        x1="1.44721"
        y1="15.6584"
        x2="29.6584"
        y2="1.55279"
        stroke={style.color || 'white'}  // Uses color from the style or defaults to white
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="1"
        y1="-1"
        x2="32.541"
        y2="-1"
        transform="matrix(0.894427 0.447214 0.447214 -0.894427 1 15)"
        stroke={style.color || 'white'}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="2"
        y1="16"
        x2="76"
        y2="16"
        stroke={style.color || 'white'}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default ArrowBack;
