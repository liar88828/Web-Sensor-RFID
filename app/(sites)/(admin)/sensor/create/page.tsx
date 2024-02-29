'use client'
import React from 'react'
import FormSensor from "@/components/form/Sensor";
import PagesForm from "@/components/Layouts/PagesForm";
import {useCreate} from "@/hook/useFetch";
import {useRouter} from "next/navigation";
import {ISensorCreate} from "@/interface/type";

export default function Page() {

  const router = useRouter()
  // console.log('test')
  const {mutate} = useCreate("sensor")

  function createSensor(data: ISensorCreate) {
    // console.log(data)
    mutate(data, {
      onSuccess: () => {
        // router.push('/sensor')
        router.push('/sensor' )

      }
    })
  }

  return (
    <PagesForm
      back={<></>
        // <BackLink href={'sensor'} title={'Create'}/>
      }
      form={<FormSensor method='POST' fun={createSensor}/>}
    />
    // <div>
    //
    //   <div>
    //     <div className="max-w-md flex items-center m-3">
    //       <Link className='btn btn-primary' href={'/sensor'}> Back </Link>
    //       <h1 className="text-2xl font-bold"> Create Sensor </h1>
    //     </div>
    //   </div>
    //
    //
    //   <FormSensor method='POST'/>
    // </div>
  )
}
