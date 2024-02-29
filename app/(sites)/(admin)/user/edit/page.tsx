'use client'
import {useRouter} from 'next/navigation'
import React from 'react'
import PagesForm from "@/components/Layouts/PagesForm";
import {useGetID, useUpdate} from "@/hook/useFetch";
import Loading from "@/components/elements/conditional/Loading";
import FormUser from "@/components/form/User";
import {IUser} from "@/interface/type";

export default function Page({searchParams: {id}}: { searchParams: { id: string } }) {
  const router = useRouter()
  console.log(id)
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
        router.push('/user' )

      }
    })
  }

  if (isLoading) return <Loading/>

  if (isError) return <h1>Error</h1>

  return (

    <PagesForm
      back={
        <></>
        // <BackLink href={'lomba'} title={'Edit'}/>
      }
      form={<FormUser method='PUT' fun={updateData} defaultData={data}/>}
    />

  )
}
