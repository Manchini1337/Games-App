import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import GamePage from './components/GamePage/GamePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/game/:gid' element={<GamePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
