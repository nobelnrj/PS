import React, { useState, useEffect, useRef } from 'react';
import SectionHeaders from '../../../../components/SectionHeaders/SectionHeaders';
import PropTypes from 'prop-types';

import "./styles.scss";
import variables from "../../../../styles/variables.scss";

const Story = ({ config }) => {
  const [scrollY, setScrollY] = useState(0);
  const wrapper = useRef()
  const containerRef = useRef([])

  useEffect(() => {
    const handleScroll = () => {
      console.log(scrollY);
      setScrollY(window.scrollY);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className='section-wrapper story' ref={wrapper} style={{
      "--top": wrapper.current && wrapper.current.getBoundingClientRect().top < 0 ? `${-(wrapper.current.getBoundingClientRect().top - 205)}px` : '205px'
    }}>
      <SectionHeaders subHeading='STORY' heading='Our Love Story' />
      <div className='story-heart' style={{
        top: wrapper.current && wrapper.current.getBoundingClientRect().top < 0 ? `${-(wrapper.current.getBoundingClientRect().top - 195)}px` : '195px'
      }}>
        {/* <img src={heartSvg} /> */}
        <svg fill={variables.themeColor} height="512px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="512px">
          <path d="M340.8,83C307,83,276,98.8,256,124.8c-20-26-51-41.8-84.8-41.8C112.1,83,64,131.3,64,190.7c0,27.9,10.6,54.4,29.9,74.6  L245.1,418l10.9,11l10.9-11l148.3-149.8c21-20.3,32.8-47.9,32.8-77.5C448,131.3,399.9,83,340.8,83L340.8,83z" />
        </svg>
      </div>
      {
        config.items.map((data, index) => (
          <div key={index} className={`story-item ${index % 2 != 0 ? 'reverse' : ''}`} ref={el => containerRef.current[index] = el} >
            <div className='story-content'>
              <h3 className='story-heading'>{data.heading}</h3>
              <p className='story-date'>{data.date}</p>
              <p className='story-detail'>{data.content}</p>
            </div>
            <div className='story-img'>
              <img src={data.image} alt="" />
            </div>
          </div>
        ))
      }
    </div>
  );
}

Story.propTypes = {
  config: PropTypes.object.isRequired
};

export default Story;
