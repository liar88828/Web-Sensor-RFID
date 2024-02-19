'use client'
import React from 'react';
import {Icon} from "@iconify/react/dist/iconify.js";
// import {cssValid} from "@/utils/nextAdd";
import {DetailSensor} from "@/interface/type";
import {cssValid} from "@/utils/nextAdd";

export default function SensorProfile({data}: { data: DetailSensor[] }) {
  console.log(data[0].status)
  return (
    <div className="bg-white p-3 shadow-lg rounded  ">

      <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
        <span className="text-green-500"><Icon icon="mdi:paper-outline"/></span>
        <span className="tracking-wide">Sensor</span>
      </div>
      <div className="overflow-x-auto bg-base-100 rounded shadow">
        <table className="table table-zebra static">
          {/* head */}
          <thead>
          <tr>
            <th>No</th>
            <th>Id</th>
            <th>RFID</th>
            <th>Kode</th>
            <th>Status</th>
            <th>Warna</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
          {data.map((sensor, i) => <tr key={sensor.id}>
              <th>{i + 1}</th>
              <th>{sensor.id}</th>
              <th>{sensor.rfid}</th>
              <td>{sensor.kode}</td>
              <td>
                <span className={cssValid(sensor.status, 'Active') + ' p-1 rounded text-white text-sm'}>

                {sensor.status}
                </span>
              </td>
              <td>{sensor.warna}</td>
              <td>
                <button className={'btn btn-xs btn-primary'}>Click</button>
              </td>
            </tr>
          )}
          </tbody>
        </table>
      </div>

    </div>
  );
}
