import React from 'react';
import'./heroComponent.scss';

function Hero({children,hero}) {
    return (
        <header className = {hero}>{children}</header>
    )
}
Hero.defaultProps = {
  hero: "defaultHero",
};
export default Hero;
