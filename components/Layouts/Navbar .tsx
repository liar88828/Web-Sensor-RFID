'use client'

import Link from 'next/link';
// import Link from 'next/link'

import Slidebar from './Slidebar';
export default function Navbar ()
{
  return (
    <section className="fixed top-2 left-2 right-2">

      <div className="navbar bg-base-100 rounded-lg ">
        <div className="flex-1">
          <Slidebar />
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><a>Link</a></li>
            <li>
              <details>
                <summary>
                  Auth
                </summary>
                <ul className="p-2 bg-base-100 rounded-t-none">
                  {/* <li><a>Link 1</a></li> */ }
                  <li><Link href={ '/login' }>Login </Link></li>
                  <li><Link href={ '/register' }>Register </Link></li>
                  <li><Link href={ '/profile' }>Profile </Link></li>
                  <li><Link href={ '/logout' }>Logout </Link></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </section>

  )
}
