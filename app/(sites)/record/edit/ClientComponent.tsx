'use client'
import React from 'react';
import {useRouter} from "next/navigation";
import {useGetID, useUpdate} from "@/hook/useFetch";
import {IRecord, IRecordCreate} from "@/interface/type";
import {paginationParam} from "@/utils/nextAdd";
import Loading from "@/components/elements/Loading";
import PagesForm from "@/components/Layouts/PagesForm";
import FormRecord from "@/components/form/Record";

function ClientComponent({id}: { id: string }) {
  const router = useRouter()

  const {
    data,
    isLoading,
    isError,
  } = useGetID<IRecord>("record", id)

  const {mutate} = useUpdate("record", id)

  function updateRecord(data: IRecordCreate) {
    console.log(data)
    mutate(data, {
      onSuccess: () => {
        // router.push('/record')
        // router.back()
        router.push('/record' + paginationParam)

      }
    })
  }

  if (isLoading) return <Loading/>

  if (isError) return <h1>Error</h1>


  return (
    <PagesForm
      back={<></>
        // <BackLink href={'record'} title={'Create'}/>
      }
      form={<FormRecord method='PUT' fun={updateRecord} defaultData={data}/>}
    />
  );
}

export default ClientComponent;
