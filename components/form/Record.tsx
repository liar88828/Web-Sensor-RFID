'use client'
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod";
import {anggotaSchema, IAnggotaCreate, IRecordCreate, recordSchema} from "@/utils/zod/schema";
import {InputForm} from "../elements/Input";
import {FormBody, FormButton, FormLayout} from "./FormLayout";
import {SubmitButton} from "../elements/button";
import {Method} from '@/interface/type'

export default function FormRecord(
  {method}: {
    method: Method
  }) {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<IRecordCreate>({
    resolver: zodResolver(recordSchema),
  })
  const onSubmit = (data: IRecordCreate) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormLayout>
        <FormBody>
          <InputForm
            errors={errors}
            title={'Tanggal'}
            type="date"
            reg={register("tanggal")}/>


          <InputForm
            errors={errors}
            title={'Jam Masuk'}
            type="date"
            reg={register("jamMasuk")}/>


        </FormBody>

        <FormBody>

          <InputForm
            errors={errors}
            title={'Lokasi'}
            type="text"
            reg={register("lokasi")}/>


          <InputForm
            errors={errors}
            title={'Warna'}
            type="text"
            reg={register("warna")}/>


          <FormButton>
            <SubmitButton method={method}/>
          </FormButton>
        </FormBody>


      </FormLayout>
    </form>


  )
}
