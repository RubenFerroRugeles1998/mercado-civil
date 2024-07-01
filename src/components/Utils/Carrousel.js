import React, { useState } from 'react';
import classes from './Carrousel.module.scss';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className={classes.carousel}>
      <button onClick={prevSlide} className={classes.arrowLeft}>❮</button>
      <div
        className={classes.carouselInner}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`${classes.carouselItem} ${index === currentIndex ? classes.active : ''}`}
          >
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <button onClick={nextSlide} className={classes.arrowRight}>❯</button>
    </div>
  );
};

export default Carousel;