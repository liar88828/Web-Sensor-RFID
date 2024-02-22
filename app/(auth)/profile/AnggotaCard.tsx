'use client'
import React, {useState} from 'react';
import Divider from "@/components/elements/Divider";
import Loading from "@/components/elements/Loading";
import {useGlobalState} from "@/hook/useGlobalState";
import {Root} from "@/interface/user";
import Link from "next/link";
import {ISensor} from "@/interface/type";
import {usePatch} from "@/hook/useFetch";
import {SelectJson} from "@/components/elements/Select";

function AnggotaCard({id}: { id: string }) {

  const [idSensor, setIdSensor] = useState<string>('')
  const [idSensorAnggota, setIdSensorAnggota] = useState<string>('')
  const {query,} = useGlobalState<Root>(['user', id])
  const {mutate:mutateSetIdSensor} = usePatch<ISensor>('sensor', idSensor)
  const {mutate:mutateDeleteIdSensor} = usePatch<ISensor>('sensor', idSensor)
  console.log({
    anggota: idSensorAnggota,
    sensor: idSensor
  })
  if (!query?.Anggota) return <Loading/>

  // console.log(query)
  return (
    <div className="bg-white p-3 border-t-4 border-green-400 shadow-lg static">
      <div className="image overflow-hidden">
        {/*<div className="avatar">*/}

        <img className="h-auto w-full mx-auto rounded"
             src="https://picsum.photos/id/4/200/200"
             alt="asdasda"/>

        {/*</div>*/}

      </div>
      <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">Nama {query.name}</h1>
      <h2 className="text-gray-600 font-lg text-semibold leading-6">Alamat {query.alamat}</h2>
      <h2 className="text-sm text-gray-500 hover:text-gray-600 leading-6">Email {query.email}</h2>
      <h2 className="text-sm text-gray-500 hover:text-gray-600 leading-6">No Hp {query.no_hp}</h2>
      <div className={'bg-gray-100 pt-2 px-3 mt-3  rounded shadow-lg'}>
        Hewan {!query.Anggota || query.Anggota.length === 0 ? <Link
          className={'btn btn-primary'}
          href={'/anggota/create'}>
          Create Anggota
        </Link> :

        <Link
          className={' btn btn-success '}
          href={`/anggota/create/${id}`}>Tambah</Link>
      }
        <Divider/>

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
          {!query.Anggota
            ?
            <tr className={'skeleton w-16 h-16 rounded-full shrink-0'}>
              <th>Data Kosong</th>
              <th>Data Kosong</th>
              <th>Data Kosong</th>
              <th>
                <Link className={'btn btn-accent shadow'}
                      href={'/record/create?callback=/profile' + id}>
                  Buat Record
                </Link>
              </th>
            </tr> : query?.Anggota.map((anggota, i) => <tr
              key={anggota.id}
              className={' '}
            >
              <th>{i + 1}</th>
              <th>{anggota.hewan}</th>
              <th>{anggota.warna}</th>
              <th>{
                anggota.id_sensor.length !== 0
                  ? anggota.id_sensor.map(d => d.rfid)
                  : <SelectJson<ISensor>
                    onChange={(e) => {
                      setIdSensorAnggota(anggota.id)
                      setIdSensor(e.target.value as string)
                    }}
                    data={query.sensorNull}
                    keys={'id'}
                    values={'rfid'}
                    values2={"warna"}
                    showTitle={false}
                  />
              }</th>
              <th>
                {anggota.id_sensor.length === 0
                  ?
                  <button
                    className={'btn btn-primary btn-xs'}
                    onClick={() => {
                      mutateSetIdSensor({
                        id_anggota: idSensorAnggota,
                      })
                    }}>Simpan
                  </button>
                  :
                  <button
                    className={'btn btn-error btn-xs'}
                    onClick={() => {
                      const toDelete = {
                        id_sensor: anggota.id_sensor.map(d => d.id),
                        id_anggota: anggota.id
                      }
                      mutateDeleteIdSensor({
                        id_anggota: idSensorAnggota,
                      })
                    }}>Hapus
                  </button>
                }


              </th>
            </tr>)}

          </tbody>
        </table>

      </div>
    </div>
  );
}

export default AnggotaCard;


// <ul className=" flex flex-col gap-2">
//
//   {!query.Anggota
//     ? <Card/>
//     : query?.Anggota.map(anggota => <li
//         className={'flex flex-nowrap items-center'}
//         key={anggota.id}>
//         <div className={'flex'}>
//           <span>Nama : </span>
//           <span className="badge badge-primary">{anggota.hewan}</span>
//         </div>
//         <div>
//           <span>Warna : </span>
//           <span className="badge badge-secondary">{anggota.warna}</span>
//         </div>
//         {anggota.id_sensor.length !== 0
//           ? <div>
//             <span>RFID : </span>
//             <span className="badge badge-accent">{anggota.id_sensor.map(d => d.rfid)}</span>
//           </div>
//
//           : <div className={'flex items-center gap-2'}>
//             <Link href={'/'} className={'badge badge-error'}>Kosong</Link>
//
//             <SelectJson<ISensor>
//               onChange={(e) => {
//                 setIdSensorAnggota(anggota.id)
//                 setIdSensor(e.target.value as string)
//               }}
//               data={query.sensorNull}
//               keys={'id'}
//               values={'rfid'}
//               values2={"warna"}
//               showTitle={false}
//             />
//             <button onClick={() => {
//
//               mutate({
//                 id_anggota: idSensorAnggota,
//               })
//             }}>Simpan
//             </button>
//           </div>
//         }
//       </li>
//     )
//   }
//
//
//   {/*<li className="flex items-center py-3">*/}
//   {/*  <span>Member since</span>*/}
//   {/*  <span className="ml-auto"></span>*/}
//   {/*</li>*/}
//
//
// </ul>