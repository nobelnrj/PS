import React from 'react';
import PropTypes from 'prop-types';

import "./styles.scss";

const SectionHeaders = ({ subHeading, heading }) => {
  return (
    <div className='sectionhead'>
      <h5 className='sectionhead-subheading'>{subHeading}</h5>
      <h2 className='sectionhead-heading'>{heading}</h2>
      <div className='sectionhead-underline'>
        <img src="../../../static/heart.svg" />
      </div>
    </div>
  );
}

SectionHeaders.propTypes = {
  subHeading: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired
}

export default SectionHeaders;
