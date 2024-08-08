import React from 'react';

export interface TablePaginationProps {
  dataPerPage: number;
  totalData: number;
  currentPage: number;
  paginate: (pageNumber: number) => void;
}

const TablePagination: React.FC<TablePaginationProps> = ({ dataPerPage, totalData, currentPage, paginate }) => {
  const pageNumbers: number[] = [];
  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className='table__counter__list'>
      {pageNumbers.map(number => (
        <li
          className={`table__counter__item ${currentPage === number ? 'active' : ''}`}
          key={number}
        >
          <a href="!#" className="page-link" onClick={() => paginate(number)}>
            {number}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default TablePagination;