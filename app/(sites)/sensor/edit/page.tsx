'use client'
import Link from 'next/link'
import React from 'react'
import FormSensor from "@/components/form/Sensor";

export default function page() {

  // const path = usePathname()
  // console.log( path )

  return (
    <div>

      <div>
        <div className="max-w-md flex items-center m-3">
          <Link className='btn btn-primary' href={'/sensor'}> Back </Link>
          <h1 className="text-2xl font-bold"> Edit Sensor </h1>
        </div>
      </div>
      <FormSensor method='PUT'/>
    </div>
  )
}
