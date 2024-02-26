'use client'
import React from 'react';
import {Icon} from "@iconify/react/dist/iconify.js";
import {DetailProfile, ISensorGlobal} from "@/interface/type";
import {useGlobalState} from "@/hook/useGlobalState";
import Record from "@/components/tabels/basic/record";
import Loading from "@/components/elements/Loading";

export default function RecordProfile({id,}: { id: string }) {

  const {query: dataProfile} = useGlobalState<DetailProfile>(['profile', id])
  const {query, set} = useGlobalState<ISensorGlobal>(["SENSOR"])
  if (!query) return <Loading/>
  return (
    <div className="bg-white p-3 shadow-lg rounded  ">
      <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
        <span className="text-green-500"><Icon icon="mdi:paper-outline"/></span>
        <span className="tracking-wide">Record </span>
        <span className="tracking-wide"> {query?.rfid ? query.rfid : "ALL"}</span>
        <button
          className={'btn btn-error  btn-sm'}
          onClick={() => set.mutate({value: dataProfile?.record, rfid: 'ALL'})}
        >Reset
        </button>
      </div>
      <Record data={query?.value}/>
    </div>
  );
}
