import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = props => {
    return (
        <div className='NavBar'>
            <div className='nav-links'>
                <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">More Info</a></li>
                    <li><a href="#">Services</a></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;