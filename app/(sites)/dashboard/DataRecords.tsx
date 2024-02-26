'use client'
import React from 'react';
import Record from "@/components/tabels/basic/record";
import {Paginations, usePaginations} from "@/components/elements/Paginations";
import {useGet} from "@/hook/useFetch";
import Loading from "@/components/elements/Loading";
import Errors from "@/components/elements/Errors";
import {IRecord} from "@/interface/type";
import {useRQSGlobalState} from "@/hook/useGlobalState";
import {LinkButton} from "@/components/elements/button";

export default function DataRecords() {
  const [value] = useRQSGlobalState(["dashboard", 'pagination',], 0)
  const {data, isLoading, isError} = useGet<IRecord[]>('record', value)
  if (isLoading) return <Loading/>
  if (!data || isError) return <Errors/>
  // console.log(data)
  return (<ClientComponent data={data}/>);
}

export function ClientComponent({data}: { data: IRecord[] }) {
  const {currentItems, handlePageClick, pageCount} = usePaginations<IRecord>(data, 10, 'record')

  return <div className="rounded bg-base-100 p-2 shadow-lg ">
    <div className=" flex items-center">
      <h1 className="font-bold p-2">Data Record</h1>
      <LinkButton href={'/record'} size={'sm'}/>
    </div>
    <Record data={currentItems} dashboard={true}/>
    <Paginations pageCount={pageCount} handlePageClick={handlePageClick} size={'xs'}/>
  </div>

}
