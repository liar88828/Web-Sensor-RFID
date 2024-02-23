'use client'
import React, {useState} from 'react'
import {useGet} from "@/hook/useFetch";
import Loading from "@/components/elements/Loading";
import {IUser, PageProps} from "@/interface/type";
import {UserTable} from "@/components/tabels/tanstack/User";


export default function Page({searchParams: {page}}: PageProps) {
  const [pages, setPages] = useState<number>(1)
  const {data, isLoading, isError} = useGet<IUser[]>(
    String(pages),
    "user")

  if (isLoading) return <Loading/>

  if (isError || !data) return <h1>Error</h1>

  return <UserTable data={data} setPages={setPages}/>

}
