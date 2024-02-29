'use client'
import {useState} from "react";
// import {useRouter} from "next/navigation";
import {signIn} from "next-auth/react";
import {useForm} from "react-hook-form";
import {registerSchema} from "@/utils/validator/zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {nextUrl} from "@/utils/next/nextAdd";
import {FormBody, FormLayout} from "@/components/form/FormLayout";
import {InputForm} from "@/components/elements/Input";
import Link from "next/link";
import {IRegister} from "@/interface/type";
import {toast} from "react-toastify";

// import {}from 'react-dom'
export function RegisterForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);


  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<IRegister>({
    resolver: zodResolver(registerSchema),
  })
  console.log(errors)
  const onSubmit = async (data: IRegister) => {
    // console.log(data)
    try {
      const res = await fetch(nextUrl + "/api/secure/register",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        });

      setLoading(false);
      // console.log(await res.json())

      // @ts-ignore
      const json = await res.json()
      if (!res.ok) {
        toast.error(json.message)
        return;
      }
      toast.success(json.message)
      await signIn(undefined, {callbackUrl: "/"});
    } catch (error: any) {
      toast.error(error.message)
      // toast.success(data.message)
      setLoading(false);
      setError(error);
    }
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormLayout>
        <FormBody>
          <InputForm
            errors={errors}
            title={'Nama'}
            type="text"
            reg={register("name")}/>


          <InputForm
            errors={errors}
            title={'Alamat'}
            type="textarea"
            max={30}
            reg={register("alamat")}/>


          <InputForm
            errors={errors}
            title={'No Hp'}
            type="tel"
            reg={register("no_hp")}/>


          <InputForm
            errors={errors}
            title={'Email'}
            type="email"
            reg={register("email")}/>


        </FormBody>
        <FormBody>
          <InputForm
            errors={errors}
            title={'Password'}
            type="password"
            reg={register("password")}/>


          <InputForm
            errors={errors}
            title={'Confirm Password'}
            type="password"
            reg={register("confirmPassword")}/>

          <div className=" space-y-2 mt-5">


            <button
              type="submit"
              disabled={loading}
              className={` btn  w-full btn-response  ${loading ? "btn-disabled" : " btn-primary"}`}
            >
              {loading ? "loading..." : "Register"}
            </button>

            <Link className={` btn btn-neutral w-full btn-response `} href={'/login'}>Back</Link>

          </div>

        </FormBody>
      </FormLayout>
    </form>
  );
}
