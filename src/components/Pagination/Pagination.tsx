import React from 'react';
import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss';

type PaginationProps = {
  currentPage: number;
  onChangePage: (number: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({ currentPage, onChangePage }) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(number) => onChangePage(number.selected + 1)}
      pageRangeDisplayed={4} //колочиесктво отображаемых котиков на странице
      pageCount={4} // количество страниц
      forcePage={currentPage - 1}
    />
  );
};

export default Pagination;
