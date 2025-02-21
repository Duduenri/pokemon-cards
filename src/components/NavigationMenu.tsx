import React from 'react';

interface NavigationMenuProps {
  menuOpen: boolean;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({ menuOpen }) => {
  return (
    <nav className={`${menuOpen ? 'block bg-gray-700' : 'hidden'} md:flex bg-gray-800 md:bg-transparent`}>
      <ul className="flex space-x-4 md:flex-row md:space-x-4 md:space-y-0 flex-col space-y-4">
        <li><a href="#" className="hover:text-gray-400">All Cards</a></li>
        <li><a href="#" className="hover:text-gray-400">Promo Cards</a></li>
        <li><a href="#" className="hover:text-gray-400">Secret/Rare Cards</a></li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;
