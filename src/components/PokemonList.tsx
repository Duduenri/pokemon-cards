import React, { useEffect, useState } from 'react';

interface PokemonCard {
  id: string;
  name: string;
  images: {
    small: string;
    large: string;
  };
}

const PokemonList: React.FC = () => {
  const [cards, setCards] = useState<PokemonCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch('https://api.pokemontcg.io/v2/cards?pageSize=10');
        const data = await response.json();
        setCards(data.data);
      } catch (err) {
        setError('Failed');
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 justify-center items-center">
      {cards.map(card => (
        <div key={card.id} className="bg-white rounded shadow p-4">
          <img src={card.images.small} alt={card.name} className="w-full h-auto" />
          <h2 className="text-center mt-2">{card.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
