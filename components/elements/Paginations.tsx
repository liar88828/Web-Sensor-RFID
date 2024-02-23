import React, {useState} from 'react';
import ReactPaginate from "react-paginate";


export function usePaginations(data: any[], showItem: number) {
  const [itemOffset, setItemOffset] = useState<number>(0);
  // const [showItem, setShowItem] = useState<number>(0);
  const itemsPerPage: number = showItem
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return {currentItems, handlePageClick, pageCount,}
}


export function Paginations({handlePageClick, pageCount}: {
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
