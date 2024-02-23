import React from 'react'
import Status from "@/app/(sites)/home/Status";
import DataOrang from "@/app/(sites)/home/DataOrang";
import DataRecords from "@/app/(sites)/home/Records";
import DataLines from "@/app/(sites)/home/DataLines";

export default function page() {
  return (

    <div>
      <Status/>
      <div className="flex gap-2 px-2 flex-wrap sm:flex-nowrap">
        <div className="w-[100%] sm:w-[50%] space-y-5">
          <DataOrang/>
          <DataRecords/>
        </div>

        <div className="w-[100%] sm:w-[50%]">
          <DataLines/>
        </div>
      </div>
    </div>
  )
}
