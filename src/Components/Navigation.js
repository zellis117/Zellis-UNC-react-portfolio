import React from 'react';
import { Link } from 'react-router-dom';

function Navigation(){
    return(
        <div className='nav'>
            <li><Link to="/">Home / About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/resume">Resume</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </div>
    )
}

export default Navigation;