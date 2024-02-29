'use client'
import React, {PropsWithChildren} from 'react';
import Navbar from "@/components/Layouts/Navbar ";
import {usePathname} from "next/navigation";
import NavbarHome from "@/app/(sites)/home/components/NavbarHome";

function LayoutNext({children}: PropsWithChildren) {
  // const data = useSession()
  // console.log(data)
  // if(data.status==='authenticated'){
  //
  // }
  const paramName = usePathname()
  const name = paramName.length !== 1
  return (
    <div
      className={`min-h-screen  bg-gradient-to-tr from-cyan-200 to-blue-100 ${name || 'pt-20'}  p-5 justify-center items-center flex `}>
      <div className="container">
        {name ? <Navbar/> : <NavbarHome role={'admin'}/>}
        {children}
      </div>
    </div>
  )
    ;
}

export default LayoutNext;
