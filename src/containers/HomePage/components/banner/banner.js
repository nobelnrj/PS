import React from 'react';
import PropTypes from 'prop-types';

// compomnents
import Timer from '../../../../components/Timer/Timer';

//styles
import "./styles.scss";
import variables from "../../../../styles/variables.scss";

const Banner = ({ config }) => {
  return (
    <div className='banner'>
      <img className='banner-img' src={config.bannerImage} alt="" />
      <div className='banner-wrapper'>
        <div className='banner-content'>
          <h1 className='banner-heading'>Praveen & Supraja</h1>
          <p className='banner-event'>{config.bannerEvent}</p>
          <p className='banner-timer'>
            <Timer
              seconds={15}
              size={60}
              strokeBgColor="black"
              strokeColor={variables.themeColor}
              strokeWidth={2}
              endDate="2023-04-22"
            />
          </p>
        </div>
      </div>
    </div>
  );
}

Banner.propTypes = {
  config: PropTypes.object.isRequired
};

export default Banner;
