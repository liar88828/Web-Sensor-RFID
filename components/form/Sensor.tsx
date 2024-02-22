'use client'
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod";
import {sensorSchema} from "@/utils/validator/zod";
import {InputForm} from "../elements/Input";
import {FormBody, FormButton, FormLayout} from "./FormLayout";
import {SubmitButton} from "../elements/button";
import {Anggota, ISensor, ISensorCreate, Method} from '@/interface/type'
import {SelectNormal} from "@/components/elements/Select";
import {useGet} from "@/hook/useFetch";
import {SearchBar,} from "@/components/elements/SearchBar";
import Loading from "@/components/elements/Loading";

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

  const onSubmit = (data: ISensorCreate) => {
    console.log(data)
    fun(data)
  }
  const {data, isLoading, isError} = useGet<Anggota[]>('', 'create', 'anggota')

  if (isLoading) return <Loading/>
  if (!data || isError) return <Loading/>

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
          {/*<InputForm*/}
          {/*  errors={errors}*/}
          {/*  title={'Status'}*/}
          {/*  type="text"*/}
          {/*  max={10}*/}
          {/*  reg={register("status")}/>*/}
          <SelectNormal reg={register('status')} title={'Status'} data={['INVALID', 'ACTIVE']}/>

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
