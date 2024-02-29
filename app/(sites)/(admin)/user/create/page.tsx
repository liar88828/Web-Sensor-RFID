'use client'
import React from 'react'
import PagesForm from "@/components/Layouts/PagesForm";
import {useCreate} from "@/hook/useFetch";
import {useRouter} from "next/navigation";
import {IUser} from "@/interface/type";
import FormUser from "@/components/form/User";

export default function Page() {

  const router = useRouter()

  const {mutate} = useCreate("user")

  function createData(data: IUser) {
    console.log(data)
    mutate(data, {
      onSuccess: () => {
        // router.push('/sensor')
        router.push('/user' )

      }
    })
  }

  return (
    <PagesForm
      back={<></>
        // <BackLink href={'lomba'} title={'Create'}/>
      }
      form={<FormUser method='POST' fun={createData}/>}
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
