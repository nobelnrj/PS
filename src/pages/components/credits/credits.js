import React, { useState } from 'react';
import SectionHeaders from '../../../components/SectionHeaders/SectionHeaders';
import PropTypes from 'prop-types';
import Image from 'next/image'

// import "./styles.scss";
import styles from "@/styles/pages/components/credits.module.scss";
const Credits = ({ config }) => {
  const types = [...new Set(config?.members.map(data => data.type))];
  const [activeType, setActiveType] = useState();
  return (
    <div className={`section-wrapper ${styles.credits}`}>
      <SectionHeaders subHeading='FRIENDS & FAMILY' heading='Groomsmen & Bridesmaid' />
      <div className={styles.creditsTypes}>
        {
          types?.map((data, index) => (
            <button key={index} onClick={(e) => {
              e.preventDefault();
              if (activeType == data) {
                setActiveType()
              } else {
                setActiveType(data);
              }
            }} className={`${styles.creditsType} ${activeType == data ? styles.active : ''}`}>{data}</button>
          ))
        }
      </div>
      <div className={styles.creditsMembers}>
        {
          config?.members.map((data, index) => (
            <div key={index} className={`${styles.creditsMember} ${activeType == data.type ? styles.active : ''} ${!activeType ? styles.noActiveType : ''}`}>
              <Image className={styles.creditsImage} src={data.image} alt="" width={420} height={420} />
              <h3 className={styles.creditsName}>{data.name}</h3>
              <p className={styles.creditsTag}>{data.tag}</p>
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
