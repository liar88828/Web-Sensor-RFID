'use client'
import {AnggotaTable} from "@/components/tabels/tanstack/Anggota";
import {useGet} from "@/hook/useFetch";
import {Anggota} from "@/interface/type";
import Loading from "@/components/elements/Loading";
import React from "react";

export default function Page({searchParams: {limit, page}}: { searchParams: { limit: string, page: string } }) {

  const {data, isLoading, isError} = useGet<Anggota[]>(
    limit,
    page,
    "anggota")


  if (isLoading) return <Loading/>

  if (isError || !data) return <h1>Error</h1>

  return <AnggotaTable data={data}/>


}
