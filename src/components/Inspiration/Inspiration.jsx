import React, { useEffect, useState } from 'react';
import './Inspiration.scss';
import quoteIcon from '../../assets/icons/quote-icon.svg';
import axios from 'axios';
import Loading from '../Loading/Loading';

const Inspiration = () => {

    const [getInspiration, setGetInspiration] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:8080/inspiration`)
            .then((res) => {
                setGetInspiration(res.data);
            })
            .catch(error => console.error(error));
    }, []);

    function getQuote(list) {
        return list[Math.floor((Math.random() * list.length))]
    }

    const randomQuote = getInspiration.length > 0 ? getQuote(getInspiration).quote : '';

    if (!getInspiration) {
        return <div>
            <Loading />
        </div>
    }

    return (
        <section className='inspiration'>
            <div className='inspiration__container'>
                <img className='inspiration__icon' src={quoteIcon} alt='Quote icon'></img>
                <p className='inspiration__quote'>{randomQuote}</p>
            </div>

        </section>
    );
};

export default Inspiration;