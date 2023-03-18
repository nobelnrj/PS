import React, { useState, useEffect, useRef } from 'react';
import SectionHeaders from '../../../components/SectionHeaders/SectionHeaders';
import PropTypes from 'prop-types';
import Image from 'next/image'

// import "./styles.scss";
import styles from "@/styles/pages/components/story.module.scss";
import variables from "@/styles/variables.module.scss";

const Story = ({ config }) => {
  const [scrollY, setScrollY] = useState(0);
  const wrapper = useRef()
  const containerRef = useRef([])

  const [width, setWidth] = useState();

  useEffect(() => {
    const updateDimensions = () => {
      setWidth(window.innerWidth);
    }
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateDimensions);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateDimensions);
    };
  }, [scrollY]);
  return (
    <div className={`section-wrapper ${styles.story}`} ref={wrapper} style={{
      "--top": wrapper.current && wrapper.current.getBoundingClientRect().top < 0 ? `${-(wrapper.current.getBoundingClientRect().top - 205)}px` : width < 420 ? '160px' : width < 840 ? '185px' : '205px'
    }}>
      <SectionHeaders subHeading='STORY' heading='Our Love Story' />
      <div className={styles.storyHeart} style={{
        top: wrapper.current && wrapper.current.getBoundingClientRect().top < 0 ? `${-(wrapper.current.getBoundingClientRect().top - 195)}px` : width < 420 ? '150px' : width < 840 ? '175px' : '195px'
      }}>
        {/* <img src={heartSvg} /> */}
        <svg fill={variables.themeColor} height="512px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="512px">
          <path d="M340.8,83C307,83,276,98.8,256,124.8c-20-26-51-41.8-84.8-41.8C112.1,83,64,131.3,64,190.7c0,27.9,10.6,54.4,29.9,74.6  L245.1,418l10.9,11l10.9-11l148.3-149.8c21-20.3,32.8-47.9,32.8-77.5C448,131.3,399.9,83,340.8,83L340.8,83z" />
        </svg>
      </div>
      {
        config?.items.map((data, index) => (
          <div key={index} className={`${styles.storyItem} ${index % 2 != 0 ? styles.reverse : ''}`} ref={el => containerRef.current[index] = el} >
            <div className={styles.storyContent}>
              <h3 className={styles.storyHeading}>{data.heading}</h3>
              <p className={styles.storyDate}>{data.date}</p>
              <p className={styles.storyDetail}>{data.content}</p>
            </div>
            <div className={styles.storyImg}>
              <Image src={data.image} alt="" width={150} height={150} />
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
