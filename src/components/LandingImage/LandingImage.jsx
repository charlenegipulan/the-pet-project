import React from 'react';
import './LandingImage.css';

const LandingImage = props => {
    return (
      <div className='LandingImage'>
        <div style={{ width: '80%' }}>
          <img src="https://i.imgur.com/5PtgcSr.png" alt="First slide" />
        </div>
      </div>
    )
}

export default LandingImage;