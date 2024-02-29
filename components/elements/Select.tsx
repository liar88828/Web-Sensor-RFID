'use client'
import {useGet} from "@/hook/useFetch";
import Loading from "@/components/elements/conditional/Loading";
import {IPages} from "@/interface/type";
import React from 'react';

export function SelectAsync<T>(
  {title, reg, keys, values, to}: {
    reg: any, title: string, to: IPages, keys: keyof T, values: keyof T,
  }) {

  const {data, isLoading, isError} = useGet<any[]>(to, 'create')
  if (isLoading) return <Loading/>
  if (isError || !data) return <h1>Error</h1>
  // console.log(data)
  return (
    <div className={"form-control w-full max-w-xs mt-1"}>
      <div className="label">
        <span className="label-text">{title}</span>
      </div>
      <select className="select select-bordered" {...reg}>
        <option value={''}>Select....</option>
        {data.map(d => (<option value={d[keys]} key={d.id}>{d[values]}</option>))}
      </select>
    </div>
  );
}

export function SelectNormal(
  {title, reg, data}: {
    reg: any, title: string, data: string[]
  }) {

  return (
    <div className={"form-control w-full max-w-xs mt-1"}>
      <div className="label">
        <span className="label-text">{title}</span>
      </div>
      <select className="select select-bordered" {...reg}>
        <option value={''}>Select....</option>
        {data.map(d => (<option value={d} key={d}>{d}</option>))}
      </select>
    </div>
  );
}


export function SelectJson<T>(
  {title = '', reg, keys, values, data, showTitle = true, values2, onChange, size = ''}: {
    reg?: any,
    title?: string,
    keys: keyof T,
    values: keyof T,
    data: any[],
    showTitle: boolean,
    values2?: keyof T,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    size?: 'select-xs' | ''
  }) {


  return (
    <div className={"form-control w-full "}>
      {showTitle &&
        <div className="label">
          <span className="label-text">{title}</span>
        </div>
      }
      <select
        className={`select select-bordered ${size}`}
        {...reg}
        onChange={onChange}>
        <option value={''}>Select....</option>
        {data.map(d => (<option
          value={d[keys]}
          key={d.id}>{d[values]} {values2 ? d[values2] : ''}</option>))}
      </select>
    </div>
  );
}
