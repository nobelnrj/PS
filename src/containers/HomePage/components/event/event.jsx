import React from 'react';
import SectionHeaders from '../../../../components/SectionHeaders/SectionHeaders';

import "./styles.scss";
const Event = ({ config }) => {
  return (
    <div className='section-wrapper event'>
      <SectionHeaders subHeading='EVENT' heading='Our Wedding Event' />
      <div className='event-wrapper'>
        {
          config.items.map((data, index) => (
            <div className='event-item'>
              <img className='event-image' src={data.image} alt="" srcset="" />
              <h3 className='event-heading'>{data.heading}</h3>
              <p className='event-content'>{data.content}</p>
              <p className='event-time'>{data.timing}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Event;
