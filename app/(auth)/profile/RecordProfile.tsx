'use client'
import React from 'react';
import {Icon} from "@iconify/react/dist/iconify.js";
import {DetailProfile, ISensorGlobal} from "@/interface/type";
import {useGlobalState} from "@/hook/useGlobalState";
import Loading from "@/components/elements/Loading";
import {useSearchParams} from "next/navigation";
import {queryClient} from "@/components/provider/ReactQuery";
import Record from "@/app/(auth)/profile/table/record";

export default function RecordProfile() {
  const id = useSearchParams().get('id')
  const data = queryClient.getQueryData<DetailProfile>(['user', id])

  const {query, mutate} = useGlobalState<ISensorGlobal>("SENSOR")
  if (!query || !data) return <Loading/>

  return (
    <div className="bg-white p-3 shadow-lg rounded">
      <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
        <span className="text-green-500"><Icon icon="mdi:paper-outline"/></span>
        <span className="tracking-wide">Record </span>
        <span className="tracking-wide"> {query.rfid ? query.rfid : "ALL"}</span>
        <button
          className={'btn btn-error '}
          onClick={() => mutate({value: data.record, rfid: 'ALL'})}>Reset
        </button>
      </div>
      <div className="overflow-x-auto bg-base-100 rounded shadow">
        <Record/>
      </div>

    </div>
  );
}
