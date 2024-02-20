'use client'
import React from 'react';
import ProfileCard from "@/app/(auth)/profile/ProfileCard";
import SensorProfile from "@/app/(auth)/profile/SensorProfile";
import RecordProfile from "@/app/(auth)/profile/RecordProfile";


export default function Profile() {
  return (
    <div className=" p-2 sm:flex sm:gap-2">
      <div className="sm:w-fit w-full flex flex-col my-2 ">
        <ProfileCard/>
      </div>

      <div className="w-full  flex flex-col  ">
        {/*<AboutProfile data={data}/>*/}
        <div className="my-2"></div>
        <SensorProfile/>
        <div className="my-2"></div>
        <RecordProfile/>
      </div>
    </div>
  )
}
