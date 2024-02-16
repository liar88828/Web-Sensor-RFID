'use client'
import React from 'react'

import { Icon, enableCache } from '@iconify/react/dist/iconify.js'
import Link from "next/link";
enableCache( 'local' );

const date = new Date()
const lastDate = new Date( date.setDate( date.getDate() - 1 ) )
const exampleDataRecord = [
  {
    id: 2312312,
    tanggal: date.toLocaleDateString( 'id-ID', { dateStyle: 'full' } ),
    jamMasuk: date.toLocaleTimeString( 'id-ID', { hour: '2-digit', 'minute': "2-digit" } ),
    lokasi: 'Semarang',
    warna: "merah",
  },
  {
    id: 231231,
    tanggal: lastDate.toLocaleDateString( 'id-ID', { dateStyle: 'full' } ),
    jamMasuk: lastDate.toLocaleTimeString( 'id-ID', { hour: '2-digit', 'minute': "2-digit" } ),
    lokasi: 'Semarang',
    warna: "hijau",
  },
  {
    id: 231231,
    tanggal: lastDate.toLocaleDateString( 'id-ID', { dateStyle: 'full' } ),
    jamMasuk: lastDate.toLocaleTimeString( 'id-ID', { hour: '2-digit', 'minute': "2-digit" } ),
    lokasi: 'Jogja',
    warna: "orange",
  }
]

export default function RecordTabel ()
{
  return (
    <div  >
      <div className="overflow-x-auto border border-black rounded bg-base-100/70  ">
        <table className="table static">
          {/* head */ }
          <thead className='bg-base-100/90'>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>No</th>
              <th>RFID</th>
              <th>Kode</th>
              <th>Status</th>
              <th>Warna</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className='bg-base-100/70'>
            {/* row 1 */ }
            { exampleDataRecord.map( ( data, i ) => (

              <tr key={ data.id } className={ i % 2 === 0?'bg-base-300/30':""}>

            <th>
              <label>
                <input type="checkbox" className="checkbox " />
              </label>
            </th>
            <th>
              { i + 1 }
            </th>

            <td> { data.lokasi } </td>
            <td> { data.tanggal } </td>
            <td> { data.jamMasuk } </td>
            <td>{ data.warna }</td>
            {/* <td>{ data.sensor }</td> */ }
                <th>
                  <div className={'flex gap-1'}>
                    {/*<Link href={`/record/detail?id=${data.id}`}*/}
                    {/*      className="btn btn-primary btn-xs">*/}
                    {/*  <Icon icon="fluent:apps-list-detail-24-filled"/>*/}
                    {/*</Link>*/}

                    <button
                      className="btn btn-error btn-xs">
                      <Icon icon="material-symbols-light:delete-sharp"/>
                    </button>

                    <Link href={`/record/edit?id=${data.id}`}
                          className="btn btn-accent btn-xs">
                      <Icon icon="uil:edit"/>
                    </Link>
                  </div>
                </th>
              </tr>
            ))}


          </tbody>
          {/* foot */}
          <tfoot className='bg-base-100/90'>
          <tr>
            <th></th>
            <th>No</th>
            <th>RFID</th>
            <th>Kode</th>
            <th>Status</th>
            <th>Warna</th>
            <th>Action</th>
          </tr>
          </tfoot>

        </table>
      </div>
    </div>
  )
}
