'use client'
import React from 'react';
import {Icon} from "@iconify/react/dist/iconify.js";
import {DetailSensor} from "@/interface/type";

export default function RecordProfile({data}: { data: DetailSensor[] }) {
  console.log(data)
  return (
    <div className="bg-white p-3 shadow-lg rounded">
      <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
        <span className="text-green-500"><Icon icon="mdi:paper-outline"/></span>
        <span className="tracking-wide">Record</span>
      </div>
      <div className="overflow-x-auto bg-base-100 rounded shadow">
        {data.map((sensor, i) =>
          <table className="table table-zebra static" key={sensor.id}>
            <thead>
            <tr>
              <th>{sensor.kode}</th>
              <th>Id</th>
              <th>Lokasi</th>
              <th>Tanggal</th>
              <th>Jam Masuk</th>
              <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {sensor.id_record.map((record, i) => <tr key={record.id}>
                <th>{i + 1}</th>
                <th>{record.id}</th>
                <th>{record.lokasi}</th>
                <td>{new Date(record.tanggal).toLocaleDateString('id-ID', {dateStyle: 'full'})}</td>
                <td>{new Date(record.jamMasuk).toLocaleTimeString('id-ID', {hour: '2-digit', minute: "2-digit"})}</td>
                <td>
                  <button className={'btn btn-xs btn-primary'}>Click</button>
                </td>
              </tr>
            )}
            </tbody>
          </table>)
        }
      </div>

    </div>
  );
}
