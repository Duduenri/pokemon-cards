import { useState } from 'react';
import Header from './components/Header';
import PokemonList from './components/PokemonList';
import SearchBar from './components/SearchBar';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="container mx-auto px-4 flex justify-center">
      <Header setMenuOpen={setMenuOpen} />
      <div className="mt-8"> 
        <SearchBar setSearchTerm={setSearchTerm} />
        <PokemonList searchTerm={searchTerm} />
      </div>
    </div>
  );
}

export default App;