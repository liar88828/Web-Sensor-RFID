'use client'
import Link from 'next/link'
import React from 'react'
import FormRecord from "@/components/form/Record";

export default function page() {

  // const path = usePathname()
  // console.log( path )

  return (
    <div>

      <div>
        <div className="max-w-md flex items-center m-3">
          <Link className='btn btn-primary' href={'/record'}> Back </Link>
          <h1 className="text-2xl font-bold"> Edit Record </h1>
        </div>
      </div>


      <FormRecord method='PUT'/>
    </div>
  )
}
