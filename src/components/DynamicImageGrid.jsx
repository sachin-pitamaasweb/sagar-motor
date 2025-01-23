import React, { useEffect } from 'react';
import './DynamicImageGrid.css';

const DynamicImageGrid = () => {
  // Array data with images and alt text
  const imageData = [
    {
      src: 'https://via.placeholder.com/300x200.png?text=Placeholder',
      alt: 'Dummy image',
    },
    {
      src: 'https://via.placeholder.com/300x200.png?text=Placeholder',
      alt: 'Industrial facility with silos',
    },
    {
      src: 'https://via.placeholder.com/300x200.png?text=Placeholder',
      alt: 'Workers spreading rice',
    },
    {
      src: 'https://via.placeholder.com/300x200.png?text=Placeholder',
      alt: 'People working in a field',
    },
    {
      src: 'https://via.placeholder.com/300x200.png?text=Placeholder',
      alt: 'Workers in a covered area',
    },
  ];

  useEffect(() => {
    const imageGrid = document.getElementById('imageGrid');

    // Function to dynamically create image grid items
    imageData.forEach((image, index) => {
      const itemDiv = document.createElement('div');
      itemDiv.classList.add('item');

      const imgElement = document.createElement('img');
      imgElement.src = image.src;
      imgElement.alt = image.alt;

      // Assign dynamic classes based on index
      if (index % 5 === 0) {
        imgElement.classList.add('same-first-last-height', 'expanded-bottom-to-top-1');
      } else if (index % 5 === 1) {
        imgElement.classList.add('img-medium');
      } else if (index % 5 === 2) {
        imgElement.classList.add('small-images');
      } else if (index % 5 === 3) {
        imgElement.classList.add('img-extra-small');
      } else if (index % 5 === 4) {
        imgElement.classList.add('same-first-last-height');
      }

      itemDiv.appendChild(imgElement);
      imageGrid.appendChild(itemDiv);
    });
  }, []);

  return (
    <div className="Notable">
      <h2 className="heading">5 production lines</h2>
      <div className="Notable-text-main">
        <p>
          RSG Exports operates 5 state-of-the-art production lines, ensuring diverse rice varieties are processed
          simultaneously. Each line is equipped with cutting-edge technology and managed by experienced
          professionals, enabling consistent output and flexibility to meet varying order sizes.
        </p>
      </div>
      <div className="grid-container-main">
        <div className="grid-container" id="imageGrid"></div>
      </div>
    </div>
  );
};

export default DynamicImageGrid;
