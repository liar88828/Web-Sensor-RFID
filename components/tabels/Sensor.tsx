'use client'
import React from 'react'

import {enableCache, Icon} from '@iconify/react/dist/iconify.js'
import Link from "next/link";
import {exampleDataSensor} from "@/utils/asset/exampleData";

enableCache('local');


export default function Sensor() {
  return (
    <div>
      <div className="overflow-x-auto border border-black rounded bg-base-100/70  ">
        <table className="table static ">
          {/* head */}
          <thead className='bg-base-100/90'>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox"/>
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
          {/* row 1 */}
          {exampleDataSensor.map((data, i) => (

            <tr key={data.id} className={i % 2 === 0 ? 'bg-base-200' : ""}>

              <th>
                <label>
                  <input type="checkbox" className="checkbox"/>
                </label>
              </th>
              <th>
                {i + 1}
              </th>

              <td> {data.rfid} </td>
              <td> {data.kode} </td>
              <td> {data.status} </td>
              <td>{data.warna}</td>
              {/* <td>{ data.sensor }</td> */}
              <th>
                <div className={'flex gap-1'}>
                  <Link href={`/sensor/detail?id=${data.id}`}
                        className="btn btn-primary btn-xs">
                    <Icon icon="fluent:apps-list-detail-24-filled"/>
                  </Link>

                  <button
                    className="btn btn-error btn-xs">
                    <Icon icon="material-symbols-light:delete-sharp"/>
                  </button>

                  <Link href={`/sensor/edit?id=${data.id}`}
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
