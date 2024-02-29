'use client'
import Link from 'next/link'
import React from 'react'

import {Icon} from '@iconify/react/dist/iconify.js'
import {SlideList} from "@/utils/asset/List";


export default function Sidebar() {

  return (
    <div className="drawer static">
      <input id="my-drawer" type="checkbox" className="drawer-toggle"/>
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer"
               className="btn btn-primary drawer-button btn-response "
          // btn-sm sm:btn-md
        >

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
  )
}
