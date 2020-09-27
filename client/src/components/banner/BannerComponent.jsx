import React from 'react';
import  './banner.scss';

function Banner({children,title,subtitle,className}) {
    return (
        <div className = {className}>
            <h1>{title}</h1>
            <div></div>
            <p>{subtitle}</p>
            {children}
        </div>
    )
}

export default Banner;
