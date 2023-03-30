import React from 'react';
import Header from '../../src/components/Header/Header';
import Insights from '../../src/components/Insights/Insights';
import Graphs from '../../src/components/Graphs/Graphs';
import Navigation from '../../src/components/Navigation/Navigation';

const Homepage = () => {
    return (
        <section>
            <Header />
            <Insights />
            <Graphs />
            <Navigation />
        </section>
    );
};

export default Homepage;