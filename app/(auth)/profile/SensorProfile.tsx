'use client'
import React, {ReactNode} from 'react';
import {Icon} from "@iconify/react/dist/iconify.js";
import {ISensorGlobal} from "@/interface/type";
import {useGlobalState} from "@/hook/useGlobalState";
import Link from "next/link";
import {IProfile} from "@/interface/user";

export default function SensorProfile({id, children}: { id: string, children: ReactNode }) {

  return (
    <div className="bg-white p-3 shadow-lg rounded  ">

      <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
        <span className="text-green-500"><Icon icon="mdi:paper-outline"/></span>
        <span className="tracking-wide">Sensor</span>
        <Link
          className={' btn btn-success  btn-sm '}
          href={`/sensor/create/${id}`}>Tambah</Link>
      </div>
      {children}
    </div>
  );
}


export function TableSensorProfile({data}: { data: IProfile }) {
  const {set} = useGlobalState<ISensorGlobal>(["SENSOR"])
  const newData: IProfile['sensor'] = data.sensor

  return (
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
        {
          !newData ?
            <tr className={'skeleton w-16 h-16 rounded-full shrink-0'}>
              <th>Data Kosong</th>
              <th>Data Kosong</th>
              <th>Data Kosong</th>
              <th>Data Kosong</th>
              <th>Data Kosong</th>
              <th>Data Kosong</th>
              <th>
                <Link className={'btn btn-accent shadow'}
                      href={'/sensor/create?callback=/profile'}>
                  Buat Sensor
                </Link>
              </th>
            </tr>
            :
            newData.map((sensor, i) => <tr key={sensor.id}>
                <th>{i + 1}</th>
                <th>{sensor.id}</th>
                <th>{sensor.rfid}</th>
                <td>{sensor.kode}</td>
                <td>
                <span
                  className={`${sensor.status === 'Active' ? ' bg-success ' : ' bg-error'}  p-1 rounded text-white text-sm`}>
                {sensor.status}
                </span>
                </td>
                <td>{sensor.warna}</td>
                <td>
                  <button
                    onClick={() => set.mutate({value: sensor.id_record, rfid: sensor.rfid})}
                    className={'btn btn-xs btn-primary'}>Show Record
                  </button>
                </td>
              </tr>
            )}
        </tbody>
      </table>
    </div>
  );
}
