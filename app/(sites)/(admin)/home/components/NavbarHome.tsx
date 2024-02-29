'use client'
import logoBurung from "@/public/img/logo.webp";

import Link from "next/link";
import Image from "next/image";

const navigation = [
  "Home",
  "Benefits",
  "Vidio",
  "Testimonials",
  // "Blog",
];

export default function NavbarHome({role}: { role: string }) {
  // console.log(role)
  return (
    <div className="navbar bg-base-100/60   fixed top-0 left-0 right-0 px-10">
      <div className="flex-1 gap-5">
        <div className="avatar">
          <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <Image src={logoBurung} alt="logo burung"/>
          </div>
        </div>

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
