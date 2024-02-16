'use client'
import Link from 'next/link'
import React from 'react'

import { Icon, enableCache } from '@iconify/react/dist/iconify.js'
enableCache( 'local' );


export default function Slidebar ()
{
  return (
    <div>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */ }
          <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
            <Icon icon="line-md:menu" />
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-44 min-h-full bg-base-200 text-base-content">

            {/* Sidebar content here */ }
            <li className='mt-36'>
              Iki logo
            </li>

            <li><Link href={ '/home' }>
              <Icon fontSize={ 24 } icon="material-symbols:home-outline" />
              Home
            </Link></li>

            <li><Link href={ '/anggota' }> <Icon fontSize={ 24 } icon="ic:baseline-people" />
                Anggota
              </Link></li>

            <li><Link href={ '/sensor' }>
              <Icon fontSize={ 24 } icon="material-symbols-light:sensors-rounded" />
              Sensor
            </Link></li>

            <li><Link href={ '/record' }><Icon fontSize={ 24 } icon="bx:video-recording" />
              Record
            </Link></li>
            
          </ul>
        </div>
      </div>
    </div>
  )
}
