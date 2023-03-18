import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image'

// compomnents
import Timer from '../../../components/Timer/Timer';

//styles
import styles from '@/styles/pages/components/banner.module.scss'
import variables from "@/styles/variables.module.scss";

const Banner = ({ config }) => {
  return (
    <div className={styles.banner}>
      <Image className={styles.bannerImg} src={config?.bannerImage} alt="" width={1200} height={900} />
      <div className={styles.bannerWrapper}>
        <div className={styles.bannerContent}>
          <h1 className={styles.bannerHeading}>Praveen & Supraja</h1>
          <p className={styles.bannerEvent}>{config?.bannerEvent}</p>
          <div className={styles.bannerTimer}>
            <Timer
              seconds={15}
              size={60}
              strokeBgColor="black"
              strokeColor={variables.themeColor}
              strokeWidth={2}
              endDate="2023-04-23"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

Banner.propTypes = {
  config: PropTypes.object.isRequired
};

export default Banner;
