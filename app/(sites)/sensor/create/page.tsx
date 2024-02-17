'use client'
import Link from 'next/link'
import React from 'react'
import FormRecord from "@/components/form/Record";
import FormSensor from "@/components/form/Sensor";
import PagesForm from "@/components/Layouts/PagesForm";
import {BackLink} from "@/components/link/backLink";

export default function page() {

  // const path = usePathname()
  // console.log( path )

  return (
    <PagesForm
      back={<BackLink href={'sensor'} title={'Create'}/>}
      form={<FormSensor method='POST'/>}
    />
    // <div>
    //
    //   <div>
    //     <div className="max-w-md flex items-center m-3">
    //       <Link className='btn btn-primary' href={'/sensor'}> Back </Link>
    //       <h1 className="text-2xl font-bold"> Create Sensor </h1>
    //     </div>
    //   </div>
    //
    //
    //   <FormSensor method='POST'/>
    // </div>
  )
}
