'use client'
import React from 'react';
import PagesForm from "@/components/Layouts/PagesForm";
import FormAnggota from "@/components/form/Anggota";
import {IAnggota, IAnggotaCreate} from "@/interface/type";
import {paginationParam} from "@/utils/nextAdd";
import Loading from "@/components/elements/Loading";
import {useGetID, useUpdate} from "@/hook/useFetch";
import {useRouter} from "next/navigation";

function ClientComponent({id}: { id: string }) {
  const router = useRouter()

  const {
    data,
    isLoading,
    isError,
  } = useGetID<IAnggota>("anggota", id)

  const {mutate} = useUpdate("anggota", id)


  function updateData(data: IAnggotaCreate) {
    console.log(data)
    mutate(data, {
      onSuccess: () => {
        // router.push('/record')
        router.push('/anggota' + paginationParam)
      }
    })
  }

  if (isLoading) return <Loading/>

  if (isError) return <h1>Error</h1>


  return (
    <PagesForm
      back={
        <></>
        // <BackLink href={'anggota'} title={'Edit'}/>
      }
      form={<FormAnggota method='PUT' fun={updateData} defaultData={data}/>}
    />

  );
}

export default ClientComponent;
