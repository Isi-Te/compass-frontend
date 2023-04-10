import React from 'react';
import './CompassNav.scss';
import { NavLink } from 'react-router-dom';

const CompassNav = () => {
    return (
        <nav className='compass-nav'>
            <section className='compass-nav__container'>
                <div className='compass-nav__title'>
                    <NavLink to='/compass/insights' className={({ isActive }) => { return isActive ? 'compass-nav__item compass-nav__item--active' : 'compass-nav__item' }} >Insights</NavLink>
                    <NavLink to='/compass/graphs' className={({ isActive }) => { return isActive ? 'compass-nav__item compass-nav__item--active' : 'compass-nav__item' }}>Graphs</NavLink>
                </div>
            </section>
        </nav >
    );
};

export default CompassNav;