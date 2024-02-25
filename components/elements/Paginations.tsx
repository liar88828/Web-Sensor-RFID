import React, {useState} from 'react';
import ReactPaginate from "react-paginate";
import {useRQSGlobalState} from "@/hook/useGlobalState";
import {IPages} from "@/interface/type";


export function usePaginations(data: any[], showItem: number,to:IPages) {
  // const [showItem, setShowItem] = useState<number>(0);
  const [_, setPage] = useRQSGlobalState([to,'pagination'], 0)
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


export function Paginations({handlePageClick, pageCount,}: {
  handlePageClick: (event: any) => void,
  pageCount: number
}) {


  return (
    <div className="flex justify-center">
      <ReactPaginate
        className={'join'}
        //
        nextClassName={'join-item btn'}
        nextLabel="next >"
        //
        breakClassName={'join-item btn btn-disabled'}
        breakLabel="..."
        //
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        //
        activeClassName={'join-item btn btn-active'}
        pageClassName={'join-item btn  '}
        pageCount={pageCount}
        //
        previousClassName={'join-item btn'}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}
