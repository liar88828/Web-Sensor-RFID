'use client'
import React from 'react'
import {useGet} from "@/hook/useFetch";
import Loading from "@/components/elements/Loading";
import {IUser} from "@/interface/type";
import {UserTable} from "@/components/tabels/tanstack/User";

export default function Page({searchParams: {page, limit}}: { searchParams: { page: string, limit: string } }) {

  const {data, isLoading, isError} = useGet<IUser[]>(
    limit,
    page,
    "user")


  if (isLoading) return <Loading/>

  if (isError || !data) return <h1>Error</h1>

  return <UserTable data={data}/>

}
