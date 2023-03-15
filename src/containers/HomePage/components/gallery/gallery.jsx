import React from 'react';
import Slider from "react-slick";
import SectionHeaders from '../../../../components/SectionHeaders/SectionHeaders';

// Import css files for slick slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./styles.scss";

const Gallery = ({ config }) => {
  let settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    pauseOnHover: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: 'gallery-slide'
  };
  return (
    <div className='section-wrapper gallery'>
      <SectionHeaders subHeading='GALLERY' heading='Our Photo Gallery' />
      <Slider {...settings}>
        {
          config.items.map((data, index) => (
            <div className='slick-content'>
              <img src={data.image} alt="" srcset="" />
            </div>
          ))
        }
      </Slider>
    </div>
  );
}

export default Gallery;
