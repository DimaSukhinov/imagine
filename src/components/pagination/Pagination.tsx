import React from 'react';
import './Pagination.scss';
import {SvgSelector} from "../../assets/icons/SvgSelector";

type PaginationPropsType = {
  totalValues: number
  valuesPerPage: number
  currentPage: number
  changeCurrentPage: (page: number) => void
}

export const Pagination = React.memo(({
                                        totalValues, valuesPerPage, changeCurrentPage, currentPage,
                                      }: PaginationPropsType) => {

  const pages = [];

  for (let i = 1; i <= Math.ceil(totalValues / valuesPerPage); i++) {
    pages.push(i);
  }

  const changePage = (page: number) => () => {
    if (page > 0 && page <= pages.length) changeCurrentPage(page);
  }

  return (
    <div className={'pages'} data-testid={'pagination'}>
      <div>
        <span className={'pages__page'} onClick={changePage(currentPage - 1)}>
          <SvgSelector id={'LEFT_ARROW'}/>
        </span>
        {pages.map(p => <span key={p} data-testid={'pagination-elem'}
                              className={currentPage === p ? 'pages__page pages__page-active' : 'pages__page'}
                              onClick={changePage(p)}>{p}</span>)}
        <span className={'pages__page'} onClick={changePage(currentPage + 1)}>
          <SvgSelector id={'RIGHT_ARROW'}/>
        </span>
      </div>
      <div className={'pages__info'}>
        1-{valuesPerPage} of <span>{totalValues} </span>Results
      </div>
    </div>
  );
});