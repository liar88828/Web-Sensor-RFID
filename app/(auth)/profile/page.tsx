'use client'
import React from 'react'
import {useGetID} from "@/hook/useFetch";
import Loading from "@/components/elements/Loading";
import {SensorProfile, TableSensorProfile} from "@/app/(auth)/profile/components/SensorProfile";
import RecordProfile from "@/app/(auth)/profile/components/RecordProfile";
import {DataProfile} from "@/interface/profile/example1";
import {AnggotaProfile} from "@/app/(auth)/profile/components/AnggotaProfile";
import {AnggotaTableProfile} from "@/components/tabels/basic/anggotaTableProfile";


export default function Page({searchParams: {id}}: { searchParams: { id: string } }) {
  // const queryClient = useQueryClient()

  const {
    data,
    isLoading,
    isError,
    isPending
  } = useGetID<DataProfile>("profile", id,)
  // const {query} = useGlobalState<ISensorGlobal>(["SENSOR"])
  if (isLoading) return <Loading/>
  if (isError || !data) return <h1>Error</h1>

  // queryClient.setQueryData(['SENSOR'], {value: data.record, rfid: "ALL"})
  // console.log(data)
  return <div className=" p-2 sm:flex sm:gap-2  w-full ">
    <div className="flex flex-col w-full  sm:1/2 md:w-1/3 my-2 ">
      <AnggotaProfile id={id} data={data}>
        {!isPending && <AnggotaTableProfile id={id} data={data}/>}
      </AnggotaProfile>
    </div>
    <div className="  flex flex-col w-full sm:1/2 md:w-2/3 space-y-5  ">
      <SensorProfile id={id}>
        {!isPending && <TableSensorProfile data={data}/>}
      </SensorProfile>
      <RecordProfile id={id}/>
    </div>
  </div>
}
