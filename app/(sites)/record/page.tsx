'use client'
import React from 'react'
import {RecordTable} from "@/components/tabels/tanstack/Record";
import Loading from "@/components/elements/Loading";
import {useSearchParams} from "next/navigation";
import {useGet} from "@/hook/useFetch";
import {IRecord} from "@/interface/type";

export default function Page() {
  const params = useSearchParams() as any

  const {data, isLoading, isError} = useGet<IRecord[]>(
    params.get('limit'),
    params.get('page'),
    "record")

  if (isLoading) return <Loading/>

  if (isError) return <h1>Error</h1>
  console.log(data)
  return <RecordTable data={data as IRecord[]}/>
}
