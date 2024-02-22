import React, {useState} from 'react';
import Link from "next/link";
import {SelectJson} from "@/components/elements/Select";
import {AnggotaRelational, ISensor, PatchAnggotaSensor} from "@/interface/type";
import {useDelete, useGetID, usePatch} from "@/hook/useFetch";
import Loading from "@/components/elements/Loading";
import Errors from "@/components/elements/Errors";



function Anggota({id_user}: { id_user: string }) {
  const {data, isLoading, isError} = useGetID<{
    anggota: AnggotaRelational[],
    sensor: ISensor[]
  }>('anggota', id_user, 'user')
  const [idSensor, setIdSensor] = useState<string>('')
  const [idSensorAnggota, setIdSensorAnggota] = useState<string>('')

  const {mutate: mutateSetIdSensor} = usePatch<PatchAnggotaSensor>('anggota', id_user, 'sensor')
  const {mutate: mutateDeleteIdSensor} = useDelete('anggota', id_user, 'sensor')

  console.log(data)

  if (isLoading) return <Loading/>
  if (!data || isError) return <Errors/>

  return (
    <table className="table table-zebra static">
      <thead>
      <tr>
        <th>No</th>
        <th>Hewan</th>
        <th>Warna</th>
        <th>RFID</th>
        <th>Action</th>
      </tr>
      </thead>
      <tbody>
      {data.anggota.length === 0
        ? <tr className={'skeleton w-16 h-16 rounded-full shrink-0'}>
          <th>Data Kosong</th>
          <th>Data Kosong</th>
          <th>Data Kosong</th>
          <th>
            <Link className={'btn btn-accent shadow'}
                  href={`/record/create?callback=/profile${id_user}`}>
              Buat Record
            </Link>
          </th>
        </tr>
        : data.anggota.map((anggota, i) => <tr key={anggota.id}>
          <th>{i + 1}</th>
          <th>{anggota.hewan}</th>
          <th>{anggota.warna}</th>
          {/*null sensor*/}
          <th>{
            anggota.id_sensor.length !== 0
              ? anggota.id_sensor.map(d => d.kode)
              : <SelectJson<ISensor>
                onChange={(e) => {
                  setIdSensorAnggota(anggota.id)
                  setIdSensor(e.target.value as string)
                }}
                data={data.sensor}
                keys={'id'}
                values={'rfid'}
                values2={"kode"}
                showTitle={false}
              />
          }</th>
          {/*--------*/}
          <th>
            {anggota.id_sensor.length === 0
              ?
              <button
                className={'btn btn-primary btn-xs'}
                onClick={() => {
                  mutateSetIdSensor({
                    id_anggota: idSensorAnggota,
                    id_sensor: idSensor
                  })
                }}>Simpan
              </button>
              :
              <button
                className={'btn btn-error btn-xs'}
                onClick={() => mutateDeleteIdSensor({
                  value: anggota.id_sensor[0].id
                })}>
                Hapus
              </button>
            }


          </th>
        </tr>)}

      </tbody>
    </table>
  );
}

export default Anggota;
