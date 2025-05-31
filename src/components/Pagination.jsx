import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import "../styles/pagination.scss"

const Pagination = ({
  currentPage,
  totalPages,
  rowsPerPage,
  totalItems,
  onPageChange,
  onRowsPerPageChange
}) => {
  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const startItem = (currentPage - 1) * rowsPerPage + 1;
  const endItem = Math.min(currentPage * rowsPerPage, totalItems);

  return (
    <div className="pagination-container">
      <div className="pagination-info">
        <span>1 - {totalItems} of {totalItems}</span>
        <span className="ml-2">
          <span className='row'>   Rows per page:</span>
          <select 
            value={rowsPerPage} 
            onChange={(e) => onRowsPerPageChange(Number(e.target.value))}
            className="select-rows"
          >
            <option value={5}>5 rows</option>
            <option value={10}>10 rows</option>
            <option value={20}>20 rows</option>
            <option value={50}>50 rows</option>
          </select>
        </span>
      </div>
      
      <div className="pagination-controls">
        <button 
          className="btn btn--icon" 
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          <ChevronLeft size={18} />
        </button>
        
        {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
          let pageNum = i + 1;
          if (totalPages > 5) {
            if (currentPage > 3) {
              pageNum = currentPage - 3 + i;
            }
            if (currentPage > totalPages - 2) {
              pageNum = totalPages - 4 + i;
            }
          }
          
          return (
            <button
              key={pageNum}
              className={`pagination-button ${currentPage === pageNum ? 'active' : ''}`}
              onClick={() => onPageChange(pageNum)}
            >
              {pageNum}
            </button>
          );
        })}
        
        <button 
          className="btn btn--icon" 
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;