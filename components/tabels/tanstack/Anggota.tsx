'use client'
import React from 'react'


import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table'
import {makeData, newAnggota} from "@/utils/faker";
import {Filter, IndeterminateCheckbox, Pagination, Search} from "@/components/tabels/tanstack/Options";

import Divider from "@/components/elements/Divider";
import {IAnggota} from "@/utils/validator/zod";
import {anggotaToExcel} from "@/utils/excel";

// export type Person = {
//   firstName: string
//   lastName: string
//   age: number
//   visits: number
//   progress: number
//   status: 'relationship' | 'complicated' | 'single'
//   subRows?: Person[]
// }


export function AnggotaTable() {
  const [data, setData] = React.useState(() => makeData<IAnggota>(newAnggota, 100))
  // const refreshData = () => setData(() => makeData(100))
  // const rerender = React.useReducer(() => ({}), {})[1]

  const [globalFilter, setGlobalFilter] = React.useState('')
  const [rowSelection, setRowSelection] = React.useState({})
  // const [rowSize, setRowSize] = useState(0)
  const columns = React.useMemo<ColumnDef<IAnggota>[]>(
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
        id: 'id',
        accessorKey: 'id',
        header: () => 'ID',
        cell: info => info.getValue(),
        footer: props => props.column.id,
      },
      {
        id: 'nama',
        accessorKey: '',
        header: () => 'RFID',
        // accessorFn: row => row.rfid,
        cell: info => info.getValue(),
        footer: props => props.column.id,
      },
      {
        // id: 'kode',
        accessorKey: 'no_hp',
        header: () => 'No HP',
        // accessorFn: row => row.kode,
        cell: info => info.getValue(),
        footer: props => props.column.id,
        // header: () => <span>Last Name</span>,
      },

      {
        accessorKey: 'email',
        header: () => 'Email',
        footer: props => props.column.id,
      },
      {
        accessorKey: 'alamat',
        header: () => 'Alamat',
        footer: props => props.column.id,
      },
      {
        accessorKey: 'hewan',
        header: () => 'Hewan',
        footer: props => props.column.id,
      },
      {
        accessorKey: 'warna',
        header: () => 'Warna',
        footer: props => props.column.id,
      },
      {
        accessorKey: 'sensor',
        header: () => 'Sensor',
        footer: props => props.column.id,
      },
    ],
    []
  )


  const table = useReactTable({
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
    debugTable: true,
  })

  return (
    <div className="p-4 space-y-2 rounded-xl bg-base-100/60">
      <Search<IAnggota>
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
        excel={anggotaToExcel}
        table={table}
        to={'anggota'}
      />

      <div className="overflow-x-auto rounded bg-base-100/90">
        <table className={' static table table-zebra table-xs'}>
          <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => {
                return (
                  <th key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {header.column.getCanFilter() ? (
                          <div>
                            <Filter column={header.column} table={table}/>
                          </div>
                        ) : null}
                      </>
                    )}
                  </th>
                )
              })}
            </tr>
          ))}
          </thead>
          <tbody>
          {table.getRowModel().rows.map(row => {
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map(cell => {
                  return (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  )
                })}
              </tr>
            )
          })}
          </tbody>
          <tfoot>
          <tr>
            <td className="p-1">
              <IndeterminateCheckbox
                {...{
                  checked: table.getIsAllPageRowsSelected(),
                  indeterminate: table.getIsSomePageRowsSelected(),
                  onChange: table.getToggleAllPageRowsSelectedHandler(),
                }}
              />
            </td>
            <td colSpan={20}>Page Rows ({table.getRowModel().rows.length})</td>
          </tr>
          </tfoot>
        </table>
        {/*Pagination*/}
        {/*<div className="h-2"/>*/}
        <Divider className={'divide-primary'} name={''}/>
        <Pagination<IAnggota> table={table}/>
        {/*<Options<ISensor> table={table} refreshData={refreshData} rerender={rerender} rowSelection={rowSelection}/>*/}
      </div>
    </div>
  )
}
