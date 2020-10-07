import React from 'react';
import Banner from '../../components/banner/BannerComponent';
import CategoryComponent from '../../components/category/CategoryComponent';
import Hero from '../../components/hero/HeroComponent';
import Header from './../../components/header/HeaderComponent';
import style from './homepage.module.scss'

function Home() {
    return (
      <>
        <Hero>
          <Header />
          <Banner
            className="bannerDefault"
            title="It is even better than an expensive cookery book"
            subtitle="Learn how to make your favorite restaurant’s dishes"
          ></Banner>
        </Hero>
        <h1 className={style.headerWrapper}>RECIPE BY CATEGORY</h1>
        <CategoryComponent />
      </>
    );
}

export default Home;
