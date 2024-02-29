"use client";

import {RegisterForm} from "@/components/form/Register";
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import Loading from "@/components/elements/conditional/Loading";

export default function RegisterPage() {
  // const router = useRouter();
  // const {status} = useSession()
  //
  // if (status === 'loading') return <Loading/>
  // if (status === 'authenticated') return router.replace('/')

  return (
    <div className="container mx-auto px-6 py-12 h-full flex justify-center items-center">
      <RegisterForm/>
    </div>
  );
}
