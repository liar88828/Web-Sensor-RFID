'use client'
import React from 'react';
import {IRecord} from "@/interface/type";
import Link from "next/link";
import {useSearchParams} from "next/navigation";

function Record({data, dashboard = false}: { dashboard?: boolean, data: IRecord[] }) {
  const id = useSearchParams().get('id') as string

  return (

    <table className={`table table-zebra static ${dashboard && 'table-xs'}`}>
      <thead>
      <tr>
        <th>No</th>
        <th>Id</th>
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
            <th>Data Kosong</th>
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
              <th>{i + 1}</th>
              <th>{record.id}</th>
              <th>{record.lokasi}</th>
              <td>{new Date(record.tanggal).toLocaleDateString('id-ID', {dateStyle: 'full'})}</td>
              <td>{new Date(record.jamMasuk).toLocaleTimeString('id-ID', {hour: '2-digit', minute: "2-digit"})}</td>
              {id && <td>
                <button className={'btn btn-xs btn-primary'}>Click</button>
              </td>
              }
            </tr>
          )}
      </tbody>
    </table>
  );
}

export default Record;
