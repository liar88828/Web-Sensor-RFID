'use client'
import React, {useState} from 'react'
import {useGet} from "@/hook/useFetch";
import Loading from "@/components/elements/Loading";
import {IUser, PageProps} from "@/interface/type";
import {UserTable} from "@/components/tabels/tanstack/User";
import {useRQSGlobalState} from "@/hook/useGlobalState";


export default function Page({searchParams: {page}}: PageProps) {
  const [value] = useRQSGlobalState(['pageDatas'], 0)
  const {data, isLoading, isError} = useGet<IUser[]>(
    String(value),
    "user")

  if (isLoading) return <Loading/>

  if (isError || !data) return <h1>Error</h1>

  return <UserTable data={data}/>

}
