'use client'
import React from 'react'
import DataStatus from "@/app/(sites)/(admin)/dashboard/components/DataStatus";
import DataOrang from "@/app/(sites)/(admin)/dashboard/components/DataOrang";
import DataRecords from "@/app/(sites)/(admin)/dashboard/components/DataRecords";
import DataLines from "@/app/(sites)/(admin)/dashboard/components/DataLines";
import {useSession} from "next-auth/react";
import Loading from "@/components/elements/conditional/Loading";
import {Unauthorized} from "@/components/elements/conditional/unauthorized";


export default function Page() {
  const {data, status} = useSession()
  console.log(data)
  if (status === 'loading') return <Loading/>
  if (status === 'unauthenticated') return <Unauthorized href={'/'}/>
  return <Dashboard/>
};


function Dashboard() {
  return (
    <div className={' '}>
      <DataStatus/>
      <div className="flex gap-5 flex-wrap sm:flex-nowrap mt-2">
        <div className="w-[100%] sm:w-[65%] space-y-5">
          <DataLines/>
          <DataOrang/>
        </div>
        <div className="w-[100%] sm:w-[35%] ">
          <DataRecords/>
        </div>
      </div>
    </div>
  )
}
