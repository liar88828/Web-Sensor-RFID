'use client'
import FormAnggota from '@/components/form/Anggota'
import {useRouter, useSearchParams} from 'next/navigation'
import React from 'react'
import PagesForm from "@/components/Layouts/PagesForm";
import {BackLink} from "@/components/link/backLink";
import {useGetID, useUpdate} from "@/hook/useFetch";
import Loading from "@/components/elements/Loading";
import {IAnggota, IAnggotaCreate} from "@/interface/type";
import {paginationParam} from "@/utils/nextAdd";

export default function Page() {
  const router = useRouter()
  const id = useSearchParams().get('id') as string

  const {
    data,
    isLoading,
    isError,
  } = useGetID<IAnggota>("anggota", id)

  const {mutate} = useUpdate("anggota", id)

  function updateData(data: IAnggotaCreate) {
    console.log(data)
    mutate(data, {
      onSuccess: () => {
        // router.push('/record')
        router.push('/anggota' + paginationParam)
      }
    })
  }

  if (isLoading) return <Loading/>

  if (isError) return <h1>Error</h1>

  return (<PagesForm
      back={
        <></>
    // <BackLink href={'anggota'} title={'Edit'}/>
  }
      form={<FormAnggota method='PUT' fun={updateData} defaultData={data}/>}
    />
  )
}
