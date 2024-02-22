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
import {Pagination} from "@/components/tabels/tanstack/option/Pagination";
import {IndeterminateCheckbox} from "@/components/tabels/tanstack/option/IndeterminateCheckbox";
import {Search} from "@/components/tabels/tanstack/option/Search";
import {IUser} from "@/interface/type";
import {userToExcel} from "@/utils/excel";
import Table from "@/components/tabels/tanstack/option/Table";


export function UserTable({data}: { data: IUser[] }) {

  const [globalFilter, setGlobalFilter] = React.useState('')
  const [rowSelection, setRowSelection] = React.useState({})
  // const [rowSize, setRowSize] = useState(0)
  const columns = React.useMemo<ColumnDef<IUser>[]>(
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
        // accessorKey: 'name',
        header: () => 'Nama',
        accessorFn: row => row.name,
        // cell: info => info.getValue(),
        footer: props => props.column.id,
      },
      {
        // id: 'kode',
        accessorKey: 'no_hp',
        header: () => 'No HP',
        accessorFn: row => row.no_hp,
        // cell: info => info.getValue(),
        footer: props => props.column.id,
        // header: () => <span>Last Name</span>,
      },

      {
        accessorKey: 'email',
        header: () => 'Email',
        accessorFn: row => row.email,
        footer: props => props.column.id,
      },
      {
        accessorKey: 'alamat',
        header: () => 'Alamat',
        accessorFn: row => row.alamat,

        footer: props => props.column.id,
      },
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
      <Search<IUser>
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
        excel={userToExcel}
        table={table}
        to={'user'}
        detail={true}
      />

      <div className="overflow-x-auto rounded bg-base-100/90">
        <Table<IUser> table={table}/>
        {/*Pagination*/}
        {/*<div className="h-2"/>*/}
        <Divider className={'divide-primary'} name={''}/>
        <Pagination<IUser> table={table}/>
        {/*<Options<ISensor> table={table} refreshData={refreshData} rerender={rerender} rowSelection={rowSelection}/>*/}
      </div>
    </div>
  )
}
