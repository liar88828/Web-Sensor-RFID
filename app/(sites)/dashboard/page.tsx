import React from 'react'
import DataStatus from "@/app/(sites)/dashboard/DataStatus";
import DataOrang from "@/app/(sites)/dashboard/DataOrang";
import DataRecords from "@/app/(sites)/dashboard/DataRecords";
import DataLines from "@/app/(sites)/dashboard/DataLines";

export default function page() {



  return (

    <div>
      <>
        <DataStatus/>
      </>
      <div className="flex gap-5 flex-wrap sm:flex-nowrap mt-2">
        <div className="w-[100%] sm:w-[65%] space-y-5">
          <DataLines/>
          <DataOrang/>
        </div>
        <div className="w-[100%] sm:w-[35%] ">
          <DataRecords/>

        </div>


      </div>
    </div>
  )
}
