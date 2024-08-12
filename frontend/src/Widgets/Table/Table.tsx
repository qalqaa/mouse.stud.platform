import './Table.css';
import '../../App/index.css';
import { useEffect, useState } from 'react';

interface TableProps {
  columns: string[];
  data: Record<string, string | number | null>[];
}


const Table: React.FC<TableProps> = ({ columns, data }) => {
  const [itemsPerPage] = useState(10);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedData, setDisplayedData] = useState<TableProps["data"]>([]);

  useEffect(() => {
    setIsLoading(true);
    const offset = (currentPage - 1) * itemsPerPage;
    const newData = data.slice(offset, offset + itemsPerPage);
    setDisplayedData(newData);
    setIsLoading(false);
  }, [currentPage]);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const pagesArray = Array.from({ length: totalPages }, (_, index) => index + 1);


  return (
    <div>
      <table>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {displayedData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => (
                <td key={colIndex}>{row[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className='table__pagination__apperance'>
      {pagesArray.map((page, index) => (
              <button key={index} onClick={() => setCurrentPage(page)}>{page}</button>
            ))}
      </div>
    </div>
  );
};

export default Table;