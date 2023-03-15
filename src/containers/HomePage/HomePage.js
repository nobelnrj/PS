import React, { useEffect } from 'react';
// components
import Banner from './components/banner/banner';
import About from './components/about/about';
import Story from './components/story/story';
import Gallery from './components/gallery/gallery';
import Event from './components/event/event';
import Credits from './components/credits/credits';
// constants
import { homepageConfig } from '../../constants';
// styles
import './styles.scss';

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <Banner config={homepageConfig.banner} />
      <About config={homepageConfig.about} />
      <Story config={homepageConfig.story} />
      <Gallery config={homepageConfig.gallery} />
      <Event config={homepageConfig.event} />
      <Credits config={homepageConfig.credits} />
    </div>
  );
};

export default HomePage;
