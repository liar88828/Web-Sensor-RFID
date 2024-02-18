'use client'
import React from 'react'
import FormRecord from "@/components/form/Record";
import PagesForm from "@/components/Layouts/PagesForm";
import {BackLink} from "@/components/link/backLink";
import {useRouter, useSearchParams} from "next/navigation";
import {useGetID, useUpdate} from "@/hook/useFetch";
import {IRecord, IRecordCreate} from "@/utils/validator/zod";
import Loading from "@/components/elements/Loading";

export default function Page() {
  const router = useRouter()
  const id = useSearchParams().get('id') as string

  const {
    data,
    isLoading,
    isError,
  } = useGetID<IRecord>("record", id)

  const {mutate} = useUpdate("record", id)

  function updateRecord(data: IRecordCreate) {
    console.log(data)
    mutate(data, {
      onSuccess: () => {
        // router.push('/record')
        router.back()
      }
    })
  }

  if (isLoading) return <Loading/>

  if (isError) return <h1>Error</h1>

  return (
    <PagesForm
      back={<BackLink href={'record'} title={'Create'}/>}
      form={<FormRecord method='PUT' fun={updateRecord} defaultData={data}/>}
    />
  )
}
