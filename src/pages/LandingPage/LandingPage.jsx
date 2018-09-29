import React from 'react';
import './LandingPage.css';
import LandingBanner from '../../components/LandingBanner/LandingBanner';

class LandingPage extends React.Component {


    render() {
        return (
            <div className="LandingPage">
                <LandingBanner />
            </div>
        )
    }
}

export default LandingPage;