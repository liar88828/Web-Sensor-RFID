'use client'
import React from 'react';
import Link from "next/link";
import {useSearchParams} from "next/navigation";
import {formatDate, formatTime} from "@/utils/formatIndonesia";
import {DataRecord} from "@/app/(sites)/dashboard/components/DataRecords";
import {IdRecord} from "@/interface/profile/example1";


interface RecordTable {
  dashboard?: boolean;
  data: DataRecord[] | IdRecord[];
}

function Record(
  {data, dashboard = false}:
    RecordTable
) {
  const id = useSearchParams().get('id') as string

  return (
    <div className="overflow-x-auto bg-base-100 rounded shadow ">
      <table className={`table table-zebra static ${dashboard && 'table-xs'}`}>
        <thead>
        <tr>
          <th>No</th>
          {
            dashboard ? <>
                <th>Kode</th>
              </>
              :null
              // <th>Id</th>
          }
          <th>Lokasi</th>
          <th>Tanggal</th>
          <th>Jam Masuk</th>
          {id && <th>Action</th>}
        </tr>
        </thead>
        <tbody>
        {
          !data
          || data.length === 0
            ?
            <tr className={'skeleton w-16 h-16 rounded-full shrink-0'}>
              <th>Data Kosong</th>
              {/*<th>Data Kosong</th>*/}
              <th>Data Kosong</th>
              <th>Data Kosong</th>
              <th>Data Kosong</th>
              {id && <th>
                <Link className={'btn btn-accent shadow'}
                      href={'/record/create?callback=/profile' + id}>
                  Buat Record
                </Link>
              </th>
              }
            </tr>
            :
            data.map((record, i) => <tr key={record.id}>
                <td>{i + 1}</td>
                {
                  dashboard ? <td>{
                      record.Sensor
                        ? record.Sensor.kode
                        : 'Kosong'
                    }</td>
                    :null
                    // <td>{record.id}</td>
                }
                <td>{record.lokasi}</td>
                <td>{formatDate(record.tanggal)}</td>
                <td>{formatTime(record.jamMasuk)}</td>
                {id && <td>
                  <button className={'btn btn-xs btn-primary'}>Click</button>
                </td>
                }
              </tr>
            )}
        </tbody>
      </table>
    </div>
  );
}

export default Record;
