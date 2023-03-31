import React from 'react';
import './Header.scss';


const Header = () => {
    return (
        <section className='header'>
            <div className='header__avatar-frame'>
                {/* <img className='header__avatar' alt='avatar'></img> */}
            </div>
            <h1 className='header__title'>Isi's Compass</h1>
        </section>
    );
};

export default Header;