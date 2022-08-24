import React from 'react'
import ReactPaginate from 'react-paginate';
import style from './Pagination.module.scss'

function Pagination({value,onChangePage}) {
  return (
    <ReactPaginate className={style.main}
    breakLabel="..."
    nextLabel=">"
    onPageChange={e=>onChangePage(e.selected+1)}
    pageRangeDisplayed={4}
    pageCount={3}
    previousLabel="<"
    forcePage={value-1}
    renderOnZeroPageCount={null}
  />
  )
}

export default Pagination