import React from 'react';
import SectionHeaders from '../../../../components/SectionHeaders/SectionHeaders';
import PropTypes from 'prop-types';

import "./styles.scss";

const About = ({ config }) => {
  return (
    <div className='section-wrapper about'>
      <SectionHeaders subHeading='ABOUT' heading='Groom & Bride' />
      {
        config.items.map((data, index) => (
          <div key={index} className={`about-item ${index % 2 != 0 ? 'reverse' : ''}`}>
            <div className='about-content'>
              <h3 className='about-heading'>{data.heading}</h3>
              <p className='about-detail'>{data.content}</p>
              <p className='about-name'>{data.name}</p>
            </div>
            <div className='about-img'>
              <img src={data.image} alt="" />
            </div>
          </div>
        ))
      }
    </div>
  );
}

About.propTypes = {
  config: PropTypes.object.isRequired
};


export default About;
