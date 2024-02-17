'use client'
import FormAnggota from '@/components/form/Anggota'
import {useParams} from 'next/navigation'
import React from 'react'
import PagesForm from "@/components/Layouts/PagesForm";
import {BackLink} from "@/components/link/backLink";

export default function Page() {
  const params = useParams()

  console.log(params)

    return (<PagesForm
      back={<BackLink href={'anggota'} title={'Edit'}/>}
      form={<FormAnggota method='PUT'/>}
    />
  )
}
