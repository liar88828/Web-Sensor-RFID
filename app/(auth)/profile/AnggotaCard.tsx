'use client'
import React, {ReactNode} from 'react';
import Divider from "@/components/elements/Divider";
import Loading from "@/components/elements/Loading";
import {useGlobalState} from "@/hook/useGlobalState";
import Link from "next/link";
import {IProfile} from "@/interface/user";

function AnggotaCard({id,data, children}: { id: string,data:IProfile, children: ReactNode }) {



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
      <Divider/>

      <div className={'bg-gray-100 pt-2 px-3 mt-3  rounded shadow-lg'}>
        Hewan {
        !data.Anggota || data.Anggota.length === 0
          ? <Link className={'btn btn-primary btn-sm'} href={'/anggota/create'}>Create Anggota</Link>
          : <Link className={' btn btn-success  btn-sm'} href={`/anggota/create/${id}`}>Tambah</Link>
      }
      </div>
      {children}
    </div>
  );
}

export default AnggotaCard;
