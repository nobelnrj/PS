import React from 'react';

// compomnents
import Timer from '../../../../components/Timer/Timer';

//styles
import "./styles.scss";

const Banner = ({ config }) => {
  return (
    <div className='banner'>
      <img className='banner-img' src={config.bannerImage} alt="" srcset="" />
      <div className='banner-wrapper'>
        <div className='banner-content'>
          <h1 className='banner-heading'>Praveen & Supraja</h1>
          <p className='banner-event'>{config.bannerEvent}</p>
          <p className='banner-timer'>
            <Timer
              seconds={15}
              size={60}
              strokeBgColor="black"
              strokeColor="lemonchiffon"
              strokeWidth={2}
            />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
