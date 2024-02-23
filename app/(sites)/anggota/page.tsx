'use client'
import {AnggotaTable} from "@/components/tabels/tanstack/Anggota";
import {useGet} from "@/hook/useFetch";
import Loading from "@/components/elements/Loading";
import React from "react";
import {IAnggota, PageProps} from "@/interface/type";
import {useRQSGlobalState} from "@/hook/useGlobalState";

export default function Page({searchParams: {page}}: PageProps) {
  const [value] = useRQSGlobalState(['pageDatas'], 0)
  const {data, isLoading, isError} = useGet<IAnggota[]>(
    String(value),
    "anggota")

  if (isLoading) return <Loading/>
  if (isError || !data) return <h1>Error</h1>

  return <AnggotaTable data={data}/>

}
