'use client'
import React from 'react';
import ProfileCard from "@/app/(auth)/profile/ProfileCard";
import SensorProfile from "@/app/(auth)/profile/SensorProfile";
import RecordProfile from "@/app/(auth)/profile/RecordProfile";
import {DetailProfile} from "@/interface/type";


export default function Profile({data}: { data: DetailProfile }) {
  return (
    <div className="container mx-auto   ">
      <div className=" p-2 sm:flex sm:gap-2">
        <div className="sm:w-fit w-full flex flex-col my-2 ">
          <ProfileCard data={data}/>
        </div>

        <div className="w-full  flex flex-col  ">
          {/*<AboutProfile data={data}/>*/}
          <div className="my-2"></div>
          <SensorProfile data={data.anggota.id_sensor}/>
          <div className="my-2"></div>
          <RecordProfile data={data.anggota.id_sensor}/>
          {/*<FriendCard/>*/}
        </div>
      </div>

    </div>)
}
