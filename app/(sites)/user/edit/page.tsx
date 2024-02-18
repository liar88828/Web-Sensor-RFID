'use client'
import {useRouter, useSearchParams} from 'next/navigation'
import React from 'react'
import PagesForm from "@/components/Layouts/PagesForm";
import {BackLink} from "@/components/link/backLink";
import {useGetID, useUpdate} from "@/hook/useFetch";
import Loading from "@/components/elements/Loading";
import FormUser from "@/components/form/User";
import {IUser} from "@/interface/type";
import {paginationParam} from "@/utils/nextAdd";

export default function Page() {
  const router = useRouter()
  const id = useSearchParams().get('id') as string

  const {
    data,
    isLoading,
    isError,
  } = useGetID<IUser>("user", id)

  const {mutate} = useUpdate("record", id)

  function updateData(data: IUser) {
    console.log(data)
    mutate(data, {
      onSuccess: () => {
        // router.push('/record')
        router.push('/user' + paginationParam)

      }
    })
  }

  if (isLoading) return <Loading/>

  if (isError) return <h1>Error</h1>

  return (<PagesForm
      back={<BackLink href={'user'} title={'Edit'}/>}
      form={<FormUser method='PUT' fun={updateData} defaultData={data}/>}
    />
  )
}
