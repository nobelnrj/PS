import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image'

// import "../../../styles/SectionHeaders.scss";
// import HeartSVG from "../../static/image/heart.png"
import styles from "@/styles/components/SectionHeaders.module.scss";

const SectionHeaders = ({ subHeading, heading }) => {
  return (
    <div className={styles.sectionhead}>
      <h5 className={styles.sectionheadSubheading}>{subHeading}</h5>
      <h2 className={styles.sectionheadHeading}>{heading}</h2>
      <div className={styles.sectionheadUnderline}>
        <Image src="/static/image/heart.png" alt='' width={20} height={20} />
      </div>
    </div>
  );
}

SectionHeaders.propTypes = {
  subHeading: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired
}

export default SectionHeaders;
