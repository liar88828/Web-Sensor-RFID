'use client'
import React, {Suspense} from 'react'
import {RecordTable} from "@/components/tabels/tanstack/Record";
import Loading from "@/components/elements/Loading";
import {useGet} from "@/hook/useFetch";
import {IRecord} from "@/interface/type";

export default function Page({searchParams: {page, limit}}: { searchParams: { page: string, limit: string } }) {

  const {data, isLoading, isError} = useGet<IRecord[]>(
    limit,
    page,
    "record")

  if (isLoading) return <Loading/>

  if (isError || !data) return <h1>Error</h1>

  return <Suspense>
    <RecordTable data={data}/>
  </Suspense>
}
