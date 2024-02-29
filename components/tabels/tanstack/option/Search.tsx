'use client'
import React from "react";
import {SearchTable} from "@/interface/type";
import {Icon} from "@iconify/react";
import Link from "next/link";
import {useDelete} from "@/hook/useFetch";
import {useRQSGlobalState} from "@/hook/useGlobalState";
import {useQueryClient} from "@tanstack/react-query";
import Loading from "@/components/elements/conditional/Loading";

export function Search<T>({globalFilter, setGlobalFilter, table, excel, to, detail = false}: SearchTable<T>) {
  const queryClients = useQueryClient()
  const [value, values] = useRQSGlobalState([to, 'pagination'], 0) as [number, (d: number) => any]
  const id = table.getSelectedRowModel().rows.map((data: any) => data.original.id)

  const {mutate} = useDelete(to)
  const onDelete = async () => {
    // console.log( id[0])
    if (confirm(`Want to delete id ${id[0]} ?`)) {
      mutate({value: id[0]}, {
        onSuccess: () => {
          // queryClients.invalidateQueries({
          //   queryKey: [to, 'pagination']
          // })
          //
        }
      })
    }
  }
  const pages = queryClients.getQueryData<T[]>([to, String(value), null])
  console.log(pages)
  if (!pages) return <Loading/>

  return <div className={'flex justify-start sm:items-center flex-col sm:flex-row gap-2'}>
    <div className="space-x-2 flex no-wrap">
      <input
        value={globalFilter ?? ''}
        onChange={e => setGlobalFilter(String(e.target.value))}
        className="   input input-primary w-full sm:w-fit input-response "
        placeholder="Search all columns..."
      />
      <button className={'btn btn-accent btn-response'}
      >
        <Icon icon="material-symbols:search"/>
        <span className="sm:visible hidden">Deep Search</span>
      </button>
    </div>

    <div className="flex gap-2 justify-between  ">

      {/*---------*/}
      <button
        className={`btn btn-info btn-square 
        btn-response
        ${value === 0 && 'btn-disabled'}`}
        onClick={() => values(value - 1)}
      >
        <Icon icon="carbon:previous-outline"  className={'sm:text-3xl'}/></button>

      <Link className='btn btn-secondary btn-response' href={`/${to}/create`}> Create</Link>

      {
        id.length === 1 && <>
          {detail &&
            <Link className='btn btn-success btn-response' href={`/user/profile?id=${id[0]}&callback=/${to}`}> Detail</Link>}

          <Link className='btn btn-warning btn-response' href={`/${to}/edit?id=` + id[0]}> Edit</Link>

          <button className='btn btn-error btn-response' onClick={async () => onDelete()}> Delete</button>
        </>
      }

      <button className={'btn btn-primary btn-response'}
              onClick={() => excel(table.getRowModel().rows.map(row => row.original))}>Download
      </button>

      <button
        className={`btn btn-info btn-square btn-response ${pages?.length === 0 && 'btn-disabled'} `}
        onClick={() => values(value + 1)}
      >
        <Icon icon="carbon:next-outline" className={'sm:text-3xl'} /></button>
    </div>


  </div>
}
