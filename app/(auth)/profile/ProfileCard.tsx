'use client'
import React from 'react';
import Divider from "@/components/elements/Divider";
import {cssValid} from "@/utils/css";
import {Card} from "@/components/skeleton/Card";
import {useSearchParams} from "next/navigation";
import Loading from "@/components/elements/Loading";
import {useGlobalState} from "@/hook/useGlobalState";
import {DetailProfile, ISensorGlobal} from "@/interface/type";

function ProfileCard() {
  const id = useSearchParams().get('id') as string
  const {query: data} = useGlobalState<DetailProfile>(['user', id])

  if (!data) return <Loading/>

  return (
    <div className="bg-white p-3 border-t-4 border-green-400 shadow-lg static">
      <div className="image overflow-hidden">
        {/*<div className="avatar">*/}

        <img className="h-auto w-full mx-auto rounded"
             src="https://picsum.photos/id/4/200/200"
             alt="asdasda"/>

        {/*</div>*/}

      </div>
      <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">Nama {data.name}</h1>
      <h2 className="text-gray-600 font-lg text-semibold leading-6">Alamat {data.alamat}</h2>
      <h2 className="text-sm text-gray-500 hover:text-gray-600 leading-6">Email {data.email}</h2>
      <h2 className="text-sm text-gray-500 hover:text-gray-600 leading-6">No Hp {data.no_hp}</h2>
      <ul
        className="bg-gray-100 pt-2 px-3 mt-3  rounded shadow-lg">
        Status RFID
        <Divider/>

        {!data.anggota
          ? <Card/>
          : data.anggota.id_sensor.map(s =>
              <li className="flex items-center pb-3"
                  key={s.id}>
                <span>{s.kode}</span>
                <span className="ml-2">
            <span className={`${cssValid(s.status, 'Active')} py-1 px-2 rounded text-white text-sm`}>
              {s.status}
            </span>
          </span>
              </li>
          )}
        {/*<li className="flex items-center py-3">*/}
        {/*  <span>Member since</span>*/}
        {/*  <span className="ml-auto"></span>*/}
        {/*</li>*/}
      </ul>
    </div>
  );
}

export default ProfileCard;
