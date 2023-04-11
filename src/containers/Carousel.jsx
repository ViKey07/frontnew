import React, { useState } from "react";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    
    const currentImg = document.querySelector('.carousel img.active');
    const nextImg = currentImg.nextElementSibling || document.querySelector('.carousel img:first-of-type');
    currentImg.classList.remove('active');
    nextImg.classList.add('active');
    document.querySelector(".carousel button:last-of-type").classList.add("arrow-next");
    setTimeout(() => {
      document.querySelector(".carousel button:last-of-type").classList.remove("arrow-next");
    }, 500);

    const newIndex = currentIndex + 1 >= images.length ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };


  const goToPreviousSlide = () => {
    
    const currentImg = document.querySelector('.carousel img.active');
    const prevImg = currentImg.previousElementSibling || document.querySelector('.carousel img:last-of-type');
    currentImg.classList.remove('active');
    prevImg.classList.add('active');
    document.querySelector(".carousel button:first-of-type").classList.add("arrow-prev");
    setTimeout(() => {
      document.querySelector(".carousel button:first-of-type").classList.remove("arrow-prev");
    }, 500);

    const newIndex = currentIndex - 1 < 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  

  return (
    

    <div className="carousel">
    <button className="carousel prev" onClick={goToPreviousSlide}>&lt;</button>
    {images.map((image, index) => (
      <img
        key={index}
        src={image}
        alt={`slide ${index}`}
        className={`slide ${index === currentIndex ? 'active' : ''}`}
      />
    ))}
    <button className="carousel next" onClick={goToNextSlide}>&gt;</button>
  </div>
  );
};

export default Carousel;