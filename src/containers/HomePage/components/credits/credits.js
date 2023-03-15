import React, { useState } from 'react';
import SectionHeaders from '../../../../components/SectionHeaders/SectionHeaders';
import PropTypes from 'prop-types';

import "./styles.scss";

const Credits = ({ config }) => {
  const types = [...new Set(config.members.map(data => data.type))];
  const [activeType, setActiveType] = useState();
  return (
    <div className='section-wrapper credits'>
      <SectionHeaders subHeading='FRIENDS & FAMILY' heading='Groomsmen & Bridesmaid' />
      <div className='credits-types'>
        {
          types.map((data, index) => (
            <button key={index} onClick={(e) => {
              e.preventDefault();
              if (activeType == data) {
                setActiveType()
              } else {
                setActiveType(data);
              }
            }} className={`credits-type ${activeType == data ? 'active' : ''}`}>{data}</button>
          ))
        }
      </div>
      <div className='credits-members'>
        {
          config.members.map((data, index) => (
            <div key={index} className={`credits-member ${activeType == data.type ? 'active' : ''} ${!activeType ? 'no-active-type' : ''}`}>
              <img className='credits-image' src={data.image} alt="" />
              <h3 className='credits-name'>{data.name}</h3>
              <p className='credits-tag'>{data.tag}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

Credits.propTypes = {
  config: PropTypes.object.isRequired
};

export default Credits;
