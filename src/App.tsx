import React, { useState } from 'react';
import Header from './components/Header';
import PokemonList from './components/PokemonList';
import SearchBar from './components/SearchBar';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="container mx-auto px-4 flex justify-center">
      <Header setMenuOpen={setMenuOpen} />
      <div className="mt-8"> {/* Reduzir a margem superior para evitar sobreposição */}
        <SearchBar />
        <PokemonList />
      </div>
    </div>
  );
}

export default App;
