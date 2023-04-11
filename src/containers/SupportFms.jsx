import React from 'react';
import './SupportFms.css';
import leftImage from '../assets/img/Artboard 11.png';
import rightImage from '../assets/img/Artboard 1.png';

const SupportFms = ({ handleShopNowClick }) => {
  return (
    <div className="my-component">
      <img className="left-image" src={leftImage} alt="" />
      <h2 className="heading">
        <p className="s-head">Relive the Memories.</p>
        <p className="l-head">Support your alma mater.</p>
        <div className="shop-btn">
          <button className='shop-now' onClick={handleShopNowClick}>Shop Now</button>
      </div>
      </h2>
      
      <img className="right-image" src={rightImage} alt="" />
    </div>
  );
};

export default SupportFms;
