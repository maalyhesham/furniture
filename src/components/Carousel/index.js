import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import './style.css'
const Image = ({ src, ...props }) => {

    if (!src) return null;

    return (
        <div>
            <img src={src} alt='about project' className='carousel-slide-image' />
        </div>
    )
}

const SliderCarousel = ({ images, className, ...props }) => {


    return (
        <Carousel className={className}>
            {images.map(image => (
                <Image key={image} src={image} />
            ))}
        </Carousel>
    )
}
SliderCarousel.propTypes = {}
SliderCarousel.defaultProps = {
    images: []
}

export default SliderCarousel