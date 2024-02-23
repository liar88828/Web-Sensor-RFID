'use client'
import React, {Suspense, useState} from 'react'
import {RecordTable} from "@/components/tabels/tanstack/Record";
import Loading from "@/components/elements/Loading";
import {useGet} from "@/hook/useFetch";
import {IRecord, PageData, PageProps} from "@/interface/type";
import {useRQSGlobalState} from "@/hook/useGlobalState";


export default function Page({searchParams: {page}}: PageProps) {
  // const queryClient = useQueryClient()
  const [pages, setPages] = useState<number>(1)
  const [value] = useRQSGlobalState(['pageDatas'], 0)

  const {data, isLoading, isError, isPending, isFetching} = useGet<IRecord[]>(
    String(value),
    "record")

  if (isLoading || isPending || isFetching) return <Loading/>
  if (isError || !data) return <h1>Error</h1>

  const pageData: PageData = {
    value: data.length === 0,
    pageState: pages
  }

  // queryClient.setQueryData(['paging', 'record'], pageData)

  return <Suspense>
    <RecordTable data={data} setPages={setPages}/>
  </Suspense>
}
