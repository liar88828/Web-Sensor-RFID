"use client";

import {LoginForm} from "@/components/form/Login";
import {useRouter} from "next/navigation";
import {useSession} from "next-auth/react";


export default function LoginPage() {
  const router = useRouter();
  const {status} = useSession()

  // console.log(data)
  if (status === 'authenticated') router.replace('/')

  return (<div className="container mx-auto px-6 py-12 h-full flex justify-center items-center">
      <LoginForm/>
    </div>
  )
    ;
}
