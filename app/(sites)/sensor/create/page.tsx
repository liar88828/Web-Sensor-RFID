'use client'
import Link from 'next/link'
import React from 'react'
import FormRecord from "@/components/form/Record";
import FormSensor from "@/components/form/Sensor";

export default function page() {

  // const path = usePathname()
  // console.log( path )

  return (
    <div>

      <div>
        <div className="max-w-md flex items-center m-3">
          <Link className='btn btn-primary' href={'/sensor'}> Back </Link>
          <h1 className="text-2xl font-bold"> Create Sensor </h1>
        </div>
      </div>


      <FormSensor method='POST'/>
    </div>
  )
}
