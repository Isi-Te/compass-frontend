import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import JournalIcons from '../components/JournalIcons/JournalIcons';
import Calendar from '../components/Calendar/Calendar';
import JournalEntry from '../components/JournalEntry/JournalEntry';
import JournalInfoBox from '../components/JournalInfoBox/JournalInfoBox';

const JournalingPage = () => {
    return (
        <section>
            <Calendar />
            <JournalIcons />
            <JournalEntry />
            <JournalInfoBox />
            <Navigation />
        </section>
    );
};

export default JournalingPage;