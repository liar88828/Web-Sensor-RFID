'use client'

import React from 'react'
import {SensorTable} from "@/components/tabels/tanstack/Sensor";
import {useGet} from "@/hook/useFetch";
import Loading from "@/components/elements/Loading";
import {useSearchParams} from "next/navigation";
import {ISensor} from "@/interface/type";

export default function Page() {
  const params = useSearchParams() as any

  const {data, isLoading, isError} = useGet<ISensor[]>(
    params.get('limit'),
    params.get('page'),
    "sensor")

  if (isLoading) return <Loading/>

  if (isError) return <h1>Error</h1>

  return <SensorTable data={data as ISensor[]}/>
}
