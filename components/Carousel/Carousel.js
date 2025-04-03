import React, { Component } from 'react';
import Carousel from 'react-multi-carousel';
import LazyLoad from 'react-lazyload';
import Image from './image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Ruta de las imágenes ubicadas en public/img/
const images = [
  '/img/portada.png',  // Primera imagen
  '/img/portada2.png', // Segunda imagen
  '/img/portada3.png', // Segunda imagen
];

// Enlaces asociados a cada imagen
const sites = [
  'https://guileless-sawine-feb32c.netlify.app/',            // Enlace para la segunda imagen
  'https://festival-2025-195f7a.netlify.app/',  // Enlace para la primera imagen
  'https://chulenacha17.github.io/',  // Enlace para la primera imagen
  
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CustomButtonGroupAsArrows = ({ next, previous }) => {
  return (
    <div className='arrows'>
      <FaArrowLeft className='left' onClick={previous} size={16} />
      <FaArrowRight className='right' onClick={next} size={16} />
    </div>
  );
};

class CustomCarousel extends Component {
  render() {
    return (
      <LazyLoad height={200} offset={100}>
        <Carousel
          responsive={responsive}
          ssr
          infinite={true}
          arrows={false}
          customButtonGroup={<CustomButtonGroupAsArrows />}
          containerClass='carousel'
          itemClass='carousel-item'
        >
          {images.map((image, index) => (
            <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }} key={index}>
              {/* Aquí pasamos el enlace al componente Image */}
              <Image url={image} alt={`Imagen ${index + 1}`} link={sites[index]} />
            </div>
          ))}
        </Carousel>
      </LazyLoad>
    );
  }
}

export default CustomCarousel;
