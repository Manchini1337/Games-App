import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import GamePage from './components/GamePage/GamePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/games-app/' element={<HomePage />} />
        <Route path='/games-app/game/:gid' element={<GamePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
