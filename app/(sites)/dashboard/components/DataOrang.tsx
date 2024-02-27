'use client'
import React from 'react';
import {TableOrang} from "@/components/tabels/basic/Dashboard";
import {Paginations, usePaginations} from "@/components/elements/Paginations";
import {IDataOrang} from "@/interface/type";
import {useRQSGlobalState} from "@/hook/useGlobalState";
import {useGet} from "@/hook/useFetch";
import Loading from "@/components/elements/Loading";
import Errors from "@/components/elements/Errors";
import {LinkButton} from "@/components/elements/button";


export default function DataOrang() {
  const [value] = useRQSGlobalState(["dashboard", 'pagination',], 0)
  const {data, isLoading, isError} = useGet<IDataOrang[]>('dashboard', value,'user')
  if (isLoading) return <Loading/>
  if (!data || isError) return <Errors/>
  return <ClientComponent data={data}/>
}


export function ClientComponent({data}: { data: IDataOrang[] }) {
  const {currentItems, handlePageClick, pageCount} = usePaginations(data, 10, 'anggota')
  return <div className="rounded bg-base-100 p-2 shadow-lg ">
    <div className=" flex items-center">
      <h1 className="font-bold p-2">Data Orang</h1>
      <LinkButton href={'/anggota'} size={'sm'}/>
    </div>
    <div className="overflow-x-auto h-60 mb-3">
      <TableOrang data={currentItems}/>
    </div>
    <Paginations pageCount={pageCount} handlePageClick={handlePageClick} size={'xs'}/>
  </div>

}
