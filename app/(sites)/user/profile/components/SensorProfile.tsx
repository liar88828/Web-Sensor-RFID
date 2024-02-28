'use client'
import React, {ReactNode, useEffect} from 'react';
import {Icon} from "@iconify/react/dist/iconify.js";
import {ISensorGlobal} from "@/interface/type";
import {useGlobalState} from "@/hook/useGlobalState";
import Link from "next/link";
import {useQueryClient} from "@tanstack/react-query";
import {DataProfile, IdRecord, IdSensor} from "@/interface/profile/example1";

interface ISensorProfile {
  id: string;
  children: ReactNode;
}

export function SensorProfile({id, children}: ISensorProfile) {

  return (
    <div className="bg-white p-3 shadow-lg rounded border-t-4 border-red-400 ">

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


export function TableSensorProfile({data: {user}}: { data: DataProfile }) {
  const queryClient = useQueryClient()
  const newData: IdSensor[] = user.Anggota.flatMap(e => e.id_sensor.map(d => {
    return {
      kode: d.kode,
      rfid: d.rfid,
      id: d.id,
      warna: d.warna,
      status: d.status,
      id_anggota: d.id_anggota,
      id_record: d.id_record
    }
  }))
  const setRecord: IdRecord[] = newData.flatMap(d => d.id_record)
  // queryClient.setQueryData(['SENSOR'], {value: setRecord, rfid: "ALL"})

  useEffect(() => {
    queryClient.setQueryData<ISensorGlobal>(['SENSOR'], {value: setRecord, rfid: "ALL"})
  }, [])

  return (
    <div className="overflow-x-auto bg-base-100 rounded shadow ">
      <table className="table table-zebra static">
        {/* head */}
        <thead>
        <tr>
          <th>No</th>
          {/*<th>Id</th>*/}
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
              {/*<th>Data Kosong</th>*/}
              <th>Data Kosong</th>
              <th>Data Kosong</th>
              <th>Data Kosong</th>
              <th>Data Kosong</th>
              <th>
                <LinkCallback
                  callback={'/sensor/create'}
                  href={'/profile'}
                  text={'Buat Sensor'}/>


              </th>
            </tr>
            :
            newData.map((sensor, i) => <tr key={sensor.id}>
                <th>{i + 1}</th>
                {/*<th>{sensor.id}</th>*/}
                <th>{sensor.rfid}</th>
                <td>{sensor.kode}</td>
                <td>
                <span
                  className={`${sensor.status === 'Active'
                    ? ' bg-success '
                    : ' bg-error'}  p-1 rounded text-white text-sm`}>
                {sensor.status}
                </span>
                </td>
                <td>{sensor.warna}</td>
                <td>
                  <ShowRecord
                    record={sensor.id_record}
                    rfid={sensor.rfid}/>
                </td>
              </tr>
            )}
        </tbody>
      </table>
    </div>
  );
}


function ShowRecord(
  {record, rfid}:
    { record: IdRecord[], rfid: string }
) {
  const {set} = useGlobalState<ISensorGlobal>(["SENSOR"])

  return (
    <button
      onClick={() => set.mutate({
        value: record,
        rfid: rfid
      })}
      className={'btn btn-xs btn-primary'}>Show Record
    </button>
  );
}


function LinkCallback(
  {href, callback, text}:
    { href: string, callback: string, text: string }
) {
  return (
    <Link className={'btn btn-accent shadow'}
          href={`${href}?callback=${callback}`}>
      {text}
    </Link>
  );
}
