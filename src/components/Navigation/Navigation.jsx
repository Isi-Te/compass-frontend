import React from 'react';
import './Navigation.scss';
import compassIcon from '../../assets/icons/compass-white-icon.svg';
import plusIcon from '../../assets/icons/add-white-icon.svg';
import profileIcon from '../../assets/icons/profile-white-icon.svg';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <section className='nav'>
            <Link to='/compass/insights'><img className='nav__icon-compass' src={compassIcon} alt='Compass icon'></img></Link>
            <Link to='/journal'><img className='nav__icon-track' src={plusIcon} alt='Plus Icon'></img></Link>
            <Link to='/profile'><img className='nav__icon-profile' src={profileIcon} alt='Profile Icon'></img></Link>
        </section>
    );
};

export default Navigation;