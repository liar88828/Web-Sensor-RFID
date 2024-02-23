import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod";
import {InputForm} from "../elements/Input";
import {FormBody, FormButton, FormLayout} from "./FormLayout";
import {SubmitButton} from "../elements/button";
import {FormProps, IUser} from "@/interface/type";
import {userSchema} from "@/utils/validator/zod";

export default function FormUser({method, defaultData, fun}: FormProps<IUser>) {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<IUser>({
    resolver: zodResolver(userSchema),
    defaultValues: method === 'PUT' ? defaultData : {}
  })
  const onSubmit = (data: IUser) => fun(data)

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
            title={'No Hp'}
            type="text"
            reg={register("no_hp")}/>
        </FormBody>

        <FormBody>
          <InputForm
            errors={errors}
            title={'Alamat'}
            type="text"
            reg={register("alamat")}/>

          <InputForm
            errors={errors}
            title={'Email'}
            type="email"
            reg={register("email")}/>


          <FormButton>
            <SubmitButton method={method}/>
          </FormButton>
        </FormBody>


      </FormLayout>
    </form>


  )
}
