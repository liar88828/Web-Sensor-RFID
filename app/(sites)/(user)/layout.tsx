'use client'
import React from 'react';

import Loading from "@/components/elements/conditional/Loading";
import {useSession} from "next-auth/react";
import {Unauthorized} from "@/components/elements/conditional/unauthorized";
import Errors from "@/components/elements/conditional/Errors";


function Layout({children}: { children: React.ReactNode }) {


  const {status, data} = useSession()

  if (status === 'loading') return <Loading/>
  if (!data) return <Errors/>
  // @ts-ignore
  if (data?.user?.role !== 'Unverified') return <Unauthorized href={'/'}/>
  return children
}

export default Layout;
