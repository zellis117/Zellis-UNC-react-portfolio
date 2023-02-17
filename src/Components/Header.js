import React from 'react';
import logo from '../logo.svg';
import Navigation from './Navigation';

function Header(){
    return(
        <div className='header'>
            <h1>Zac Ellis Portfolio</h1>
            <img src={logo} className="App-logo" alt="logo" />
            <Navigation/>
        </div>
    )
}

export default Header;