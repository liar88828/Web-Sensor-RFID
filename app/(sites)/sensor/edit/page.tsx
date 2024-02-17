'use client'
import React from 'react'
import FormSensor from "@/components/form/Sensor";
import PagesForm from "@/components/Layouts/PagesForm";
import {BackLink} from "@/components/link/backLink";

export default function page() {

  // const path = usePathname()
  // console.log( path )

  return (
    <PagesForm
      back={<BackLink href={'sensor'} title={'Edit'}/>}
      form={<FormSensor method='PUT'/>}
    />
  )
}
