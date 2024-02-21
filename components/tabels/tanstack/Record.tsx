'use client'
import React from 'react'


import {
  ColumnDef,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table'

import Divider from "@/components/elements/Divider";
import {recordToExcel} from "@/utils/excel";
import {Pagination} from "@/components/tabels/tanstack/option/Pagination";
import {IndeterminateCheckbox} from "@/components/tabels/tanstack/option/IndeterminateCheckbox";
import {Search} from "@/components/tabels/tanstack/option/Search";
import {IRecord} from "@/interface/type";
import {useGet} from "@/hook/useFetch";
import Loading from "@/components/elements/Loading";
import Table from "@/components/tabels/tanstack/option/Table";

// export type Person = {
//   firstName: string
//   lastName: string
//   age: number
//   visits: number
//   progress: number
//   status: 'relationship' | 'complicated' | 'single'
//   subRows?: Person[]
// }


export function RecordTable({limit, page}: { limit: string, page: string }) {
  // const [data, setData] = React.useState(() => makeData<IRecord>(newRecord, 100))
  // const refreshData = () => setData(() => makeData(100))
  // const rerender = React.useReducer(() => ({}), {})[1]
  const {data, isLoading, isError} = useGet<IRecord[]>(limit, page, "record")


  const [globalFilter, setGlobalFilter] = React.useState('')
  const [rowSelection, setRowSelection] = React.useState({})
  // const [rowSize, setRowSize] = useState(0)
  const columns = React.useMemo<ColumnDef<IRecord>[]>(
    () => [
      {
        id: 'select',
        header: ({table}) => (
          <IndeterminateCheckbox
            {...{
              checked: table.getIsAllRowsSelected(),
              indeterminate: table.getIsSomeRowsSelected(),
              onChange: table.getToggleAllRowsSelectedHandler(),
            }}
          />
        ),
        cell: ({row}) => (
          <div className="px-1">
            <IndeterminateCheckbox
              {...{
                checked: row.getIsSelected(),
                disabled: !row.getCanSelect(),
                indeterminate: row.getIsSomeSelected(),
                onChange: row.getToggleSelectedHandler(),
              }}
            />
          </div>
        ),
      },
      {
        accessorKey: 'id',
        header: () => 'ID',
        cell: info => info.getValue(),
        footer: props => props.column.id,
      },
      {
        accessorKey: 'tanggal',
        header: () => 'Tanggal',
        cell: info => new Date(String(info.getValue())).toLocaleDateString('id-ID', {dateStyle: "full"}),
        footer: props => props.column.id,
      },
      {
        // id: 'kode',
        accessorKey: 'jamMasuk',
        header: () => 'Jam Masuk',
        cell: info => new Date(String(info.getValue())).toLocaleDateString('id-ID', {
          hour: 'numeric',
          minute: "numeric",
          // dateStyle: "short"
        }),

        footer: props => props.column.id,
      },

      {
        accessorKey: 'lokasi',
        header: () => 'Lokasi',
        footer: props => props.column.id,
      },
      // {
      //   accessorKey: 'warna',
      //   header: () => 'Warna',
      //   footer: props => props.column.id,
      // },

    ],
    []
  )


  const table = useReactTable({
    // @ts-ignore
    data,
    columns,
    state: {
      rowSelection,
      globalFilter
    },
    enableRowSelection: true, //enable row selection for all rows
    // enableRowSelection: row => row.original.age > 18, // or enable row selection conditionally per row
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    // debugTable: true,
  })
  if (isLoading) return <Loading/>

  if (isError) return <h1>Error</h1>
  return (
    <div className="p-6  space-y-2 rounded-xl bg-base-100/60">
      <Search<IRecord>
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
        excel={recordToExcel}
        table={table}
        to={'record'}
      />

      <div className=" overflow-x-auto  rounded bg-base-100/90">
        <Table<IRecord> table={table}/>
        {/*<table className={' static table table-zebra  table-xs    '}>*/}
        {/*  <thead>*/}
        {/*  {table.getHeaderGroups().map(headerGroup => (*/}
        {/*    <tr key={headerGroup.id}>*/}
        {/*      {headerGroup.headers.map(header => {*/}
        {/*        return (*/}
        {/*          <th key={header.id} colSpan={header.colSpan}>*/}
        {/*            {header.isPlaceholder ? null : (*/}
        {/*              <>*/}
        {/*                {flexRender(*/}
        {/*                  header.column.columnDef.header,*/}
        {/*                  header.getContext()*/}
        {/*                )}*/}
        {/*                {header.column.getCanFilter() ? (*/}
        {/*                  <div>*/}
        {/*                    <Filter column={header.column} table={table}/>*/}
        {/*                  </div>*/}
        {/*                ) : null}*/}
        {/*              </>*/}
        {/*            )}*/}
        {/*          </th>*/}
        {/*        )*/}
        {/*      })}*/}
        {/*    </tr>*/}
        {/*  ))}*/}
        {/*  </thead>*/}
        {/*  <tbody>*/}
        {/*  {table.getRowModel().rows.map(row => {*/}
        {/*    return (*/}
        {/*      <tr key={row.id}>*/}
        {/*        {row.getVisibleCells().map(cell => {*/}
        {/*          return (*/}
        {/*            <td key={cell.id}>*/}
        {/*              {flexRender(*/}
        {/*                cell.column.columnDef.cell,*/}
        {/*                cell.getContext()*/}
        {/*              )}*/}
        {/*            </td>*/}
        {/*          )*/}
        {/*        })}*/}
        {/*      </tr>*/}
        {/*    )*/}
        {/*  })}*/}
        {/*  </tbody>*/}
        {/*  <tfoot>*/}
        {/*  <tr>*/}
        {/*    <td className="p-1">*/}
        {/*      <IndeterminateCheckbox*/}
        {/*        {...{*/}
        {/*          checked: table.getIsAllPageRowsSelected(),*/}
        {/*          indeterminate: table.getIsSomePageRowsSelected(),*/}
        {/*          onChange: table.getToggleAllPageRowsSelectedHandler(),*/}
        {/*        }}*/}
        {/*      />*/}
        {/*    </td>*/}
        {/*    <td colSpan={20}>Page Rows ({table.getRowModel().rows.length})</td>*/}
        {/*  </tr>*/}
        {/*  </tfoot>*/}
        {/*</table>*/}

        {/*Pagination*/}
        {/*<div className="h-2"/>*/}
        <Divider className={'divide-primary'} name={''}/>
        <Pagination<IRecord> table={table}/>
        {/*<Options<ISensor> table={table} refreshData={refreshData} rerender={rerender} rowSelection={rowSelection}/>*/}
      </div>
    </div>
  )
}
