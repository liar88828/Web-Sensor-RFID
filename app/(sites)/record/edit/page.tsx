'use client'
import React, {Suspense} from 'react'
import FormRecord from "@/components/form/Record";
import PagesForm from "@/components/Layouts/PagesForm";
import {useRouter} from "next/navigation";
import {useGetID, useUpdate} from "@/hook/useFetch";
import Loading from "@/components/elements/Loading";
import {IRecord, IRecordCreate, PageId} from "@/interface/type";

export default function Page({searchParams: {id}}: PageId) {
  const router = useRouter()

  const {
    data,
    isLoading,
    isError,
  } = useGetID<IRecord>("record", id)

  const {mutate} = useUpdate("record", id)

  function updateHandlerRecord(data: IRecordCreate) {
    console.log(data)
    mutate(data, {
      onSuccess: () => {
        router.push('/record')
      }
      // ,onError(){
      //
      // }
    })
  }

  if (isLoading) return <Loading/>

  if (isError || !data) return <h1>Error</h1>

  return (
    <Suspense>
      <PagesForm
        back={<></>
          // <BackLink href={'record'} title={'Create'}/>
        }
        form={<FormRecord method='PUT' fun={updateHandlerRecord} defaultData={data}/>}
      />
    </Suspense>
  )
}
