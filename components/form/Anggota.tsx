'use client'
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod";
import {anggotaSchema, } from "@/utils/validator/zod";
import {InputForm} from "../elements/Input";
import {FormBody, FormButton, FormLayout} from "./FormLayout";
import {SubmitButton} from "../elements/button";
import {IAnggota, IAnggotaCreate, Method} from '@/interface/type'

export default function FormAnggota(
  {
    method,
    defaultData,
    fun,
  }: {
    method: Method,
    defaultData?: IAnggota
    fun: (data: IAnggotaCreate) => any
  }) {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<IAnggotaCreate>({
    resolver: zodResolver(anggotaSchema),
  })
  const onSubmit = (data: IAnggotaCreate) => fun(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormLayout>
        <FormBody>
          {/*<InputForm*/}
          {/*  errors={errors}*/}
          {/*  title={'Nama'}*/}
          {/*  type="text"*/}
          {/*  reg={register("name")}/>*/}


          {/*<InputForm*/}
          {/*  errors={errors}*/}
          {/*  title={'No Hp'}*/}
          {/*  type="text"*/}
          {/*  reg={register("no_hp")}/>*/}

          {/*<InputForm*/}
          {/*  errors={errors}*/}
          {/*  title={'Email'}*/}
          {/*  type="email"*/}
          {/*  reg={register("email")}/>*/}


          {/*<InputForm*/}
          {/*  errors={errors}*/}
          {/*  title={'Alamat'}*/}
          {/*  type="textarea"*/}
          {/*  reg={register("alamat")}/>*/}
        </FormBody>

        <FormBody>
          <InputForm
            errors={errors}
            title={'Hewan'}
            type="text"
            reg={register("hewan")}/>

          <InputForm
            errors={errors}
            title={'Warna'}
            type="text"
            reg={register("warna")}/>

          {/*<InputForm*/}
          {/*  errors={errors}*/}
          {/*  title={'Sensor'}*/}
          {/*  type="text"*/}
          {/*  reg={register("sensor")}/>*/}


          <FormButton>
            <SubmitButton method={method}/>
          </FormButton>
        </FormBody>


      </FormLayout>
    </form>


  )
}
