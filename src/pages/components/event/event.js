import React from 'react';
import SectionHeaders from '../../../components/SectionHeaders/SectionHeaders';
import PropTypes from 'prop-types';
import Image from 'next/image'

// import "./styles.scss";
import styles from "@/styles/pages/components/event.module.scss";
const Event = ({ config }) => {
  return (
    <div className={`section-wrapper ${styles.event}`}>
      <SectionHeaders subHeading='EVENT' heading='Our Wedding Event' />
      <div className={styles.eventWrapper}>
        {
          config?.items.map((data, index) => (
            <div key={index} className={styles.eventItem}>
              <Image className={styles.eventImage} src={data.image} alt="" width={420} height={300} />
              <h3 className={styles.eventHeading}>{data.heading}</h3>
              <p className={styles.eventContent}>{data.content}</p>
              <p className={styles.eventTime}>{data.timing}</p>
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
