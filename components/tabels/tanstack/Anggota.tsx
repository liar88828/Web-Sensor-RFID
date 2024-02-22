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
import {anggotaToExcel} from "@/utils/excel";
import {Pagination} from "@/components/tabels/tanstack/option/Pagination";
import {IndeterminateCheckbox} from "@/components/tabels/tanstack/option/IndeterminateCheckbox";
import {Search} from "@/components/tabels/tanstack/option/Search";
import {Anggota} from "@/interface/type";
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


export function AnggotaTable({data}: { data: Anggota[] }) {
  // const [data, setData] = React.useState(() => makeData<IAnggota>(newAnggota, 100))
  // const refreshData = () => setData(() => makeData(100))
  // const rerender = React.useReducer(() => ({}), {})[1]

  const [globalFilter, setGlobalFilter] = React.useState('')
  const [rowSelection, setRowSelection] = React.useState({})
  // const [rowSize, setRowSize] = useState(0)
  const columns = React.useMemo<ColumnDef<Anggota>[]>(
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
      // {
      //   id: 'nama',
      //   // accessorKey: 'name',
      //   header: () => 'Nama',
      //   accessorFn: row => row.user.name,
      //   // cell: info => info.getValue(),
      //   footer: props => props.column.id,
      // },
      // {
      //   // id: 'kode',
      //   accessorKey: 'no_hp',
      //   header: () => 'No HP',
      //   accessorFn: row => row.user.no_hp,
      //   // cell: info => info.getValue(),
      //   footer: props => props.column.id,
      //   // header: () => <span>Last Name</span>,
      // },

      // {
      //   accessorKey: 'email',
      //   header: () => 'Email',
      //   accessorFn: row => row.user.email,
      //   footer: props => props.column.id,
      // },
      // {
      //   accessorKey: 'alamat',
      //   header: () => 'Alamat',
      //   accessorFn: row => row.user.alamat,
      //
      //   footer: props => props.column.id,
      // },
      {
        accessorKey: 'hewan',
        header: () => 'Hewan',
        accessorFn: row => row.hewan,
        footer: props => props.column.id,
      },
      {
        accessorKey: 'warna',
        header: () => 'Warna',
        accessorFn: row => row.warna,
        footer: props => props.column.id,
      },
      // {
      //   accessorKey: 'sensor',
      //   header: () => 'Sensor',
      //   accessorFn: (row) => row.id_sensor.map(data => data.kode),
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

  return (
    <div className="p-6 space-y-2 rounded-xl bg-base-100/60">
      <Search<Anggota>
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
        excel={anggotaToExcel}
        table={table}
        to={'anggota'}
      />

      <div className="overflow-x-auto rounded bg-base-100/90">

        <Table<Anggota> table={table}/>

        {/*Pagination*/}
        {/*<div className="h-2"/>*/}
        <Divider className={'divide-primary'} name={''}/>
        <Pagination<Anggota> table={table}/>
        {/*<Options<ISensor> table={table} refreshData={refreshData} rerender={rerender} rowSelection={rowSelection}/>*/}
      </div>
    </div>
  )
}
