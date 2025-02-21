import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import PokemonList from './components/PokemonList';
import SearchBar from './components/SearchBar';
import pikachuIcon from './assets/pikachu-icon.svg';
import RareCardsPage from './pages/RareCardsPage';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Router>
      <div className="container mx-auto px-4 flex flex-col items-center">
        <Header setMenuOpen={setMenuOpen} />
        <Routes>
          <Route path="/" element={
            <div className="mt-2 flex flex-col items-center">
              <img src={pikachuIcon} alt="Pikachu Icon" className="w-24 h-24 mb-1" />
              <SearchBar setSearchTerm={setSearchTerm} />
              <PokemonList searchTerm={searchTerm} />
            </div>
          } />
          <Route path="/rare-cards" element={<RareCardsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;