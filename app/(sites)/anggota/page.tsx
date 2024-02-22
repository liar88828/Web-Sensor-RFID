'use client'
import {AnggotaTable} from "@/components/tabels/tanstack/Anggota";
import {useGet} from "@/hook/useFetch";
import Loading from "@/components/elements/Loading";
import React from "react";
import {IAnggota} from "@/interface/type";

export default function Page({searchParams: {limit, page}}: { searchParams: { limit: string, page: string } }) {

  const {data, isLoading, isError} = useGet<IAnggota[]>(
    limit,
    page,
    "anggota")


  if (isLoading) return <Loading/>

  if (isError || !data) return <h1>Error</h1>

  return <AnggotaTable data={data}/>


}
