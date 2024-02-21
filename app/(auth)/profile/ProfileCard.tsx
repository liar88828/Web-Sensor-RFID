'use client'
import React from 'react';
import Divider from "@/components/elements/Divider";
import {Card} from "@/components/skeleton/Card";
import {useSearchParams} from "next/navigation";
import Loading from "@/components/elements/Loading";
import {useGlobalState} from "@/hook/useGlobalState";
import Link from "next/link";
import {Root} from "@/interface/user";

function ProfileCard({id}: { id: string }) {

  const {query} = useGlobalState<Root>(['user', id])
  if (!query?.Anggota) return <Loading/>

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
      <ul
        className="bg-gray-100 pt-2 px-3 mt-3  rounded shadow-lg">
        Hewan {!query.Anggota || query.Anggota.length === 0 && <Link
        className={'btn btn-primary'}
        href={'/anggota/create'}>
        Create Anggota
      </Link>}
        <Divider/>

        {!query.Anggota
          ? <Card/>
          : <li className="flex items-center pb-3 gap-2">
            {query?.Anggota.map(anggota => <>
                <span>Hewan
                  <div className="badge badge-primary">{anggota.hewan}</div>
                </span>
                <span>Warna
                  <div className="badge badge-secondary">{anggota.warna}</div>
                </span>
                <span className="ml-2">
            {/*<span className={`${cssValid(s.status, 'Active')} py-1 px-2 rounded text-white text-sm`}>*/}
                  {/*  {s.status}*/}
                  {/*</span>*/}
          </span>
              </>
            )}
          </li>
        }
        {/*<li className="flex items-center py-3">*/}
        {/*  <span>Member since</span>*/}
        {/*  <span className="ml-auto"></span>*/}
        {/*</li>*/}
      </ul>
    </div>
  );
}

export default ProfileCard;
