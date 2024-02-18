'use client'
import React from 'react'
import FormSensor from "@/components/form/Sensor";
import PagesForm from "@/components/Layouts/PagesForm";
import {BackLink} from "@/components/link/backLink";
import {useRouter, useSearchParams} from "next/navigation";
import {useGetID, useUpdate} from "@/hook/useFetch";
import Loading from "@/components/elements/Loading";
import {ISensor, ISensorCreate} from "@/interface/type";
import {paginationParam} from "@/utils/nextAdd";

export default function Page() {

  const router = useRouter()
  const id = useSearchParams().get('id') as string

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
        router.push('/user' + paginationParam)

      }
    })
  }

  if (isLoading) return <Loading/>
  if (isError) return <h1>Error</h1>

  return (
    <PagesForm
      back={<BackLink href={'sensor'} title={'Edit'}/>}
      form={<FormSensor method='PUT' fun={updateSensor} defaultData={data}/>}
    />
  )
}
