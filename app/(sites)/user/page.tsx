'use client'
import React from 'react'
import {useSearchParams} from "next/navigation";
import {useGet} from "@/hook/useFetch";
import Loading from "@/components/elements/Loading";
import {IUser} from "@/interface/type";
import {UserTable} from "@/components/tabels/tanstack/User";

export default function Page() {

  const params = useSearchParams() as any

  const {data, isLoading, isError} = useGet<IUser[]>(
    params.get('limit'),
    params.get('page'),
    "user")

  if (isLoading) return <Loading/>

  if (isError) return <h1>Error</h1>
  console.log(data)
  return <UserTable data={data as IUser[]}/>
}