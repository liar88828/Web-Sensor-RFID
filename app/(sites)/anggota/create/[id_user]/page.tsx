'use client'
import FormAnggota from '@/components/form/Anggota'
import React from 'react'
import PagesForm from "@/components/Layouts/PagesForm";
import {useRouter} from "next/navigation";
import {useCreate} from "@/hook/useFetch";
import {IAnggotaCreate} from "@/interface/type";

export default function Page({params: {id_user}}: { params: { id_user: string } }) {
  // console.log(id_user)
  const router = useRouter()

  const {mutate} = useCreate("anggota", id_user)

  // console.log(status)

  function createData(data: IAnggotaCreate) {
    // console.log(data)
    mutate(data, {
      onSuccess: () => {
        router.push('/profile?id=' + id_user)
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
