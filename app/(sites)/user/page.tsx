'use client'
import React from 'react'
import {UserTable} from "@/components/tabels/tanstack/User";


export default function Page({searchParams: {limit, page}}: { searchParams: { limit: string, page: string } }) {
  return <UserTable page={page} limit={limit}/>

}
