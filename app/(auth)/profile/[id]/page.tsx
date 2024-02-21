'use client'
import React, {Suspense} from 'react'
import {useGetID} from "@/hook/useFetch";
import Loading from "@/components/elements/Loading";
import {useParams, useSearchParams} from "next/navigation";
import Profile from "@/app/(auth)/profile/profile";
import {useQueryClient} from "@tanstack/react-query";
import {Root} from "@/interface/user";

//
// const exampleData: DetailProfile = {
//   // id: 'asdasdas',
//   no_hp: '1231231',
//   alamat: "asdasdasd",
//   email: "asdasdasd",
//   name: "asdasdas",
//   anggota: {
//     id: '231231', hewan: 'asdasdas', warna: 'Biru',
//     // id_user: "asda",
//     id_sensor: [
//       {
//         id: '1231231', warna: 'Biru', kode: '12312312', status: 'Invalid', rfid: 'cin cin',
//         // id_anggota: 'asdasdas',
//         id_record: [
//           {
//             id: '12312',
//             // id_sensor: 'asdasdas',
//             jamMasuk: new Date().toLocaleTimeString('id-ID', {
//               hour: "2-digit", minute: "2-digit"
//             }).toString(),
//             tanggal: new Date(),
//             lokasi: 'Semarang'
//
//           },
//         ]
//       }
//     ],
//   },
// }
export default function Page() {
  const queryClient = useQueryClient()
  const search = useSearchParams()
  // const id = search.get('id') as string
  const {id} = useParams() as { id: string }

  const {data, isLoading, isError,} = useGetID<Root>("user", id)
  if (isLoading) return <Loading/>
  if (isError || !data) return <h1>Error</h1>
  console.log(data)
  queryClient.setQueryData(['SENSOR'], {value: data.record, rfid: "ALL"})

  return <Suspense>
    <Profile id={id}/>
  </Suspense>
}
