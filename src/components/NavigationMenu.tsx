import React from 'react';
import { Link } from 'react-router-dom';

interface NavigationMenuProps {
  menuOpen: boolean;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({ menuOpen }) => {
  return (
    <nav className={`${menuOpen ? 'block bg-gray-700' : 'hidden'} md:flex bg-gray-800 md:bg-transparent`}>
      <ul className="flex space-x-4 md:flex-row md:space-x-4 md:space-y-0 flex-col space-y-4">
        <li><Link to="/" className="hover:text-gray-400">All Cards</Link></li>
        <li><Link to="/rare-cards" className="hover:text-gray-400">Rare Cards</Link></li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;
