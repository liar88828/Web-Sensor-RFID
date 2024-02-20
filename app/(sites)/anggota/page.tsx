'use client'
import React from 'react'
import {AnggotaTable} from "@/components/tabels/tanstack/Anggota";
import {useSearchParams} from "next/navigation";
import {useGet} from "@/hook/useFetch";
import Loading from "@/components/elements/Loading";
import {Anggota} from "@/interface/type";


export default function Page() {

  const params = useSearchParams() as any

  const {data, isLoading, isError} = useGet<Anggota[]>(
    params.get('limit'),
    params.get('page'),
    "anggota")

  if (isLoading) return <Loading/>

  if (isError) return <h1>Error</h1>
  console.log(data)
  return <AnggotaTable data={data as Anggota[]}/>
}

export type Root = Root2[]

export interface Root2 {
  id: string
  hewan: string
  warna: string
  id_user?: string
  id_sensor: IdSensor[]
  User?: User
}

export interface IdSensor {
  kode: string
}

export interface User {
  alamat: string
  name: string
  no_hp: string
  email: string
}
