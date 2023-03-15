import React, { useState, useEffect, useRef } from 'react';
import SectionHeaders from '../../../../components/SectionHeaders/SectionHeaders';

import "./styles.scss";

const Story = ({ config }) => {
  const [scrollY, setScrollY] = useState(0);
  const wrapper = useRef()
  const containerRef = useRef([])

  useEffect(() => {
    const handleScroll = () => {
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
        <img src="../../../static/solid-heart.svg" alt="" srcset="" />
      </div>
      {
        config.items.map((data, index) => (
          <div className={`story-item ${index % 2 != 0 ? 'reverse' : ''}`} ref={el => containerRef.current[index] = el} >
            <div className='story-content'>
              <h3 className='story-heading'>{data.heading}</h3>
              <p className='story-date'>{data.date}</p>
              <p className='story-detail'>{data.content}</p>
            </div>
            <div className='story-img'>
              <img src={data.image} alt="" srcset="" />
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default Story;
