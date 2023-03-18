import React from 'react';
import Slider from "react-slick";
import SectionHeaders from '../../../components/SectionHeaders/SectionHeaders';
import PropTypes from 'prop-types';
import Image from 'next/image'

// Import css files for slick slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import "./styles.scss";
import styles from "@/styles/pages/components/gallery.module.scss";

const Gallery = ({ config }) => {
  let settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    pauseOnHover: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: styles.gallerySlide,
    responsive: [
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className={`section-wrapper ${styles.gallery}`}>
      <SectionHeaders subHeading='GALLERY' heading='Our Photo Gallery' />
      <Slider {...settings}>
        {
          config?.items.map((data, index) => (
            <div key={index} className={styles.slickContent}>
              <Image src={data.image} alt="" width={400} height={450} />
            </div>
          ))
        }
      </Slider>
    </div>
  );
}

Gallery.propTypes = {
  config: PropTypes.object.isRequired
};

export default Gallery;
