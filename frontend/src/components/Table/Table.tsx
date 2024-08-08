import './Table.css';
import '../../App/index.css';
import React from 'react';

interface TableProps {
  columns: string[];
  data: Record<string, string | number | null>[];
  currentPage: number;
  dataPerPage: number;
}

const Table: React.FC<TableProps> = ({ columns, data, currentPage, dataPerPage }) => {
  const lastDataIndex = currentPage * dataPerPage;
  const firstDataIndex = lastDataIndex - dataPerPage;
  const currentData = data.slice(firstDataIndex, lastDataIndex);

  return (
    <table>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {currentData.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column, colIndex) => (
              <td key={colIndex}>{row[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;