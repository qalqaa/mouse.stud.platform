import React, { useState } from 'react';

interface WithPaginationProps {
  data: Record<string, string | number | null>[];
  dataPerPage: number;
  children: (props: {
    currentPage: number;
    dataPerPage: number;
    totalData: number;
    paginate: (pageNumber: number) => void;
  }) => React.ReactNode;
}

const WithPagination: React.FC<WithPaginationProps> = ({ data, dataPerPage, children }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      {children({
        currentPage,
        dataPerPage,
        totalData: data.length,
        paginate,
      })}
    </>
  );
};

export default WithPagination;