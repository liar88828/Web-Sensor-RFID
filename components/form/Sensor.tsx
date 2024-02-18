'use client'
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod";
import {sensorSchema} from "@/utils/validator/zod";
import {InputForm} from "../elements/Input";
import {FormBody, FormButton, FormLayout} from "./FormLayout";
import {SubmitButton} from "../elements/button";
import {ISensor, ISensorCreate, Method} from '@/interface/type'

export default function FormSensor(
  {
    defaultData,
    method,
    fun
  }: {
    defaultData?: ISensor
    method: Method,
    fun: (data: ISensorCreate) => any
  }) {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<ISensorCreate>({

    resolver: zodResolver(sensorSchema),
    defaultValues: method === 'PUT' ? defaultData : {}
  })
  const onSubmit = (data: ISensorCreate) => fun(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormLayout>
        <FormBody>
          <InputForm
            errors={errors}
            title={'Rfid'}
            type="text"
            max={20}
            reg={register("rfid")}/>

          <InputForm
            errors={errors}
            title={'Kode'}
            type="text"
            max={10}
            reg={register("kode")}/>
        </FormBody>

        <FormBody>
          <InputForm
            errors={errors}
            title={'Status'}
            type="text"
            max={10}

            reg={register("status")}/>


          <InputForm
            errors={errors}
            title={'Warna'}
            type="text"
            max={10}

            reg={register("warna")}/>

          <FormButton>
            <SubmitButton method={method}/>
          </FormButton>
        </FormBody>


      </FormLayout>
    </form>


  )
}
