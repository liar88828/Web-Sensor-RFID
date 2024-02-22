'use client'
import React from "react";
import {Table} from "@tanstack/react-table";
import {IPages} from "@/interface/type";
import {Icon} from "@iconify/react";
import Link from "next/link";
import {useDelete} from "@/hook/useFetch";
import {paginationParam} from "@/utils/nextAdd";

interface SearchTable<T> {
  globalFilter: string;
  setGlobalFilter: React.Dispatch<React.SetStateAction<string>>;
  table: Table<T>;
  excel: (data: T[]) => void;
  to: IPages;
  detail?: boolean;
}

export function Search<T>({globalFilter, setGlobalFilter, table, excel, to, detail = false}: SearchTable<T>) {
  const id = table.getSelectedRowModel().rows.map((data: any) => data.original.id)

  const {mutate} = useDelete(to)
  const onDelete = async () => {
    mutate(id[0], {
      onSuccess: () => {
      }
    })
  }

  return <div className={'flex justify-start sm:items-center flex-col sm:flex-row gap-2'}>
    <div className="space-x-2 flex no-wrap">

      <input
        value={globalFilter ?? ''}
        onChange={e => setGlobalFilter(String(e.target.value))}
        className="   input input-primary w-full sm:w-fit "
        placeholder="Search all columns..."
      />
    </div>

    <div className="flex gap-2 justify-between ">
      <button className={'btn btn-accent'}>
        <Icon icon="material-symbols:search"/>
        <span className="sm:visible hidden">Deep Search</span>
      </button>

      <Link className='btn btn-secondary' href={`/${to}/create`}> Create</Link>

      {
        id.length === 1 && <>
          {detail &&
            <Link className='btn btn-success' href={`/profile?id=${id[0]}&callback=/${to + paginationParam}`}> Detail</Link>}

          <Link className='btn btn-warning' href={`/${to}/edit?id=` + id[0]}> Edit</Link>

          <button className='btn btn-error' onClick={async () => onDelete()}> Delete</button>
        </>
      }


      <button className={'btn btn-primary'}
              onClick={() => excel(table.getRowModel().rows.map(row => row.original))}>Download
      </button>


    </div>


  </div>
}
