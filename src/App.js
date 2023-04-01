import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import JournalingPage from './pages/JournalingPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter className='browserRouter'>
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/journal' element={<JournalingPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
