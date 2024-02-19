'use client'
import React from 'react';
import {Icon} from "@iconify/react/dist/iconify.js";
import {DetailAnggota, DetailProfile, IAnggota, oldAnggota, UserData} from "@/interface/type";


function AboutProfile({data}: { data:  DetailProfile }) {
  return (
    <div className="bg-white p-3 shadow-sm rounded-sm">
      <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
        <span className="text-green-500">
          <Icon icon="material-symbols:person"/>
        </span>

        <span className="tracking-wide">About</span>

      </div>
      <div className="text-gray-700">
        <div className="grid md:grid-cols-2 text-sm space-y-1  ">

          <div className="grid grid-cols-2">
            <div className=" px-2 py-1 font-semibold">Nama</div>
            <div className="px-2 py-1 ">{data.name}</div>
          </div>

          <div className="grid grid-cols-2">
            <div className=" px-2 py-1 font-semibold">Alamat</div>
            <div className="px-2 py-1 ">{data.alamat}</div>
          </div>

          <div className="grid grid-cols-2">
            <div className=" px-2 py-1 font-semibold">No Hp</div>
            <div className="px-2 py-1 ">{data.no_hp}</div>
          </div>

          <div className="grid grid-cols-2">
            <div className=" px-2 py-1 font-semibold">Email</div>
            <div className="px-2 py-1 ">{data.email}</div>
          </div>

          {/*<div className="grid lg:grid-cols-2 md:grid-cols-3">*/}
          {/*  <div className=" px-2 py-1 font-semibold"></div>*/}
          {/*  <div className="px-2 py-1 ">{data.email}</div>*/}

          {/*</div>*/}

          {/*<div className="grid grid-cols-2">*/}
          {/*  <div className=" px-2 py-1 font-semibold">Lahir</div>*/}
          {/*  <div className="px-2 py-1 ">{}</div>*/}
          {/*</div>*/}
          {/*<div className="grid grid-cols-2">*/}
          {/*  <div className=" px-2 py-1 font-semibold">Lahir</div>*/}
          {/*  <divpx-2 py-1  className="">{data.lahir}</div>*/}
          {/*</div>*/}
        </div>
      </div>
      {/*<button*/}
      {/*  className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">Show*/}
      {/*  Full Information*/}
      {/*</button>*/}
    </div>
  );
}

export default AboutProfile;
