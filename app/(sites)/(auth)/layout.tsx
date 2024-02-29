'use client'
import React from 'react';
import {useRouter} from "next/navigation";
import Loading from "@/components/elements/conditional/Loading";
import {useSession} from "next-auth/react";

function Layout({children}: { children: React.ReactNode }) {

  const router = useRouter();
  const {status} = useSession()

  if (status === 'loading') return <Loading/>
  if (status === 'authenticated') return router.replace('/')
  return children
}

export default Layout;
