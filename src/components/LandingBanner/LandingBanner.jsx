import React from 'react';
import './LandingBanner.css';

const LandingBanner = props => {
    return (
        <div className="LandingBanner">
            <div className='title-text'>
                <h1> The Pet Project</h1>
            </div>
            <div className='SearchBar'>
                <input placeholder='I am looking for ...'/>
            </div>
        </div>
    )
}

export default LandingBanner;