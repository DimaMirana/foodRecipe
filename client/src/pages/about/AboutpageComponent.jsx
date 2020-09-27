import React from 'react'
import Banner from '../../components/banner/BannerComponent'
import Header from '../../components/header/HeaderComponent'
import Hero from '../../components/hero/HeroComponent'

function About() {
    return (
      <>
        <Hero hero="otherHero">
          <Header />
          <Banner className = "bannerOther" title="ABOUT US"></Banner>
        </Hero>
      </>
    );
}

export default About;
