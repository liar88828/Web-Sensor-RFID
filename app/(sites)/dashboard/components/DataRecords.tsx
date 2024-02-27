'use client'
import React from 'react';
import Record from "@/components/tabels/basic/record";
import {Paginations, usePaginations} from "@/components/elements/Paginations";
import {useGet} from "@/hook/useFetch";
import Loading from "@/components/elements/Loading";
import Errors from "@/components/elements/Errors";
import {useRQSGlobalState} from "@/hook/useGlobalState";
import {LinkButton} from "@/components/elements/button";

export type DataRecord = {
  id: string,
  tanggal: string,
  jamMasuk: string,
  lokasi: string,
  id_sensor: null,
  Sensor: null | SensorRecord
}

type SensorRecord = { kode: string, warna: string, rfid: string }


export default function DataRecords() {
  const [value] = useRQSGlobalState(["dashboard", 'pagination',], 0)
  const {data, isLoading, isError} = useGet<DataRecord[]>('dashboard', value, "record")
  if (isLoading) return <Loading/>
  if (!data || isError) return <Errors/>
  // console.log(data)
  return (
    <ClientComponent data={data}/>
  );
}

// <></>

export function ClientComponent({data}: { data: DataRecord[] }) {
  const {currentItems, handlePageClick, pageCount} = usePaginations<DataRecord>(data, 10, 'record')

  return <div className="rounded bg-base-100 p-2 shadow-lg ">
    <div className=" flex items-center">
      <h1 className="font-bold p-2">Data Record</h1>
      <LinkButton href={'/record'} size={'sm'}/>
    </div>
    <Record data={data} dashboard={true}/>
    <Paginations pageCount={pageCount} handlePageClick={handlePageClick} size={'xs'}/>
  </div>

}


const dataRecord =
  [
    {
      "id": "329bb3d6-f835-4fae-9aab-eb7f5e332b08",
      "tanggal": "2024-02-19T00:00:00.000Z",
      "jamMasuk": "1970-01-01T21:56:00.000Z",
      "lokasi": "semarang jaya",
      "id_sensor": null,
      "Sensor": null
    }, {
    "id": "803ac6b5-a333-40a9-b0b0-b76bbbdb51f2",
    "tanggal": "2024-02-01T00:00:00.000Z",
    "jamMasuk": "1970-01-01T15:55:00.000Z",
    "lokasi": "Sumatra",
    "id_sensor": "22126e92-2637-470d-a23b-a84d1133abad",
    "Sensor": {"kode": "123123123", "warna": "biru", "rfid": "cincin"}
  }, {
    "id": "ac409f63-ccb0-4af2-b694-9400ddd3dac1",
    "tanggal": "2024-02-07T00:00:00.000Z",
    "jamMasuk": "1970-01-01T15:57:00.000Z",
    "lokasi": "Jogja",
    "id_sensor": "22126e92-2637-470d-a23b-a84d1133abad",
    "Sensor": {"kode": "123123123", "warna": "biru", "rfid": "cincin"}
  }, {
    "id": "d2e350b4-b0c0-44f3-9af8-128a3be99039",
    "tanggal": "2023-12-21T00:00:00.000Z",
    "jamMasuk": "1970-01-01T15:53:00.000Z",
    "lokasi": "Semarang",
    "id_sensor": "22126e92-2637-470d-a23b-a84d1133abad",
    "Sensor": {"kode": "123123123", "warna": "biru", "rfid": "cincin"}
  }
  ]
