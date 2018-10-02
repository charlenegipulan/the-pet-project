import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = props => {
    return (
        <div className='NavBar'>
            <div className='nav-links'>
                <ul>
                    <li>Dogs</li>
                    <li>Cats</li>
                    <li>Find pets to adopt near you</li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;