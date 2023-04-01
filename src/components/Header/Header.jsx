import React from 'react';
import './Header.scss';
import avatarImg from '../../assets/images/profile-user.JPEG';


const Header = () => {
    return (
        <section className='header'>
            <div className='header__avatar-frame'>
                <img className='header__avatar' src={avatarImg} alt='avatar'></img>
            </div>
            <h1 className='header__title'>Isi's Compass</h1>
        </section>
    );
};

export default Header;