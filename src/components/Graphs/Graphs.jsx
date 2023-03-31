import React from 'react';
import './Graphs.scss';

const Graphs = () => {
    return (
        <sections className='graphs'>
            <div className='graphs__container'>
                <h3 className='graphs__title'>Energy levels</h3>
                <div className='graphs__graph'></div>
            </div>
            {/* <div className='graphs__container'>
                <h3 className='graphs__title'>Stress</h3>
                <div className='graphs__graph'></div>
            </div> */}
        </sections>
    );
};

export default Graphs;