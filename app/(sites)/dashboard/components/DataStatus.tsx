'use client'
import React from 'react';
import {enableCache, Icon} from "@iconify/react";
import {useGet} from "@/hook/useFetch";
import Loading from "@/components/elements/Loading";
import Errors from "@/components/elements/Errors";
import {StatusData} from "@/interface/type";
import {formatNumber} from "@/utils/formatIndonesia";
import {he} from "@faker-js/faker";


function DataStatus() {
  enableCache('local');

  const {data, isLoading, isError} = useGet<StatusData>("dashboard", 'status')
  if (isLoading) return <Loading/>
  if (isError || !data) return <Errors/>

  const status = [
    {
      title: 'User',
      size: formatNumber(data.user),
      icon: <Icon fontSize={24} icon="mdi:user-outline"/>,
      color: 'bg-info/10',
      head: ' border-info'
    },
    {
      title: 'Anggota',
      size: formatNumber(data.anggota),
      icon: <Icon fontSize={24} icon="ic:baseline-people"/>,
      color: 'bg-success/10',
      head: ' border-success'

    },
    {
      title: 'Sensor',
      size: formatNumber(data.sensor),
      icon: <Icon fontSize={24} icon="material-symbols-light:sensors-rounded"/>,
      color: 'bg-warning/10',
      head: ' border-warning'
    },
    {
      title: 'Record',
      size: formatNumber(data.record),
      icon: <Icon fontSize={24} icon="bx:video-recording"/>,
      color: 'bg-error/10',
      head: ' border-error'
    }
  ]
  return (

    <div className="flex gap-5 flex-wrap sm:flex-nowrap justify-center my-5  p-4 bg-white rounded">
      {status.map(d =>
        <div
          className={`rounded ${d.color} py-4 px-5 gap-2 sm:w-1/4 w-[45%] shadow-lg border-t-4 ${d.head}`}
          key={d.title}>

          <div className=" flex  gap-2 mb-2">
            <span className={'bg-white/50 rounded p-1'}>{d.icon}</span>
            <span>{d.title}</span>
          </div>
          <div className="">
            <span>{d.size}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default DataStatus;
