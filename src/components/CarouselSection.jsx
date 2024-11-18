import React from 'react';
import { Carousel } from 'react-bootstrap';

import banner1 from '../assets/banner1.png';
import banner2 from '../assets/banner2.png';
import banner3 from '../assets/banner3.png';

const carouselImages = [
  {
    src: banner1,
    alt: "Revolução",
    caption: "",
    description: ""
  },
  {
    src: banner2,
    alt: "Nosso projeto", 
    caption: "",
    description: ""
  },
  {
    src: banner3, 
    alt: "",
    caption: "", 
    description: ""
  }
];

const ImageCarousel = () => {
  return (
    <div className="container-fluid carousel-container px-0">
      <Carousel 
        nextIcon={
          <span 
            className="carousel-control-next-icon" 
            style={{
              backgroundColor: 'rgba(9, 255, 0, 0.5)', 
              borderRadius: '50%', 
              padding: '20px',
              backgroundSize: '50%'
            }} 
          />
        }
        prevIcon={
          <span 
            className="carousel-control-prev-icon" 
            style={{
              backgroundColor: 'rgba(9, 255, 0, 0.5)', 
              borderRadius: '50%', 
              padding: '20px',
              backgroundSize: '50%'
            }} 
          />
        }
      >
        {carouselImages.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={image.src}
              alt={image.alt}
            />
            <Carousel.Caption>
              <h3>{image.caption}</h3>
              <p>{image.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;