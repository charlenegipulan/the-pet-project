import React from 'react';
import './LandingMessage.css';

const LandingMessage = props => {
    return (
      <div className='LandingMessage'>
            <div className='LandingMessage-text'>
                <h1> Find your new bestfriend. </h1>
                <p> Thousands of adoptable pets are waiting to meet people and find their new home.</p>
            </div>
            <div className='LandingIcons'>
                <div className="icon-card">
                    <img src="images/dog.png" alt="image" />
                </div>
                <div className="icon-card">
                    <img src="images/cat.png" alt="image" />
                </div>
                <div className="icon-card">
                    <img src="images/owl.png" alt="image" />
                </div>
            </div>
            <div className='LandingMessage-text2'>
                <p>We are committed in helping people like you to find the right pet to take home.</p>
            </div>
      </div>
    )
}

export default LandingMessage;