'use client'
import React, {ReactNode} from 'react';
import Divider from "@/components/elements/Divider";
import Link from "next/link";
import {DataProfile} from "@/interface/profile/example1";
import {useQuery} from "@tanstack/react-query";
import Loading from "@/components/elements/Loading";

interface IAnggotaProfile {
  id: string;
  data: DataProfile;
  children: ReactNode;
}

export function AnggotaProfile({id, data: {user}, children}: IAnggotaProfile) {

  // const {isFetching} = useQuery({queryKey: ["profile", id]})
  // if (isFetching) return <Loading/>
  return (
    <div className="bg-white p-3 border-t-4 border-green-400 shadow-lg static">
      <div className="image overflow-hidden">
        {/*<div className="avatar">*/}
        <img className="h-auto w-full mx-auto rounded"
             src="https://picsum.photos/id/4/200/200"
             alt="asdasda"/>

        {/*</div>*/}
      </div>
      <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">Nama {user.name}</h1>
      <h2 className="text-gray-600 font-lg text-semibold leading-6">Alamat {user.alamat}</h2>
      <h2 className="text-sm text-gray-500 hover:text-gray-600 leading-6">Email {user.email}</h2>
      <h2 className="text-sm text-gray-500 hover:text-gray-600 leading-6">No Hp {user.no_hp}</h2>
      <Divider/>

      <div className={'bg-gray-100 pt-2 px-3 mt-3  rounded shadow-lg'}>
        Hewan {
        !user.Anggota || user.Anggota.length === 0
          ? <Link className={'btn btn-primary btn-sm'} href={'/anggota/create'}>Create Anggota</Link>
          : <Link className={' btn btn-success  btn-sm'} href={`/anggota/create/${id}`}>Tambah</Link>
      }
      </div>
      {children}
    </div>
  );
}
