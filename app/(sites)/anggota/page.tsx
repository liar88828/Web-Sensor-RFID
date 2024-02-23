'use client'
import {AnggotaTable} from "@/components/tabels/tanstack/Anggota";
import {useGet} from "@/hook/useFetch";
import Loading from "@/components/elements/Loading";
import React, {useState} from "react";
import {IAnggota, PageProps} from "@/interface/type";

export default function Page({searchParams: {page}}: PageProps) {
  const [pages, setPages] = useState<number>(1)
  const {data, isLoading, isError} = useGet<IAnggota[]>(
    String(pages),
    "anggota")

  if (isLoading) return <Loading/>

  if (isError || !data) return <h1>Error</h1>

  return <AnggotaTable data={data} setPages={setPages}/>

}
