'use client'
import React from 'react';
import {enableCache, Icon} from "@iconify/react";
import {useGet} from "@/hook/useFetch";
import Loading from "@/components/elements/Loading";
import Errors from "@/components/elements/Errors";

enableCache('local');


export interface StatusData {
  anggota: number;
  user: number;
  sensor: number;
  record: number;
}

function DataStatus() {
  const {data, isLoading, isError} = useGet<StatusData>("user", 'status')
  if (isLoading) return <Loading/>
  if (isError || !data) return <Errors/>


  const status = [
    {
      title: 'User',
      size: data.user,
      icon: <Icon fontSize={24} icon="mdi:user-outline"/>,
      color: 'bg-info/5'

    },
    {
      title: 'Anggota',
      size: data.anggota,
      icon: <Icon fontSize={24} icon="ic:baseline-people"/>,
      color: 'bg-success/5'

    },
    {
      title: 'Sensor',
      size: data.sensor,
      icon: <Icon fontSize={24} icon="material-symbols-light:sensors-rounded"/>,
      color: 'bg-warning/5'
    },
    {
      title: 'Record',
      size: data.record,
      icon: <Icon fontSize={24} icon="bx:video-recording"/>,
      color: 'bg-error/5'

    },


  ]
  return (

    <div className=" my-5">
      <div className="flex gap-5 flex-wrap sm:flex-nowrap justify-center">
        {status.map(d =>
          <div className={`rounded ${d.color} py-4 px-5 gap-2 sm:w-1/4 w-[45%]  shadow-lg `} key={d.title}>

            <div className=" flex  gap-2 mb-2">
              <span className={'bg-white/40 rounded p-1'}>{d.icon}</span>
              <span>{d.title}</span>
            </div>
            <div className="">
              <span>{d.size}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DataStatus;
