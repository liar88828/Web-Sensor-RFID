'use client'

import Link from 'next/link';
import Sidebar from './Sidebar';
import {usePathname, useRouter} from "next/navigation";
import {signOut, useSession} from "next-auth/react";
import React from "react";

export default function Navbar() {

  const pathName = usePathname()
  const path = pathName.split('/',)

  return (
    <section className="fixed top-2 left-2 right-2">

      <div className="navbar bg-base-100 rounded-lg ">
        <div className="navbar-start">
          <LeftNavbar/>
        </div>

        <div className="navbar-center">
          <a className="btn btn-ghost text-xl capitalize">{path[1]}</a>
        </div>

        <div className="navbar-end">
          <RightNavbar/>
        </div>
      </div>
    </section>

  )
}

function LeftNavbar() {
  const router = useRouter()
  return (
    <div className="flex flex-row gap-2">
      <Sidebar/>
      <button
        onClick={() => router.back()}
        className="btn btn-neutral btn-response"
        // sm:btn-md btn-sm
      >Back
      </button>
    </div>
  );
}

function RightNavbar() {
  const {data: session} = useSession()
  return (
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
        {/*<li><a>Link</a></li>*/}
        <li>
          <details>
            <summary>
              Auth
            </summary>
            <ul className="p-2 bg-base-100 rounded-t-none">
              {/* <li><a>Link 1</a></li> */}
              {!session ? (
                <>
                  <li><Link href={'/login'}>Login </Link></li>
                  <li><Link href={'/register'}>Register </Link></li>
                </>
              ) : (
                <>
                  <li><Link href={'/profile'}>Profile</Link></li>
                  <li><LogoutButton/></li>
                </>
              )}
            </ul>
          </details>
        </li>
      </ul>
    </div>
  );
}

function LogoutButton() {
  return (
    <button
      onClick={() => signOut()}
    >Logout</button>
  )
}
