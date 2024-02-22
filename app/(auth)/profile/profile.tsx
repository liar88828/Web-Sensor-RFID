'use client'
import React from 'react';
import AnggotaCard from "@/app/(auth)/profile/AnggotaCard";
import SensorProfile from "@/app/(auth)/profile/SensorProfile";
import RecordProfile from "@/app/(auth)/profile/RecordProfile";


export default function Profile({id}: { id: string }) {
  return (
    <div className=" p-2 sm:flex sm:gap-2">
      <div className="sm:w-fit w-full flex flex-col my-2 ">
        <AnggotaCard id={id}/>
      </div>

      <div className="w-full  flex flex-col  ">
        {/*<AboutProfile data={data}/>*/}
        <div className="my-2"></div>
        <SensorProfile id={id}/>
        <div className="my-2"></div>
        <RecordProfile id={id}/>
      </div>
    </div>
  )
}
