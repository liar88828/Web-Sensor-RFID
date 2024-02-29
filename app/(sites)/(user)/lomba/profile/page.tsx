'use client'
import React from 'react';
import Loading from "@/components/elements/conditional/Loading";
import Errors from "@/components/elements/conditional/Errors";
import {useSession} from "next-auth/react";
import {useQuery} from "@tanstack/react-query";
import {apiGetIDWithPages} from "@/utils/next/toApi";


export default function Page() {

  const {data: session} = useSession()

  const user = session?.user
  // console.log(!!id)
  const {data, isLoading, isError} = useQuery(
    {
      // @ts-ignore
      queryKey: ['lomba', user?.id], queryFn: () => apiGetIDWithPages('lomba', user?.id, 'user'), enabled: !!user?.id
    })
  if (isLoading) return <Loading/>
  if (isError) return <Errors/>

  console.log(data)

  return (<div>Hello User {session?.user?.name}</div>);
}
