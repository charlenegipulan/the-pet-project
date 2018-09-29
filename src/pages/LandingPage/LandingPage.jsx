import React from 'react';
import './LandingPage.css';
import LandingBanner from '../../components/LandingBanner/LandingBanner';
import NavBar from '../../components/NavBar/NavBar';
class LandingPage extends React.Component {


    render() {
        return (
            <div className="LandingPage">
                <LandingBanner />
                <NavBar />
            </div>
        )
    }
}

export default LandingPage;