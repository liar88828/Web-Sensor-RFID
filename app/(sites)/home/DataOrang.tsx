'use client'
import React from 'react';
import {TableOrang} from "@/components/tabels/basic/Dashboard";
import {Paginations, usePaginations} from "@/components/elements/Paginations";


const dataOrang = [
  {
    "id": "515258",
    "name": "Willis Conroy",
    "alamat": "Brand",
    "no_hp": "501-028-967"
  },
  {
    "id": "108862",
    "name": "Jean Sipes",
    "alamat": "Web",
    "no_hp": "501-050-298"
  },
  {
    "id": "16503",
    "name": "Duane Lubowitz V",
    "alamat": "Paradigm",
    "no_hp": "501-584-596"
  },
  {
    "id": "463733",
    "name": "Sonja Hirthe-Klocko V",
    "alamat": "Response",
    "no_hp": "501-537-961"
  },
  {
    "id": "381324",
    "name": "Percy Christiansen",
    "alamat": "Communications",
    "no_hp": "501-600-762"
  },
  {
    "id": "694907",
    "name": "Julius Kovacek",
    "alamat": "Interactions",
    "no_hp": "501-139-005"
  },
  {
    "id": "233332",
    "name": "Dr. Leon King",
    "alamat": "Assurance",
    "no_hp": "501-569-701"
  },
  {
    "id": "592203",
    "name": "Levi O'Connell",
    "alamat": "Web",
    "no_hp": "501-986-160"
  },
  {
    "id": "343112",
    "name": "Alicia Friesen DDS",
    "alamat": "Accounts",
    "no_hp": "501-696-336"
  },
  {
    "id": "950853",
    "name": "Edmond Zulauf",
    "alamat": "Data",
    "no_hp": "501-857-916"
  }
]

function DataOrang() {

  const {currentItems, handlePageClick, pageCount} = usePaginations(dataOrang, 10)

  return (
    // <div className=" p-5 sm:w-[45%] ">
    <div className="rounded bg-blue-200 p-2">
      <h1 className="font-bold">Data Orang</h1>

      <div className="overflow-x-auto h-60">
        <TableOrang data={currentItems}/>
        {/*</div>*/}

      </div>
      <Paginations pageCount={pageCount} handlePageClick={handlePageClick}/>

    </div>
  );
}

export default DataOrang;
