'use client'
import React from 'react'
import FormRecord from "@/components/form/Record";
import PagesForm from "@/components/Layouts/PagesForm";
import {BackLink} from "@/components/link/backLink";

export default function page() {

  return (
    <PagesForm
      back={<BackLink href={'record'} title={'Create'}/>}
      form={<FormRecord method='PUT'/>}
    />
  )
}
