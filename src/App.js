import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="App">
      <BrowserRouter className='browserRouter'>
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
