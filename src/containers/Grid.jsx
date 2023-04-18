import React from 'react';
import './CategoryButtons.css';
import category1Image from '../assets/img/Asset 121.png';
import category2Image from '../assets/img/Asset 111.png';
import category3Image from '../assets/img/Asset 91.png';
import category4Image from '../assets/img/Asset 101.png';


const CustomCategoryButtons = ({ handleShopNowClick }) => {

  return (
    <div className="custom-category-buttons-container">
      <div className="custom-category-1">
        <a className="cat-but" href='/items'>
        <img className='category-img' src={category1Image} alt="Category 1" />
        <div className="c-b">
            <p className='category-button' >Hoodies, Tshirts and Sweatshirts</p>
        </div>
        </a>
      </div>
      <div className="custom-category-2-3">
        <div className="custom-category-2">
        <button className="cat-but" onClick={handleShopNowClick}>
          <img className='category-img' src={category2Image} alt="Category 2" />
          <div className="c-b">
            <p className='category-button' >Diaries, Posters and Mousepads</p>
        </div>
        </button>
        </div>
        <div className="custom-category-3">
        <button className="cat-but" onClick={handleShopNowClick}>
          <img className='category-img' src={category3Image} alt="Category 3" />
          <div className="c-b">
            <p className='category-button' >Rings and Bands</p>
        </div>
        </button>
        </div>
      </div>
      <div className="custom-category-4">
      <button className="cat-but" onClick={handleShopNowClick}>
        <img className='category-img' src={category4Image} alt="Category 4" />
        <div className="c-b">
            <p className='category-button'>Bottles, Mugs and Flags</p>
        </div>
        </button>
      </div>
    </div>
  );
};

export default CustomCategoryButtons;

