import React, { useState } from 'react';
import pokedexIcon from '../assets/pokeball-icon.svg';

interface HeaderProps {
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ setMenuOpen }) => {
  const [menuOpen, setMenuOpenLocal] = useState(false);

  const toggleMenu = () => {
    const newMenuOpen = !menuOpen;
    setMenuOpenLocal(newMenuOpen);
    setMenuOpen(newMenuOpen);
  };

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center fixed top-0 w-full z-10">
      <div className="flex items-center">
        <img src={pokedexIcon} alt="Pokedex Icon" className="h-8 w-8 mr-2" />
        <span className="text-xl font-bold">Pokedex</span>
      </div>
      <nav className={`${menuOpen ? 'block bg-gray-700' : 'hidden'} md:flex bg-gray-800 md:bg-transparent`}>
        <ul className="flex space-x-4 md:flex-row md:space-x-4 md:space-y-0 flex-col space-y-4">
          <li><a href="#" className="hover:text-gray-400">All Cards</a></li>
          <li><a href="#" className="hover:text-gray-400">Promo Cards</a></li>
          <li><a href="#" className="hover:text-gray-400">Secret/Rare Cards</a></li>
        </ul>
      </nav>
      <div className="md:hidden">
        <button onClick={toggleMenu} className={`text-white focus:outline-none ${menuOpen ? 'bg-gray-700' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
