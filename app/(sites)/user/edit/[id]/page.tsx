'use client'
import {useParams, useRouter} from 'next/navigation'
import React from 'react'
import PagesForm from "@/components/Layouts/PagesForm";
import {useGetID, useUpdate} from "@/hook/useFetch";
import Loading from "@/components/elements/Loading";
import FormUser from "@/components/form/User";
import {IUser} from "@/interface/type";
import {paginationParam} from "@/utils/nextAdd";

export default function Page() {
  const router = useRouter()
  const {id} = useParams() as { id: string }

  const {
    data,
    isLoading,
    isError,
  } = useGetID<IUser>("user", id)

  const {mutate} = useUpdate("user", id)

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

  return (

    <PagesForm
      back={
        <></>
        // <BackLink href={'user'} title={'Edit'}/>
      }
      form={<FormUser method='PUT' fun={updateData} defaultData={data}/>}
    />

  )
}