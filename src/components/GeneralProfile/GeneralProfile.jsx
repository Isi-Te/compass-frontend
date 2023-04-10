import React from 'react';
import './GeneralProfile.scss';
import personalizeIcon from '../../assets/icons/personalize-icon.svg';
import settingsIcon from '../../assets/icons/settings-icon.svg';
import signOutIcon from '../../assets/icons/sign-out-icon.svg';
import socialIcon from '../../assets/icons/social-icon.svg';


const GeneralProfile = ({ logOut }) => {

    return (
        <section className='general'>
            <div className='general__container'>
                <img className='general__icon' src={socialIcon} alt='Social icon'></img>
                <h3 className='general__title'>Invite friends</h3>
            </div>
            <div className='general__container'>
                <img className='general__icon' src={settingsIcon} alt='Settings icon'></img>
                <h3 className='general__title'>Account Settings</h3>
            </div>
            <div className='general__container'>
                <img className='general__icon' src={personalizeIcon} alt='Pencil icon'></img>
                <h3 className='general__title'>Personalize settings</h3>
            </div>
            <div className='general__sign-out' onClick={logOut}>
                <img className='general__icon-sign-out' src={signOutIcon} alt='Sign out icon'></img>
                <button className='general__button'>log out</button>
            </div>
        </section >
    );
};

export default GeneralProfile;