import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';

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

    fetchCards();
  }, [currentPage]);

  useEffect(() => {
    if (searchTerm) {
      const fetchAllCards = async () => {
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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 justify-center items-center">
        {cards.map(card => (
          <div key={card.id} className="bg-white rounded shadow p-4">
            <img src={card.images.small} alt={card.name} className="w-full h-auto" />
            <h2 className="text-center mt-2">{card.name}</h2>
          </div>
        ))}
      </div>
      <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
    </div>
  );
};

export default PokemonList;