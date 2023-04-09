import React from 'react';
import './Loading.scss';
import compassBase from '../../assets/logo/compass-base.png';
import compassArrow from '../../assets/logo/compass-arrow.png';

const Loading = () => {
    return (
        <section className='compass'>
            <img className='compass__base' src={compassBase}></img>
            <img className='compass__arrow' src={compassArrow}></img>
        </section>
    );
};

export default Loading;