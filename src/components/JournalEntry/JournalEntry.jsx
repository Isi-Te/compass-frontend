import React, { useEffect, useState } from 'react';
import './JournalEntry.scss';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';

const JournalEntry = () => {
    const [journalEntry, setJournalEntry] = useState([]);

    const fetchEntry = () => {
        axios
            .get(`http://localhost:8080/journal-entry`)
            .then(res => {
                console.log(res.data)
                setJournalEntry(res.data);
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        fetchEntry();
    }, [])

    function handleSubmit(event) {
        event.preventDefault();

        const highlight = event.target.highlight.value;
        const lowlight = event.target.lowlight.value;
        const user_id = 1;


        axios
            .post(`http://localhost:8080/journal-entry`, {
                highlight: highlight,
                lowlight: lowlight,
                user_id: user_id,
            })
            .then(() => {
                fetchEntry();
                event.target.reset();
            })
            .catch(err => console.log(err));
    }

    if (!journalEntry) {
        return <div>Loading....</div>
    }

    return (
        <section className='journal-entry'>
            <form className='journal-entry__form' onSubmit={handleSubmit}>
                <div className='journal-entry__highlight'>
                    <input className='journal-entry__input journal-entry__input--highlight' placeholder='What made your day?' name='highlight'></input>
                </div>
                <div className='journal-entry__stress'>
                    <input className='journal-entry__input journal-entry__input--lowlight' placeholder='What bothered you today?' name='lowlight'></input>
                </div>
                <div className='journal-entry__button'>
                    <Link to='/compass'><Button className='journal-entry__button-cancel' name='button__cancel' type='cancel' /></Link>
                    <Button className='journal-entry__button-track' name='button__track' type='submit' title='track' />
                </div>
            </form>
        </section >
    );
};

export default JournalEntry;