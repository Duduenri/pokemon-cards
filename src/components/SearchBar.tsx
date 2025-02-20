import React from 'react';

const SearchBar: React.FC = () => {
  return (
    <div className="flex justify-center mt-4 w-full">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          placeholder="Search for a card..."
          className="w-full p-2 pl-10 rounded-full bg-gray-700 text-white focus:outline-none"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
      </div>
    </div>
  );
};

export default SearchBar;
