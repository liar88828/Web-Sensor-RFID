'use client'
import {SensorTable} from "@/components/tabels/tanstack/Sensor";
import {useGet} from "@/hook/useFetch";
import {ISensor, PageProps} from "@/interface/type";
import Loading from "@/components/elements/Loading";
import React, {useState} from "react";

export default function Page({searchParams: {page}}: PageProps) {
  const [pages, setPages] = useState<number>(1)

  const {data, isLoading, isError} = useGet<ISensor[]>(
    String(pages),
    "sensor")
  if (isLoading) return <Loading/>

  if (isError || !data) return <h1>Error</h1>

  return <SensorTable data={data} setPages={setPages}/>
}
