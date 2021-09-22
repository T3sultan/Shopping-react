import React from 'react';
import imageHeader from '../../images/logo.png';
import Nav from '../Nav/Nav';
import './Header.css'


const Header = () => {
    return (
        <div className="header">
            <img className="imageStyle" src={imageHeader} alt="" />
            <Nav />
        </div>
    );
};

export default Header;