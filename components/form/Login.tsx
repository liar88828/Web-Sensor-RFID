'use client'
import {useRouter} from "next/navigation";
import {useState} from "react";
import {signIn} from "next-auth/react";
import {useForm} from "react-hook-form";
import {loginSchema} from "@/utils/validator/zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {FormBody, FormLayout} from "@/components/form/FormLayout";
import {InputForm} from "@/components/elements/Input";
import Link from "next/link";
import {ILogin} from "@/interface/type";
import {toast} from "react-toastify";

export function LoginForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  // const searchParams = useSearchParams();
  // const callbackUrl = searchParams.get("callbackUrl") || "/profile";

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<ILogin>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data: ILogin) => {
    console.log(data)
    try {
      setLoading(true);

      const res = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
        callbackUrl: '/'
      });

      setLoading(false);

      console.log(res);
      if (!res?.error) {
        router.push('/');
      } else {
        toast.error("invalid email or password");
      }
    } catch (error: any) {
      setLoading(false);
      toast.error("invalid email or password");
      // setError(error);
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormLayout>
        <FormBody>
          <InputForm
            errors={errors}
            title={'Email'}
            type="email"
            reg={register("email")}/>


          <InputForm
            errors={errors}
            title={'Password'}
            type="password"
            reg={register("password")}/>


          <div className={'space-y-2 mt-3'}>

            <button
              type="submit"
              disabled={loading}
              className={` btn btn-primary w-full ${loading ? "btn-disabled" : " btn-primary"}`}
            >
              {loading ? "loading..." : "Login"}
            </button>

            <Link href='/register' className={'btn btn-secondary w-full text-white'}>
              Register
            </Link>

            <Link href='/forgot' className={'btn btn-error w-full text-white'}>
              Forget Password
            </Link>
          </div>

        </FormBody>

      </FormLayout>
    </form>
  );
};
