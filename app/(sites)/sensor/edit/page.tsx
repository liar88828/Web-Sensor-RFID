'use client'
import React from 'react'
import {useRouter} from "next/navigation";
import {useGetID, useUpdate} from "@/hook/useFetch";
import {ISensor, ISensorCreate} from "@/interface/type";
import {paginationParam} from "@/utils/nextAdd";
import Loading from "@/components/elements/Loading";
import PagesForm from "@/components/Layouts/PagesForm";
import FormSensor from "@/components/form/Sensor";

export default function Page({searchParams: {id}}: { searchParams: { id: string } }) {
  const router = useRouter()
  const {
    data,
    isLoading,
    isError,
  } = useGetID<ISensor>("sensor", id)

  const {mutate} = useUpdate("sensor", id)

  function updateSensor(data: ISensorCreate) {
    console.log(data)
    mutate(data, {
      onSuccess: () => {
        // router.push('/sensor')
        router.push('/sensor' + paginationParam)

      }
    })
  }

  if (isLoading) return <Loading/>
  if (isError) return <h1>Error</h1>


  return (
    <PagesForm
      back={<></>
        // <BackLink href={'sensor'} title={'Edit'}/>
      }
      form={<FormSensor method='PUT' fun={updateSensor} defaultData={data}/>}
    />
  );
}
