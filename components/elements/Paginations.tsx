import React, {useState} from 'react';
import ReactPaginate from "react-paginate";
import {useRQSGlobalState} from "@/hook/useGlobalState";
import {IPages, IPagination} from "@/interface/type";


export function usePaginations<T>(data: T[], showItem: number, to: IPages) {
  // const [showItem, setShowItem] = useState<number>(0);
  const [_, setPage] = useRQSGlobalState([to, 'pagination'], 0)
  const [itemOffset, setItemOffset] = useState<number>(0);
  const itemsPerPage: number = showItem
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);
  const currentPage = 0 - (endOffset / 10)
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
    setPage(currentPage)
  };

  return {currentItems, handlePageClick, pageCount, currentPage}
}


export function Paginations(
  {handlePageClick, pageCount, size = 'md'}:
    IPagination
) {

  return (
    <div className="flex justify-center mt-2">
      <ReactPaginate
        className={'join shadow-xl'}
        //
        nextClassName={`join-item btn btn-${size} `}
        nextLabel="next >"
        //
        breakClassName={`join-item btn btn-disabled btn-${size}`}
        breakLabel="..."
        //
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        //
        activeClassName={`join-item btn btn-active btn-${size}`}
        pageClassName={`join-item btn btn-${size}`}
        pageCount={pageCount}
        //
        previousClassName={`join-item btn btn-${size}`}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}
