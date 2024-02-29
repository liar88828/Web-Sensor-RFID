'use client'
import FormAnggota from '@/components/form/Anggota'
import React from 'react'
import PagesForm from "@/components/Layouts/PagesForm";
import {useRouter} from "next/navigation";
import {useCreate} from "@/hook/useFetch";
import {IAnggotaCreate, PageId} from "@/interface/type";


export default function Page({searchParams: {id}}: PageId) {

  const router = useRouter()

  const {mutate, status} = useCreate("anggota")
  console.log(status)

  function createData(data: IAnggotaCreate) {
    console.log(data)
    mutate(data, {
      onSuccess: () => {
        router.push('/anggota')
      }
    })
  }

  return (<PagesForm
      back={<></>
        // <BackLink href={'anggota'} title={'Create'}/>
      }
      form={<FormAnggota
        method='POST' fun={createData}
      />}
    />
  )
}
