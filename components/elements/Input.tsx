import React, { HTMLInputTypeAttribute, ReactElement } from 'react';
import { DeepRequired, FieldErrorsImpl, GlobalError } from 'react-hook-form';
import { JSX } from 'react/jsx-dev-runtime';
import IntrinsicElements = JSX.IntrinsicElements;

const StyleInputForm = ( salah: boolean ): string => ` p-2 bg-gray-100 text-black border rounded mb-1 leading-tight focus:outline-none focus:bg-white 
${ !salah
    ? ""
    : "border-red-500" } `

interface InputFormProps
{
  tag?: keyof IntrinsicElements | React.ComponentType<any>;
  title: string;
  type: HTMLInputTypeAttribute;
  reg: any;
  value?: string
  min?: number | string
  max?: number | string
  defaultValue?: string | number,
  errors: Partial<FieldErrorsImpl<DeepRequired<any>>> & { root?: Record<string, GlobalError> & GlobalError }
}

export function InputForm (
  {
    title,
    type,
    reg,
    min,
    max,
    errors,

  }
    : InputFormProps ): ReactElement
{

  const Input = type === "textarea"
    ?
    <textarea
      maxLength={ max ?? 10 }
      minLength={ min ?? 10 }
      id={ title }
      placeholder={ ` Masukan ${ title }....` }
      { ...reg }
      className={ " textarea-bordered textarea textarea-response  " }
    />
    :
    <input
      className={ "input  input-response input-bordered " }
      placeholder={ ` Masukan ${ title }....` }
      id={ title }
      type={ type }
      max={ max }
      min={ min }
      { ...reg }
    />
  return (
    <div className={ "form-control w-full max-w-xs mt-1" } >
      <label className={ "label" } htmlFor={ title }>
        <span className={ "label-text" }>{ title }</span>
      </label>
      { Input }
      { errors[ reg.name ] && <p className={ "text-red-600 label-text-alt" }>{ errors[ reg.name ]?.message as string }</p> }
      </div>
  )
}
