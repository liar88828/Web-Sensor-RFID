'use client'
import React from 'react'

import {enableCache, Icon} from '@iconify/react/dist/iconify.js'
import Link from "next/link";
import {IAnggota} from "@/app/(sites)/anggota/page";

enableCache('local');

export default function AnggotaTabel({datas}: {
  datas:IAnggota
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
                  <div className="font-bold">{data.nama}</div>
                  {/*<div className="text-sm opacity-50">{data.no_hp}</div>*/}
                  {/*<div className="text-sm opacity-50">{data.email}</div>*/}
                  <div className="text-sm opacity-50">{data.alamat}</div>
                </div>
              </div>
            </td>
            <td>
              {data.hewan}

            </td>
            <td>{data.sensor}
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
