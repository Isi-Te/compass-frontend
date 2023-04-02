import React from 'react';
import Header from '../components/Header/Header';
import Navigation from '../components/Navigation/Navigation';
import Goals from '../components/Goals/Goals';

const ProfilePage = () => {
    return (
        <section>
            <Header />
            <Goals />
            <Navigation />
        </section>
    );
};

export default ProfilePage;