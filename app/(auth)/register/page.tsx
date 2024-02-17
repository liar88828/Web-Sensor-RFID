"use client";

import {RegisterForm} from "@/components/form/Register";
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";


export default function RegisterPage() {
  const router = useRouter()
  const {data} = useSession()
  // console.log(data)
  if (data !== null) {
    router.push('/')
  }

  return (
    <div className="container mx-auto px-6 py-12 h-full flex justify-center items-center">
      <RegisterForm/>
    </div>
  );
}
