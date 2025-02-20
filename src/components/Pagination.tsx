import React from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 3;
    const startPage = Math.max(1, currentPage - 1);
    const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    if (endPage < totalPages) {
      pageNumbers.push('...', totalPages);
    }

    return pageNumbers;
  };

  return (
    <div className="flex flex-wrap justify-center space-x-2 mt-4">
      {getPageNumbers().map((page, index) => (
        <button
          key={index}
          onClick={() => typeof page === 'number' && onPageChange(page)}
          className={`px-4 py-2 m-1 rounded ${currentPage === page ? 'bg-gray-800 text-gray-200' : 'bg-gray-200 text-gray-800'}`}
          disabled={page === '...'}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
