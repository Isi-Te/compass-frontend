import React from 'react';
import Header from '../components/Header/Header';
import Graphs from '../components/Graphs/Graphs';
import Navigation from '../components/Navigation/Navigation';
import CompassNav from '../components/CompassNav/CompassNav';

const HomepageGraphs = () => {
    return (
        <section>
            <Header />
            <CompassNav />
            <Graphs />
            <Navigation />
        </section>
    );
};

export default HomepageGraphs;