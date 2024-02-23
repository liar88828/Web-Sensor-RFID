
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod";
import {recordSchema} from "@/utils/validator/zod";
import {InputForm} from "../elements/Input";
import {FormBody, FormButton, FormLayout} from "./FormLayout";
import {SubmitButton} from "../elements/button";
import {FormProps, IRecordCreate} from '@/interface/type'

export default function FormRecord({method, defaultData, fun}: FormProps<IRecordCreate>) {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<IRecordCreate>({
    resolver: zodResolver(recordSchema),
    defaultValues: method === 'PUT' ? defaultData : {}
  })
  const onSubmit = (data: IRecordCreate) => fun(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormLayout>
        <FormBody>
          <InputForm
            errors={errors}
            title={'Tanggal'}
            type="date"
            reg={register("tanggal", {valueAsDate: true})}/>


          <InputForm
            errors={errors}
            title={'Jam Masuk'}
            type="time"
            reg={register("jamMasuk")}/>


        </FormBody>

        <FormBody>

          <InputForm
            errors={errors}
            title={'Lokasi'}
            type="text"
            reg={register("lokasi")}/>


          {/*<InputForm*/}
          {/*  errors={errors}*/}
          {/*  title={'Warna'}*/}
          {/*  type="text"*/}
          {/*  reg={register("warna")}/>*/}


          <FormButton>
            <SubmitButton method={method}/>
          </FormButton>
        </FormBody>


      </FormLayout>
    </form>


  )
}
