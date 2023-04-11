import React from "react";
import icon1 from '../assets/img/Asset 512.png';
import icon2 from '../assets/img/Asset 412.png';
import icon3 from '../assets/img/Asset 312.png';
import icon4 from '../assets/img/Asset 212.png';

import "./ServiceBar.css";

const ServiceBar = () => {
  return (
    <div className="l-logo-container">
      <div className="l-logo">
        <img className="l-img-1" src={icon1} alt="Logo 1" />
        <div className="l-detailss">
        <p className="l-title">Free Shipping</p>
        <p className="l-info">Free shipping on order above $99</p>
        </div>
      </div>
      <div className="l-logo">
        <img className="l-img-2" src={icon2} alt="Logo 2" />
        <div className="l-detailss">
        <p className="l-title">Cash On Delivery</p>
        <p className="l-info">The internet trend to repeat</p>
        </div>
      </div>
      <div  className="l-logo">
        <img className="l-img-3" src={icon3} alt="Logo 3" />
        <div className="l-detailss">
        <p className="l-title">Gift For All</p>
        <p className="l-info">Recieve gift when subscribe</p>
        </div>
      </div>
      <div className="l-logo">
        <img className="l-img-4" src={icon4} alt="Logo 4" />
        <div className="l-detailss">
        <p className="l-title">Opening All Weeks</p>
        <p className="l-info">6:00am to 17:00pm</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceBar;
