// import React from 'react';
// import { Grid } from '@mui/material';
// import './style.css'; // Import the CSS file

// const ProgressSection = () => {
//   return (
//     <section className="progress-section">
//       <Grid container spacing={3} alignItems="center">
//         {/* Text Content - 8 columns on medium (md) screens and larger */}
//         <Grid item xs={12} md={8}>
//           <div className="text-container">
//             <h2>From Roads to Progress Since 1999</h2>
//             <p>
//               Founded in <strong>1999</strong>, Sagar Motors started as a humble highway repair center, driven by a passion for vehicles and a commitment to service.
//               Today, we are a trusted name as <strong>authorized dealers</strong> for <strong>Ashok Leyland</strong> and <strong>Honda 2-Wheelers</strong>, and pioneers in solid waste management, delivering innovative solutions. Our journey reflects growth, innovation, and a strong commitment to sustainability.
//             </p>
//           </div>
//         </Grid>

//         {/* Image - 4 columns on medium (md) screens and larger */}
//         <Grid item xs={12} md={4}>
//           <div className="image-container">
//             <img
//               src="https://via.placeholder.com/200"
//               alt="Progress Illustration"
//               className="image"
//             />
//           </div>
//         </Grid>
//       </Grid>
//     </section>
//   );
// };

// export default ProgressSection;


import React from 'react';
import { Grid } from '@mui/material';
import './style.css'; // Import the CSS file

const ProgressSection = ({ 
    title, 
    content, 
    imageUrl, 
    reverse = false, // By default, image is on the right. If reverse is true, image is on the left
    imageAlt = 'Progress Illustration', // Alt text for the image
    headingSize = 'h2', // Allows dynamic heading size like h1, h2, etc.
}) => {
  const HeadingTag = headingSize; // Dynamic heading element (h1, h2, etc.)

  return (
    <section className="progress-section">
      <Grid container spacing={3} alignItems="center" direction={reverse ? 'row-reverse' : 'row'}>
        {/* Text Content - 8 columns on medium (md) screens and larger */}
        <Grid item xs={12} md={8}>
          <div className="text-container">
            <HeadingTag>{title}</HeadingTag>
            <p>{content}</p>
          </div>
        </Grid>

        {/* Image - 4 columns on medium (md) screens and larger */}
        <Grid item xs={12} md={4}>
          <div className="image-container">
            <img
              src={imageUrl || "https://via.placeholder.com/200"}
              alt={imageAlt}
              className="image"
            />
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default ProgressSection;
