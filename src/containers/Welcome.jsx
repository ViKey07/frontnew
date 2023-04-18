import React from 'react';
import collegeImage from '../assets/img/clg_img1.png';
import './Welcome.css';
import FMSLogo from '../../src/assets/img/fms_logo.png';

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="heading-container">
        <p className='home-img-heading'>Welcome to
        <img className='home-img-logo' src={FMSLogo} alt="" /></p>
      </div>
      <div className="image-container">
        <img className='home-clg-img' src={collegeImage} alt="College" />
      </div>
    </div>
  );
};

export default Welcome;
