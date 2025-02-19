import React, { useState } from 'react'
import pokedexIcon from '../assets/pokeball-icon.svg'

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center fixed top-0 w-full">
      <div className="flex items-center">
        <img src={pokedexIcon} alt="Pokedex Icon" className="h-8 w-8 mr-2" />
        <span className="text-xl font-bold">Pokedex</span>
      </div>
      <nav className={`${menuOpen ? 'block' : 'hidden'} md:flex`}>
        <ul className="flex space-x-4 md:flex-row md:space-x-4 md:space-y-0 flex-col space-y-4">
          <li><a href="#" className="hover:text-gray-400">Home</a></li>
          <li><a href="#" className="hover:text-gray-400">About</a></li>
          <li><a href="#" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </nav>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </header>
  )
}

export default Header
