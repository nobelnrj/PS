import React, { useState } from 'react';
import SectionHeaders from '../../../../components/SectionHeaders/SectionHeaders';

import "./styles.scss";

const Credits = ({ config }) => {
  const [types, setTypes] = useState([...new Set(config.members.map(data => data.type))]);
  const [activeType, setActiveType] = useState();
  return (
    <div className='section-wrapper credits'>
      <SectionHeaders subHeading='FRIENDS & FAMILY' heading='Groomsmen & Bridesmaid' />
      <div className='credits-types'>
        {
          types.map(data => (
            <button onClick={(e) => {
              e.preventDefault();
              setActiveType(data);
            }} className={`credits-type ${activeType == data ? 'active' : ''}`}>{data}</button>
          ))
        }
      </div>
      <div className='credits-members'>
        {
          config.members.map((data, index) => (
            <div className={`credits-member ${activeType == data.type ? 'active' : ''} ${!activeType ? 'no-active-type' : ''}`}>
              <img className='credits-image' src={data.image} alt="" srcset="" />
              <h3 className='credits-name'>{data.name}</h3>
              <p className='credits-tag'>{data.tag}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Credits;
