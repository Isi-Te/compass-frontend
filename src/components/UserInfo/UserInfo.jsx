import React from 'react';
import './UserInfo.scss';
import avatarImg from '../../assets/images/profile-user.JPEG';
import editIcon from '../../assets/icons/edit-icon.svg';

const UserInfo = () => {
    return (
        <section className='profile'>
            <div className='profile__user-container'>
                <div className='profile__avatar-frame'>
                    <img className='profile__avatar' src={avatarImg} alt='avatar'></img>
                </div>
                <div className='profile__user-details'>
                    <div className='profile__user'>
                        <h4 className='profile__subtitle'>Name:</h4>
                        <h4 className='profile__details'>Isi</h4>
                        <img className='profile__icon-edit' src={editIcon} alt='Pencil icon'></img>
                    </div>
                    <div className='profile__password'>
                        <h4 className='profile__subtitle'>Password:</h4>
                        <h4 className='profile__details'>*******</h4>
                    </div>
                    <div className='profile__location'>
                        <h4 className='profile__subtitle'>Location:</h4>
                        <h4 className='profile__details'>Canada</h4>
                    </div>
                    <div className='profile__email'>
                        <h4 className='profile__subtitle'>Email:</h4>
                        <h4 className='profile__details'>isabell.teuber@gmail.com</h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserInfo;