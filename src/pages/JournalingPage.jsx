import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import JournalIcons from '../components/JournalIcons/JournalIcons';
import Calendar from '../components/Calendar/Calendar';
import JournalEntry from '../components/JournalEntry/JournalEntry';
import JournalSlideUp from '../components/JournalSlideUp/JournalSlideUp';

const JournalingPage = () => {
    return (
        <section>
            <Calendar />
            <JournalIcons />
            <JournalEntry />
            <JournalSlideUp />
            <Navigation />
        </section>
    );
};

export default JournalingPage;