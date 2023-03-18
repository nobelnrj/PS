import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import Banner from './components/banner/banner'
import About from './components/about/about'
import Story from './components/story/story'
import Gallery from './components/gallery/gallery'
import Event from './components/event/event'
import Credits from './components/credits/credits'
import Footer from './components/footer/footer'

// constants
import { homepageConfig } from '@/constants'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Banner config={homepageConfig.banner} />
      <About config={homepageConfig.about} />
      <Story config={homepageConfig.story} />
      <Gallery config={homepageConfig.gallery} />
      <Event config={homepageConfig.event} />
      <Credits config={homepageConfig.credits} />
      <Footer />
    </>
  )
}
