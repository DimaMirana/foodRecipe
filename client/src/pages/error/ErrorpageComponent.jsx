import React from 'react'
import Banner from '../../components/banner/BannerComponent'
import Header from '../../components/header/HeaderComponent'
import Hero from '../../components/hero/HeroComponent'

function Error() {
    return (
        <>
            <Hero hero = "otherhero">
                <Header/>
                <Banner className = "bannerOther" title = "SORRY WE CAN'T FIND THE PAGE YOU ARE SEARCHING">
                </Banner>
            </Hero>
        </>
    )
}

export default Error
