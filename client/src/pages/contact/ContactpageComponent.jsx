import React from 'react'
import Banner from '../../components/banner/BannerComponent'
import Header from '../../components/header/HeaderComponent'
import Hero from '../../components/hero/HeroComponent'

function Contact() {
    return (
        <>
            <Hero hero = "otherHero">
                <Header/>
                <Banner className = "bannerOther" title = "CONTACT US"></Banner>
            </Hero>
        </>
    )
}

export default Contact;
