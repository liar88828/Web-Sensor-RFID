'use client'
import FormAnggota from '@/components/form/Anggota'
import React from 'react'
import PagesForm from "@/components/Layouts/PagesForm";
import {BackLink} from "@/components/link/backLink";

export default function page() {

  // const path = usePathname()
  // console.log( path )

  return (<PagesForm
      back={<BackLink href={'anggota'} title={'Create'}/>}
      form={<FormAnggota method='POST'/>}
    />
  )
}
