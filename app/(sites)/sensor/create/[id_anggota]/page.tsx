'use client'
import React from 'react'
import FormSensor from "@/components/form/Sensor";
import PagesForm from "@/components/Layouts/PagesForm";
import {useCreate} from "@/hook/useFetch";
import {useRouter} from "next/navigation";
import {ISensorCreate} from "@/interface/type";
import {paginationParam} from "@/utils/nextAdd";

export default function Page({params: {id_anggota}}: { params: { id_anggota: string } }) {

  const router = useRouter()
  const {mutate} = useCreate("sensor", id_anggota)

  function createSensor(data: ISensorCreate) {
    // console.log(data)
    mutate(data, {
      onSuccess: () => {
        // router.push('/sensor')
        router.push('/sensor?id=' + id_anggota)

      }
    })
  }

  return (
    <PagesForm
      back={<></>
        // <BackLink href={'sensor'} title={'Create'}/>
      }
      form={<FormSensor method='POST' fun={createSensor}/>}
    />

  )
}
