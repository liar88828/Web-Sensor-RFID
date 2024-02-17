'use client'
import React from 'react'
import FormRecord from "@/components/form/Record";
import {BackLink} from "@/components/link/backLink";
import PagesForm from "@/components/Layouts/PagesForm";

export default function page() {

  return (
    <PagesForm
      form={<FormRecord method='POST'/>}
      back={<BackLink href={'record'} title={'Record'}/>}
    />
  )
}
