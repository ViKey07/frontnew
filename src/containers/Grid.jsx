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
        <img className='category-img' src={category1Image} alt="Category 1" />
        <div className="c-b">
            <button className='category-button' onClick={handleShopNowClick}>Hoodies, Tshirts and Sweatshirts</button>
        </div>
      </div>
      <div className="custom-category-2-3">
        <div className="custom-category-2">
          <img className='category-img' src={category2Image} alt="Category 2" />
          <div className="c-b">
            <button className='category-button' onClick={handleShopNowClick}>Diaries, Posters and Mousepads</button>
        </div>
        </div>
        <div className="custom-category-3">
          <img className='category-img' src={category3Image} alt="Category 3" />
          <div className="c-b">
            <button className='category-button' onClick={handleShopNowClick}>Rings and Bands</button>
        </div>
        </div>
      </div>
      <div className="custom-category-4">
        <img className='category-img' src={category4Image} alt="Category 4" />
        <div className="c-b">
            <button className='category-button'onClick={handleShopNowClick}>Bottles, Mugs and Flags</button>
        </div>
      </div>
    </div>
  );
};

export default CustomCategoryButtons;




// import React from 'react';
// import './CategoryButtons.css';
// import category1Image from '../assets/img/Asset 121.png';
// import category2Image from '../assets/img/Asset 111.png';
// import category3Image from '../assets/img/Asset 91.png';
// import category4Image from '../assets/img/Asset 101.png';


// const CustomCategoryButtons = ({ handleShopNowClick }) => {

//   return (
//     <div className="custom-category-buttons-container">
//       <div className="cat-1-btn">
//       <button className="custom-category-1" onClick={handleShopNowClick}>
//         <img className='category-img' src={category1Image} alt="Category 1" />
//         <div className="c-b">Hoodies, Tshirts and Sweatshirts</div>
//       </button>
//       </div>
//       <div className="cat-2-3">
//       <button className="custom-category-2" onClick={handleShopNowClick}>
//         <img className='category-img' src={category2Image} alt="Category 2" />
//         <div className="c-b">Diaries, Posters and Mousepads</div>
//       </button>
//       <button className="custom-category-3" onClick={handleShopNowClick}>
//         <img className='category-img' src={category3Image} alt="Category 3" />
//         <div className="c-b">Rings and Bands</div>
//       </button>
//       </div>
//       <div className="cat-4-btn">
//       <button className="custom-category-4" onClick={handleShopNowClick}>
//         <img className='category-img' src={category4Image} alt="Category 4" />
//         <div className="c-b">Bottles, Mugs and Flags</div>
//       </button>
//       </div>
//     </div>
//   );
// };

// export default CustomCategoryButtons;
