import React from 'react';
import './LandingPage.css';
import LandingImage from '../../components/LandingImage/LandingImage';
import LandingMessage from '../../components/LandingMessage/LandingMessage';
import NavBar from '../../components/NavBar/NavBar';
import NavBar2 from '../../components/NavBar2/NavBar2';

class LandingPage extends React.Component {


    render() {
        return (
            <div className='LandingPage'>
                <NavBar />
                <NavBar2 />
                <div className="LandingPage-center">
                    <div className="center-1">
                        <LandingMessage />
                    </div>
                    <div className="center-2">
                        <LandingImage />
                    </div>
                </div>
            </div>
        )
    }
}

export default LandingPage;