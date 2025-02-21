import React from 'react';
import Header from '../components/Header';
import RarePokemonList from '../components/RarePokemonList';

const RareCardsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 flex flex-col items-center">
      <Header setMenuOpen={() => {}} />
      <div className="mt-8 flex flex-col items-center">
        <RarePokemonList />
      </div>
    </div>
  );
};

export default RareCardsPage;
