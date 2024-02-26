import React, {useState} from 'react';
import Link from "next/link";
import {SelectJson} from "@/components/elements/Select";
import {ISensor, PatchAnggotaSensor} from "@/interface/type";
import {useDelete, usePatch} from "@/hook/useFetch";
import {IProfile} from "@/interface/user";


function AnggotaTable({id, data}: { id: string, data: IProfile }) {
  const [idSensor, setIdSensor] = useState<string>('')
  const [idSensorAnggota, setIdSensorAnggota] = useState<string>('')

  return (
    <div className={'overflow-x-auto bg-base-100 rounded shadow'}>
      <table className="table table-zebra static table-sm ">
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
        {data.Anggota.length === 0
          ? <tr className={'skeleton w-16 h-16 rounded-full shrink-0'}>
            <th>Data Kosong</th>
            <th>Data Kosong</th>
            <th>Data Kosong</th>
            <th>
              <Link className={'btn btn-accent shadow'}
                    href={`/record/create?callback=/profile${id}`}>
                Buat Record
              </Link>
            </th>
          </tr>
          : data.Anggota.map((anggota, i) => <tr key={anggota.id}>
            <th>{i + 1}</th>
            <td>{anggota.hewan}</td>
            <td>{anggota.warna}</td>
            {/*null sensor*/}
            <td>{
              anggota.id_sensor.length !== 0
                ? anggota.id_sensor.map(d => d.kode)
                : <SelectJson<ISensor>
                  size={'select-xs'}
                  onChange={(e) => {
                    setIdSensorAnggota(anggota.id)
                    setIdSensor(e.target.value as string)
                  }}
                  data={data.sensorNull}
                  keys={'id'}
                  values={'rfid'}
                  values2={"kode"}
                  showTitle={false}
                />
            }</td>
            {/*--------*/}
            <td>
              {anggota.id_sensor.length === 0
                ?
                <ButtonAnggotaSimpan
                  id={id}
                  id_anggota={idSensorAnggota}
                  id_sensor={idSensor}
                />
                :
                <ButtonAnggotaHapus
                  user_id={id}
                  id={anggota.id_sensor[0].id}
                />
              }
            </td>
          </tr>)}
        </tbody>
      </table>
    </div>
  );
}

export default AnggotaTable;
const ButtonAnggotaHapus = ({id, user_id}: { user_id: string, id: string }) => {
  const {mutate} = useDelete("profile", user_id, 'sensor')

  return (
    <button
      className={'btn btn-error btn-xs'}
      onClick={() => mutate({
        value: id
      })}>
      Hapus
    </button>)
}

const ButtonAnggotaSimpan = ({id, id_anggota, id_sensor}: { id: string, id_anggota: string, id_sensor: string }) => {
  const {mutate} = usePatch<PatchAnggotaSensor>("profile", id, 'sensor')

  return (<button
    className={'btn btn-primary btn-xs'}
    onClick={() => {
      mutate({
          id_anggota: id_anggota,
          id_sensor: id_sensor

        },
      )
    }}>Simpan</button>)
}
