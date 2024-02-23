'use client'
import React from 'react';
import {Icon} from "@iconify/react";

const status = [
  {
    title: 'User',
    size: 10
  },
  {
    title: 'Anggota',
    size: 10
  },
  {
    title: 'Sensor',
    size: 10
  },
  {
    title: 'Record',
    size: 13423423423423420
  },


]

function Status() {


  return (

    <div className=" my-5 px-2">
      <div className="flex gap-5 flex-wrap sm:flex-nowrap justify-center">
        {status.map(d =>
          <div className="rounded bg-error py-4 px-5 gap-2 sm:w-1/4 w-[45%] " key={d.title}>

            <div className=" flex  gap-2 mb-2">
              <Icon fontSize={24} icon="mdi:user-outline"/>
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

export default Status;
