"use client";

import {RegisterForm} from "@/components/form/Register";
import {useSession} from "next-auth/react";
import {redirect} from "next/navigation";


export default function RegisterPage() {
  const {data} = useSession()
  if (data !== null) {
    redirect('/')
  }


  return (
    <div className="container mx-auto px-6 py-12 h-full flex justify-center items-center">
      <RegisterForm/>
    </div>
  );
}
