import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = props => {
    return (
        <div className='NavBar'>
            <div className='nav-links'>
                <ul>
                    <li>Find a Pet</li>
                    <li>Find a Shelter</li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;