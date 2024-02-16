'use client'
import FormAnggota from '@/components/form/Anggota'
import Link from 'next/link'
import {useParams, usePathname} from 'next/navigation'
import React from 'react'
import Profile from "@/app/(sites)/anggota/detail/profile";

export default function Page ()
{
  const params = useParams()

  console.log(params)

  return (
    <Profile/>
  )
}
