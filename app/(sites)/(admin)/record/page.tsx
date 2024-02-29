'use client'
import React, {Suspense} from 'react'
import {RecordTable} from "@/components/tabels/tanstack/Record";
import Loading from "@/components/elements/conditional/Loading";
import {useGet} from "@/hook/useFetch";
import {IRecord, PageProps} from "@/interface/type";
import {useRQSGlobalState} from "@/hook/useGlobalState";


export default function Page({searchParams: {page}}: PageProps) {
  const [value] = useRQSGlobalState(["record", 'pagination', ], 0)
  const {data, isLoading, isError, isPending, isFetching} = useGet<IRecord[]>(
    "record",
    String(value),
  )

  if (isLoading || isPending || isFetching) return <Loading/>
  if (isError || !data) return <h1>Error</h1>

  return <Suspense>
    <RecordTable data={data}/>
  </Suspense>
}
