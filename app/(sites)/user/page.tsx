'use client'
import React from 'react'
import {useGet} from "@/hook/useFetch";
import Loading from "@/components/elements/Loading";
import {IUser, PageProps} from "@/interface/type";
import {UserTable} from "@/components/tabels/tanstack/User";
import {useRQSGlobalState} from "@/hook/useGlobalState";


export default function Page({searchParams: {page}}: PageProps) {
  const [value] = useRQSGlobalState(['user', "pagination"], 0)
  const {data, isLoading, isError} = useGet<IUser[]>(
    "user",
    String(value),
  )

  if (isLoading) return <Loading/>
  if (isError) return <h1>Error</h1>
  if (!data) return <h1>Data Error</h1>

  return <UserTable data={data}/>

}
