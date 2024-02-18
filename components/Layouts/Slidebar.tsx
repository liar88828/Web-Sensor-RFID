'use client'
import Link from 'next/link'
import React from 'react'

import {enableCache, Icon} from '@iconify/react/dist/iconify.js'
import {paginationParam} from "@/utils/nextAdd";

enableCache('local');


const SlideList = [
  {
    title: 'Home',
    icon: <Icon fontSize={24} icon="material-symbols:home-outline"/>,
    href: '/home' + paginationParam,
  },
  {
    title: 'User',
    icon: <Icon fontSize={24} icon="mdi:user-outline"/>,
    href: '/user' + paginationParam,
  },
  {
    title: 'Anggota',
    icon: <Icon fontSize={24} icon="ic:baseline-people"/>,
    href: '/anggota' + paginationParam,
  },
  {
    title: 'Sensor',
    icon: <Icon fontSize={24} icon="material-symbols-light:sensors-rounded"/>,
    href: '/sensor' + paginationParam,
  },
  {
    title: 'Record',
    icon: <Icon fontSize={24} icon="bx:video-recording"/>,
    href: '/record' + paginationParam,
  },

]


export default function Slidebar() {

  return (


    <div>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle"/>
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
            <Icon icon="line-md:menu"/>
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-44 min-h-full bg-base-200 text-base-content">

            {/* Sidebar content here */}
            <li className='mt-36'>
              Iki logo
            </li>
            {SlideList.map((data) =>
              <li key={data.title}>
                <Link href={data.href}>{data.icon} {data.title}</Link>
              </li>
            )}


          </ul>
        </div>
      </div>
    </div>
  )
}
