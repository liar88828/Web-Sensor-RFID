'use client'
import FormAnggota from '@/components/form/Anggota'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function page ()
{

  // const path = usePathname()
  // console.log( path )

  return (
    <div>

      <div>
        <div className="max-w-md flex items-center m-3">
          <Link className='btn btn-primary' href={ '/anggota' } > Back </Link>
          <h1 className="text-2xl font-bold"> Create Anggota </h1>
        </div>
      </div>


      <FormAnggota method='POST' />
    </div>
  )
}
