import React from 'react';
import SectionHeaders from '../../../components/SectionHeaders/SectionHeaders';

import styles from "@/styles/pages/components/footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div id={styles.clouds}>
        <div className={`${styles.cloud} ${styles.x1}`}></div>
        <div className={`${styles.cloud} ${styles.x2}`}></div>
        <div className={`${styles.cloud} ${styles.x3}`}></div>
        <div className={`${styles.cloud} ${styles.x4}`}></div>
        <div className={`${styles.cloud} ${styles.x5}`}></div>
      </div>
      <div id={styles.box}>
        <div className={styles.the}>
          <SectionHeaders subHeading='' heading='Thank You' />
        </div>
      </div>
    </div>
  );
}

export default Footer;
