import Navigation from '../components/Navigation/Navigation';
import UserInfo from '../components/UserInfo/UserInfo';
import Inspiration from '../components/Inspiration/Inspiration';
import GeneralProfile from '../components/GeneralProfile/GeneralProfile';
import { useNavigate } from 'react-router-dom';


const ProfilePage = ({ setIsUserLoggedIn }) => {
    const navigate = useNavigate();

    const logOut = () => {
        sessionStorage.removeItem("token");
        setIsUserLoggedIn(false);
        navigate('/');
    };

    return (
        <section>
            <UserInfo />
            <Inspiration />
            <GeneralProfile logOut={logOut} />
            <Navigation />
        </section>
    );
};

export default ProfilePage;