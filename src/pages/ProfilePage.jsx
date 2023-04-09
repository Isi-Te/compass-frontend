import React from 'react';
import Header from '../components/Header/Header';
import Navigation from '../components/Navigation/Navigation';
import Goals from '../components/Goals/Goals';
import UserInfo from '../components/UserInfo/UserInfo';
import Inspiration from '../components/Inspiration/Inspiration';
import GeneralProfile from '../components/GeneralProfile/GeneralProfile';

const ProfilePage = () => {
    return (
        <section>
            <UserInfo />
            <Inspiration />
            <GeneralProfile />
            <Navigation />
        </section>
    );
};

export default ProfilePage;