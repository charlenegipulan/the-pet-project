import React from 'react';
import './LandingImage.css';
import Image from 'react-image-resizer';

const LandingImage = props => {
    return (
      <div className='LandingImage'>
        <div className="LandingImage-image">
          <img src="https://i.imgur.com/5PtgcSr.png" alt="Fourth slide" />
        </div>
      </div>
    )
}

export default LandingImage;