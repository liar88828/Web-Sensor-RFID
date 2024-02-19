'use client'
import React from 'react'
import FormRecord from "@/components/form/Record";
import {BackLink} from "@/components/link/backLink";
import PagesForm from "@/components/Layouts/PagesForm";
import {useRouter} from "next/navigation";
import {useCreate} from "@/hook/useFetch";
import {IRecordCreate} from "@/interface/type";
import {paginationParam} from "@/utils/nextAdd";

export default function Page() {

  const router = useRouter()

  const {mutate, status} = useCreate("record")
  console.log(status)

  function createRecord(data: IRecordCreate) {
    console.log(data)
    mutate(data, {
      onSuccess: () => {
        // router.back()
        router.push('/record' + paginationParam)
      }
    })
  }


  return (
    <PagesForm
      back={<BackLink href={'record'} title={'Record'}/>}
      form={<FormRecord method='POST' fun={createRecord}/>}
    />
  )
}
