import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';
import searchErrorIcon from '../assets/search_error.svg';

interface PokemonCard {
  id: string;
  name: string;
  images: {
    small: string;
    large: string;
  };
}

interface PokemonListProps {
  searchTerm: string;
}

const PokemonList: React.FC<PokemonListProps> = ({ searchTerm }) => {
  const [cards, setCards] = useState<PokemonCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const cardsPerPage = 12;

  useEffect(() => {
    const fetchCards = async () => {
      setLoading(true); 
      try {
        const response = await fetch(`https://api.pokemontcg.io/v2/cards?pageSize=${cardsPerPage}&page=${currentPage}`);
        const data = await response.json();
        setCards(data.data);
        setTotalPages(Math.ceil(data.totalCount / cardsPerPage));
      } catch (err) {
        setError('Failed to fetch cards');
      } finally {
        setLoading(false);
      }
    };

    if (!searchTerm) {
      fetchCards();
    }
  }, [currentPage, searchTerm]);

  useEffect(() => {
    if (searchTerm) {
      setCurrentPage(1); // Reset to first page when searching
      const fetchAllCards = async () => {
        setLoading(true); // State is set to true before fetching
        try {
          const response = await fetch(`https://api.pokemontcg.io/v2/cards?q=name:${searchTerm}*&pageSize=${cardsPerPage}&page=${currentPage}`);
          const data = await response.json();
          setCards(data.data);
          setTotalPages(Math.ceil(data.totalCount / cardsPerPage));
        } catch (err) {
          setError('Failed to fetch cards');
        } finally {
          setLoading(false);
        }
      };

      fetchAllCards();
    }
  }, [searchTerm, currentPage]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center mt-8">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 mb-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        <span>Loading</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center mt-8">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 mb-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        <span>{error}</span>
      </div>
    );
  }

  if (cards.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center mt-8">
        <img src={searchErrorIcon} alt="No results" className="w-24 h-24 mb-4" />
        <span>We couldn't find any Pokémon cards with that name... try again!</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
          .font-prompt {
            font-family: 'Prompt', sans-serif;
          }
        `}
      </style>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 justify-center items-center">
        {cards.map(card => (
          <div key={card.id} className="bg-gray-800 rounded shadow p-4">
            <img src={card.images.small} alt={card.name} className="w-full h-auto" />
            <h2 className="text-center mt-2 bg-[#2E8B57] rounded-lg p-1 max-w-xs mx-auto w-3/4 font-prompt text-white">{card.name}</h2>
          </div>
        ))}
      </div>
      <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
    </div>
  );
};

export default PokemonList;