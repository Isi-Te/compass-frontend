import React from 'react';
import './Navigation.scss';
import compassIcon from '../../assets/icons/compass-icon.svg';
import plusIcon from '../../assets/icons/add-icon.svg';
import profileIcon from '../../assets/icons/profile-icon.svg';


const Navigation = () => {
    return (
        <section className='nav'>
            <img className='nav__icon-compass' src={compassIcon} alt='Compass icon'></img>
            <img className='nav__icon-track' src={plusIcon} alt='Plus Icon'></img>
            <img className='nav__icon-profile' src={profileIcon} alt='Profile Icon'></img>
        </section>
    );
};

export default Navigation;