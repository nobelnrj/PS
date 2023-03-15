import React from 'react';
import SectionHeaders from '../../../../components/SectionHeaders/SectionHeaders';
import PropTypes from 'prop-types';

import "./styles.scss";
const Event = ({ config }) => {
  return (
    <div className='section-wrapper event'>
      <SectionHeaders subHeading='EVENT' heading='Our Wedding Event' />
      <div className='event-wrapper'>
        {
          config.items.map((data, index) => (
            <div key={index} className='event-item'>
              <img className='event-image' src={data.image} alt="" />
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

Event.propTypes = {
  config: PropTypes.object.isRequired
};

export default Event;
