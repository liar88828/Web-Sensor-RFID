'use client'
import React from 'react';
import {Icon} from "@iconify/react/dist/iconify.js";
// import {cssValid} from "@/utils/nextAdd";
import {DetailAnggota, DetailProfile, ISensorGlobal} from "@/interface/type";
import {useGlobalState} from "@/hook/useGlobalState";
import Link from "next/link";
import {useSearchParams} from "next/navigation";
import Loading from "@/components/elements/Loading";

export default function SensorProfile() {
  const id = useSearchParams().get('id') as string
  const {query: data} = useGlobalState<DetailProfile>(['user', id])
  const {set} = useGlobalState<ISensorGlobal>(["SENSOR"])

  if (!data) return <Loading/>

  const newData: DetailAnggota = data.anggota

  return (
    <div className="bg-white p-3 shadow-lg rounded  sm:w-[70vw]">

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
              newData.id_sensor.map((sensor, i) => <tr key={sensor.id}>
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

    </div>
  );
}
