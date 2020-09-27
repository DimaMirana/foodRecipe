import React from 'react'
import Banner from '../../components/banner/BannerComponent';
import Header from '../../components/header/HeaderComponent';
import Hero from '../../components/hero/HeroComponent';
import BlogpageStyle from './blogpage.module.scss';

function Blog() {
    return (
      <>
        <Hero hero="otherHero">
          <Header/>
          <Banner className = "bannerOther"  title="Blog">
          </Banner>
        </Hero>
      </>
    );
}

export default Blog;
