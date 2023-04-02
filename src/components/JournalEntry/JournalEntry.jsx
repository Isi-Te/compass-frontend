import React from 'react';
import './JournalEntry.scss';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const JournalEntry = () => {
    return (
        <section className='journal-entry'>
            <form className='journal-entry__form'>
                <div className='journal-entry__highlight'>

                    <input className='journal-entry__input journal-entry__input--highlight' placeholder='What made your day?'></input>
                </div>
            </form>
            <form className='journal-entry__form'>
                <div className='journal-entry__stress'>
                    <input className='journal-entry__input journal-entry__input--lowlight' placeholder='What bothered you today?'></input>
                </div>
                <div className='journal-entry__button'>
                    <Link to='/'><Button className='journal-entry__button-cancel' name='button__cancel' type='cancel' /></Link>
                    <Button className='journal-entry__button-track' name='button__track' type='track' />

                </div>
            </form>
        </section >
    );
};

export default JournalEntry;