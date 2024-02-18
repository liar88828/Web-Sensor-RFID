'use client'

import Link from 'next/link';
// import Link from 'next/link'
import Slidebar from './Slidebar';
import {usePathname} from "next/navigation";
import {useSession} from "next-auth/react";

export default function Navbar() {
  const {data: session} = useSession()
  const path = usePathname().split('/',)

  // console.log(path)
  return (
    <section className="fixed top-2 left-2 right-2">

      <div className="navbar bg-base-100 rounded-lg ">
        <div className="navbar-start">
          <div className="flex-1">
            <Slidebar/>
          </div>
        </div>

        <div className="navbar-center">
          <a className="btn btn-ghost text-xl capitalize">{path[1]}</a>
        </div>

        <div className="navbar-end">
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li><a>Link</a></li>
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
                        <li><Link href={'/logout'}>Logout</Link></li>
                      </>
                    )}
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

  )
}
