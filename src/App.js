import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import JournalingPage from './pages/JournalingPage';
import ProfilePage from './pages/ProfilePage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Start from './pages/Start';
import { useState } from 'react';
import HomepageGraphs from './pages/HomepageGraphs';

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(!!sessionStorage.getItem("token"));

  console.log(isUserLoggedIn);


  return (
    <div className="App">
      <BrowserRouter className='browserRouter'>
        <Routes>
          <Route path='/' element={<Start />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/login' element={<Login setIsUserLoggedIn={setIsUserLoggedIn} />}></Route>
          <Route path='/compass' element={<Homepage />}></Route>
          <Route path='/compass/insights' element={<Homepage />}></Route>
          <Route path='/compass/graphs' element={<HomepageGraphs />}></Route>
          <Route path='/journal' element={<JournalingPage />}></Route>
          <Route path='/profile' element={<ProfilePage setIsUserLoggedIn={setIsUserLoggedIn} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
