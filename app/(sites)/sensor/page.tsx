'use client'
import {SensorTable} from "@/components/tabels/tanstack/Sensor";
import {useGet} from "@/hook/useFetch";
import {ISensor, PageProps} from "@/interface/type";
import Loading from "@/components/elements/Loading";
import React from "react";
import {useRQSGlobalState} from "@/hook/useGlobalState";

export default function Page({searchParams: {page}}: PageProps) {
  const [value] = useRQSGlobalState(['sensor', 'pagination', ], 0)
  const {data, isLoading, isError} = useGet<ISensor[]>(
    "sensor",
    String(value),
  )

  if (isLoading) return <Loading/>
  if (isError || !data) return <h1>Error</h1>

  return <SensorTable data={data}/>
}
