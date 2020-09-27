import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../button/ButtonComponent';
import { ReactComponent as Logo } from "./../../assets/icons/logo.svg";
import HeaderStyle from './headerComponent.module.scss';

function Header() {
    const [hover,setHover] = useState(false);
    
    return (
        <div className = {HeaderStyle.header}>
            <Link className = {HeaderStyle.logoContainer} to = '/'>
                <Logo className = {HeaderStyle.logo}/>
            </Link>
            <div className = {HeaderStyle.options}>
                <div className = {HeaderStyle.option}
                     onMouseEnter = {()=> setHover(true)}
                     onMouseLeave = {()=> setHover(false)}>RECIPE</div>
                <Link className = {HeaderStyle.option} to = '/blogs'>BLOG</Link>
                <Link className = {HeaderStyle.option} to = '/about'>ABOUT</Link>
                <Link className = {HeaderStyle.option} to = '/contact'>CONTACT</Link>
                <Link className = {HeaderStyle.option} to = '/recipe/'><Button title = "SUBMIT RECIPE"></Button></Link>
            </div>
        </div>
    );
}

export default Header;
