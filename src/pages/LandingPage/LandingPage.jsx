import React from 'react';
import './LandingPage.css';
import LandingBanner from '../../components/LandingBanner/LandingBanner';
import LandingImage from '../../components/LandingImage/LandingImage';
import NavBar from '../../components/NavBar/NavBar';

class LandingPage extends React.Component {


    render() {
        return (
            <div className='LandingPage'>
                <LandingBanner />
                <NavBar />
                <div className='SearchBar'>
                    <input placeholder='I am looking for ...'/>
                </div>
                <LandingImage />
            </div>
        )
    }
}

export default LandingPage;