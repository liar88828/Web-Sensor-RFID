'use client'
import AnggotaTabel from '@/components/tabels/Anggota'
import Link from 'next/link'
import React, {useState} from 'react'
import {IAnggotaCreate} from "@/utils/zod/schema";
import ReactPaginate from "react-paginate";

export type IAnggota = Required<IAnggotaCreate>[]

const exampleData: IAnggota = [
  {
    id: '1231231',
    nama: 'febrian',
    alamat: "semarang",
    email: 'Mariya@gmail.com',
    no_hp: "0123121231",
    // hewan
    hewan: 'burung hantu',
    warna: "hijau",
    //
    sensor: '1231231'
  },

  {
    id: '12312231',
    nama: 'Alif',
    alamat: "Ungaran",
    email: 'Anwar@gmail.com',
    no_hp: "0123121312",
    // hewan
    hewan: 'burung jalak',
    warna: "merah",
    //
    sensor: '1412'
  }, {
    id: '123121',
    nama: 'Alif',
    alamat: "Ungaran",
    email: 'Anwar@gmail.com',
    no_hp: "0123121312",
    // hewan
    hewan: 'burung jalak',
    warna: "merah",
    //
    sensor: '1412'
  }, {
    id: '41342342',
    nama: 'Alif',
    alamat: "Ungaran",
    email: 'Anwar@gmail.com',
    no_hp: "0123121312",
    // hewan
    hewan: 'burung jalak',
    warna: "merah",
    //
    sensor: '1412'
  }, {
    id: '25432',
    nama: 'Alif',
    alamat: "Ungaran",
    email: 'Anwar@gmail.com',
    no_hp: "0123121312",
    // hewan
    hewan: 'burung jalak',
    warna: "merah",
    //
    sensor: '1412'
  }, {
    id: '5234523',
    nama: 'Alif',
    alamat: "Ungaran",
    email: 'Anwar@gmail.com',
    no_hp: "0123121312",
    // hewan
    hewan: 'burung jalak',
    warna: "merah",
    //
    sensor: '1412'
  }, {
    id: '234524',
    nama: 'Alif',
    alamat: "Ungaran",
    email: 'Anwar@gmail.com',
    no_hp: "0123121312",
    // hewan
    hewan: 'burung jalak',
    warna: "merah",
    //
    sensor: '1412'
  }, {
    id: '24523',
    nama: 'Alif',
    alamat: "Ungaran",
    email: 'Anwar@gmail.com',
    no_hp: "0123121312",
    // hewan
    hewan: 'burung jalak',
    warna: "merah",
    //
    sensor: '1412'
  }, {
    id: '23452',
    nama: 'Alif',
    alamat: "Ungaran",
    email: 'Anwar@gmail.com',
    no_hp: "0123121312",
    // hewan
    hewan: 'burung jalak',
    warna: "merah",
    //
    sensor: '1412'
  }, {
    id: '3423',
    nama: 'Alif',
    alamat: "Ungaran",
    email: 'Anwar@gmail.com',
    no_hp: "0123121312",
    // hewan
    hewan: 'burung jalak',
    warna: "merah",
    //
    sensor: '1412'
  }, {
    id: 'asdasdasdafasdf',
    nama: 'Alif',
    alamat: "Ungaran",
    email: 'Anwar@gmail.com',
    no_hp: "0123121312",
    // hewan
    hewan: 'burung jalak',
    warna: "merah",
    //
    sensor: '1412'
  }, {
    id: 'asdasd',
    nama: 'Alif',
    alamat: "Ungaran",
    email: 'Anwar@gmail.com',
    no_hp: "0123121312",
    // hewan
    hewan: 'burung jalak',
    warna: "merah",
    //
    sensor: '1412'
  },
]
export default function Page() {
  const [search, setSearch] = useState<string>('')
  // const [data,setData] = useState<IAnggota>(exampleData)

  const filteredData = exampleData.filter((el) => {
    if (search === '') {
      return el;
    } else {
      return el.nama.toLowerCase().includes(search)
    }
  })


  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage: number = 1
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = filteredData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % filteredData.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };


  return (
    <section>

      <div className={'mb-4 flex gap-2'}>
        <Link
          className='btn btn-primary'
          href={'/anggota/create'}>
          Create
        </Link>

        <input type="text"
               placeholder={'Cari Nama Anggota ....'}
               onChange={(e) => setSearch(e.target.value)}
               className={'input input-primary'}
        />
      </div>

      <div>
        <div className='border'>
          {/* <TabelAnggota /> */}
          <AnggotaTabel datas={currentItems}/>
        </div>
      </div>

      <div className="mt-4">
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

    </section>
  )
}
