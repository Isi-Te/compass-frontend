import React from 'react';
import Header from '../../src/components/Header/Header';
import Insights from '../../src/components/Insights/Insights';
import Navigation from '../../src/components/Navigation/Navigation';
import CompassNav from '../components/CompassNav/CompassNav';

const Homepage = () => {
    return (
        <section>
            <Header />
            <CompassNav />
            <Insights />
            <Navigation />
        </section>
    );
};

export default Homepage;