'use client'
import FormAnggota from '@/components/form/Anggota'
import Link from 'next/link'
import {useParams, usePathname} from 'next/navigation'
import React from 'react'

export default function Page ()
{
  const params = useParams()

  console.log(params)

  return (
    <div>


      <div>
        <div className="max-w-md flex items-center m-3">
          <Link className='btn btn-primary' href={'/anggota'}> Back </Link>
          <h1 className="text-2xl font-bold"> Edit Anggota </h1>
        </div>
      </div>


      <FormAnggota method='PUT'/>

    </div>
  )
}
