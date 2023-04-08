import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import Calendar from '../components/Calendar/Calendar';
import JournalEntry from '../components/JournalEntry/JournalEntry';

const JournalingPage = () => {
    return (
        <section>
            <Calendar />
            {/* <JournalIcons /> */}
            <JournalEntry />
            <Navigation />
        </section>
    );
};

export default JournalingPage;