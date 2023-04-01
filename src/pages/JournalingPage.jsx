import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import JournalIcons from '../components/JournalIcons/JournalIcons';
import Calendar from '../components/Calendar/Calendar';
import JournalEntry from '../components/JournalEntry/JournalEntry';
import Button from '../components/Button/Button';

const JournalingPage = () => {
    return (
        <section>
            <Calendar />
            <JournalIcons />
            <JournalEntry />
            <Button />
            <Navigation />
        </section>
    );
};

export default JournalingPage;