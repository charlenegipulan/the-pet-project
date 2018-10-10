import React from 'react';
import './NavBar2.css';

const NavBar2 = props => {
    return (
        <div className='NavBar2'>
            <div className='SearchBar'>
                <input placeholder='I am looking for...' />
            </div>
            <div className='user-nav'>
                <ul>
                    <li><a href="#">Log In</a></li>
                    <li><a href="#">Sign Up</a></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar2;