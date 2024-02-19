'use client'
import React, {useState} from 'react'

import {enableCache, Icon} from '@iconify/react/dist/iconify.js'
import Link from "next/link";
import ReactPaginate from "react-paginate";
import {IAnggota, oldAnggota} from "@/interface/type";

enableCache('local');


function AnggotaTabel({datas}: {
  datas:IAnggota[]
}) {
  return (<div className="overflow-x-auto border border-black rounded bg-base-100/70  ">
      <table className="table static ">
        {/* head */}
        <thead className='bg-base-100/90'>
        <tr>
          <th>
            <label>
              <input type="checkbox" className="checkbox"/>
            </label>
          </th>
          <th>Nama</th>
          <th>Burung</th>
          <th>Sensor</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody className='bg-base-100/70'>
        {/* row 1 */}
        {datas.map((data, i) => (

          <tr key={data.id} className={i % 2 === 0 ? 'bg-base-200' : ""}>

            <th>
              <label>
                <input type="checkbox" className="checkbox"/>
              </label>
            </th>

            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    {/* <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" /> */}
                  </div>
                </div>
                <div>
                  {/*<div className="font-bold">{data.nama}</div>*/}
                  {/*<div className="text-sm opacity-50">{data.no_hp}</div>*/}
                  {/*<div className="text-sm opacity-50">{data.email}</div>*/}
                  {/*<div className="text-sm opacity-50">{data.alamat}</div>*/}
                </div>
              </div>
            </td>
            <td>
              {data.hewan}

            </td>
            <td>
              {/*{data.sensor}*/}
              <br/>
              <span className="badge badge-primary badge-sm">{data.warna}</span>
            </td>
            <th>
              <div className={'flex gap-1'}>
                <Link href={`/anggota/detail?id=${data.id}`}
                      className="btn btn-primary btn-xs">
                  <Icon icon="fluent:apps-list-detail-24-filled"/>
                </Link>

                <button
                  className="btn btn-error btn-xs">
                  <Icon icon="material-symbols-light:delete-sharp"/>
                </button>

                <Link href={`/anggota/edit?id=${data.id}`}
                      className="btn btn-accent btn-xs">
                  <Icon icon="uil:edit"/>
                </Link>
              </div>

            </th>
          </tr>
        ))}


        </tbody>
        {/* foot */}
        <tfoot>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Job</th>
          <th>Favorite Color</th>
          <th></th>
        </tr>
        </tfoot>

      </table>
    </div>

  )
}



function Anggota( ) {
  const [search, setSearch] = useState<string>('')
  // const [data,setData] = useState<IAnggota>(exampleData)

  // const filteredData = exampleData.filter((el) => {
  //   if (search === '') {
  //     return el;
  //   } else {
  //     return el.nama.toLowerCase().includes(search)
  //   }
  // })
  //

  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage: number = 1
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  // const currentItems = filteredData.slice(itemOffset, endOffset);
  // const pageCount = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageClick = (event: any) => {
    // const newOffset = (event.selected * itemsPerPage) % filteredData.length;
    // console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    // setItemOffset(newOffset);
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
          {/*<AnggotaTabel datas={currentItems}/>*/}
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
          pageCount={
            // pageCount
            2
          }
          //
          previousClassName={'join-item btn'}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
        />
      </div>

    </section>
  );
}

export default Anggota;
