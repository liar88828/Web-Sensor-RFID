'use client'
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod";
import {ISensorCreate, sensorSchema} from "@/utils/validator/zod";
import {InputForm} from "../elements/Input";
import {FormBody, FormButton, FormLayout} from "./FormLayout";
import {SubmitButton} from "../elements/button";
import {Method} from '@/interface/type'

export default function FormSensor(
  {method}: {
    method: Method
  }) {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<ISensorCreate>({
    resolver: zodResolver(sensorSchema),
  })
  const onSubmit = (data: ISensorCreate) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormLayout>
        <FormBody>
          <InputForm
            errors={errors}
            title={'Rfid'}
            type="text"
            reg={register("rfid")}/>

          <InputForm
            errors={errors}
            title={'Kode'}
            type="text"
            reg={register("kode")}/>
        </FormBody>

        <FormBody>
          <InputForm
            errors={errors}
            title={'Status'}
            type="text"
            reg={register("status")}/>


          <InputForm
            errors={errors}
            title={'Warna'}
            type="textarea"
            reg={register("warna")}/>

          <FormButton>
            <SubmitButton method={method}/>
          </FormButton>
        </FormBody>


      </FormLayout>
    </form>


  )
}
