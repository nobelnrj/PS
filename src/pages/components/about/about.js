import React from 'react';
import SectionHeaders from '../../../components/SectionHeaders/SectionHeaders';
import PropTypes from 'prop-types';
import Image from 'next/image'

// import "./styles.scss";
import styles from '@/styles/pages/components/about.module.scss'

const About = ({ config }) => {
  return (
    <div className={`section-wrapper ${styles.about}`}>
      <SectionHeaders subHeading='ABOUT' heading='Groom & Bride' />
      {
        config?.items.map((data, index) => (
          <div key={index} className={`${styles.aboutItem} ${index % 2 != 0 ? styles.reverse : ''}`}>
            <div className={styles.aboutContent}>
              <h3 className={styles.aboutHeading}>{data.heading}</h3>
              <p className={styles.aboutDetail}>{data.content}</p>
              <p className={styles.aboutName}>{data.name}</p>
            </div>
            <div className={styles.aboutImg}>
              <Image src={data.image} alt="" width={800} height={500} />
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
