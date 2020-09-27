import React from 'react';
import Banner from "../../components/banner/BannerComponent";
import Form from '../../components/form/FormComponent';
import Header from "../../components/header/HeaderComponent";
import Hero from "../../components/hero/HeroComponent";

import Style from './createRecipe.module.scss';

function CreateRecipe() {
    return (
      <>
        <Hero hero="otherHero">
          <Header />
          <Banner className="bannerOther" title="RECIPE" subtitle = "SUBMIT YOUR RECIPE"></Banner>
        </Hero>
        <div className = {Style.wrapper}>
            <Form/>
        </div>
      </>
    );
}

export default CreateRecipe
