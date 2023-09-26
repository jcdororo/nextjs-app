'use client'
import React from 'react'
import usePagination from '@lucasmogari/react-pagination'
interface PaginationProps {
  page: number;
  totalItems: number;
  perPage: number;
}

const Pagenation = ({
  page, 
  totalItems, 
  perPage
}: PaginationProps) => {

  const { fromItem, toItem, getPageItem, totalPages } = usePagination({
    totalItems: totalItems,
    page: page,
    itemsPerPage: perPage,
    maxPageItems: 3
  })

  const firstPage = 1;

  const nextPage = Math.min(page + 1, totalPages);

  const prevPage = Math.max(page - 1, firstPage);

  const arr = new Array(totalPages + 2);

  // console.log('getPageItem',getPageItem)
  // console.log('totalPages',totalPages)

  return (
    <div>
      {[...arr].map((_, i) => {
        const {page, disabled, current } = getPageItem(i);
        // console.log('page, disabled, current',page, disabled, current)
        if(page === 'previous') {
          return (<span key={i}>{"<"}</span>)
        }
        if(page === 'next') {
          return (<span key={i}>{">"}</span>)
        }
        if(page === 'gap') {
          return (<span key={i}>...</span>)
        }
        return (<span key={i}>{page}</span>)
      })}
    </div>
  )
}

export default Pagenation