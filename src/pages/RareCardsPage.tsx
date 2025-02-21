import React, { useState } from 'react';
import Header from '../components/Header';
import RarePokemonList from '../components/RarePokemonList';
import SearchBar from '../components/SearchBar';
import pikachuIcon from '../assets/pikachu-icon.svg';

const RareCardsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="container mx-auto px-4 flex flex-col items-center">
      <Header setMenuOpen={() => {}} />
      <div className="mt-2 flex flex-col items-center">
        <img src={pikachuIcon} alt="Pikachu Icon" className="w-24 h-24 mb-1" />
        <SearchBar setSearchTerm={setSearchTerm} />
        <RarePokemonList searchTerm={searchTerm} />
      </div>
    </div>
  );
};

export default RareCardsPage;
