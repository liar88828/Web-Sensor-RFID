'use client'

import Link from "next/link";

const navigation = [
  "Home",
  "Benefits",
  "Vidio",
  "Testimonials",
  // "Blog",
];

export default function NavbarHome({role}: { role: string }) {
  console.log(role)
  return (
    <div className="navbar bg-base-100/60   fixed top-0 left-0 right-0">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
        {role === 'admin'
          ? <Link href={'/dashboard'} className="btn btn-primary ">Dashboard</Link>
          : <Link href={'/dashboard'} className="btn btn-primary ">Masuk</Link>
        }
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {navigation.map(d => (
            <li key={d}><a href={`#${d}`}>{d}</a></li>
          ))}
        </ul>
      </div>
    </div>
  );
}
