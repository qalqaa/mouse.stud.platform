import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '../Features/ui/ThemeContext/ThemeContext.tsx';
import ThemeButton from '../Widgets/ui/ThemeButton.tsx';
import './index.css';
import Table from '../components/Table';
import { columns, data } from '../components/Table/testProps.ts';
import TablePagination from '../components/Table/TablePagination.tsx';
import WithPagination from '../components/Table/withPagination.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <ThemeButton />
      <WithPagination data={data} dataPerPage={10}>
        {({ currentPage, dataPerPage, totalData, paginate }) => (
          <>
		  <div className='table__container'>
		  <Table columns={columns} data={data} currentPage={currentPage} dataPerPage={dataPerPage} />
            <TablePagination
              dataPerPage={dataPerPage}
              totalData={totalData}
              currentPage={currentPage}
              paginate={paginate}
            />
		  </div>
          </>
        )}
      </WithPagination>
    </ThemeProvider>
  </React.StrictMode>
);