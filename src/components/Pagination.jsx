import React, { useState, useEffect } from 'react';
import {
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Pagination as PaginationUI,
} from './ui/pagination';

const Pagination = ({ totalData, itemsPerPage = 10, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    setTotalPages(Math.ceil(totalData / itemsPerPage));
    setCurrentPage(1);
  }, [totalData, itemsPerPage]);

  useEffect(() => {
    if (onPageChange) {
      onPageChange(currentPage);
    }
  }, [currentPage, onPageChange]);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    totalPages > 0 && (
      <PaginationUI>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => handlePageChange(currentPage - 1)}
              className={currentPage === 1 ? 'disabled' : 'cursor-pointer'}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink className="cursor-default" isActive>
              {`${currentPage} / ${totalPages}`}
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              onClick={() => handlePageChange(currentPage + 1)}
              className={
                currentPage === totalPages ? 'disabled' : 'cursor-pointer'
              }
            />
          </PaginationItem>
        </PaginationContent>
      </PaginationUI>
    )
  );
};

export default Pagination;
