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
import Table from "@/components/tabels/tanstack/option/Table";
import {IAnggota, TableProps} from "@/interface/type";

export function AnggotaTable({data,}: TableProps<IAnggota[]>) {
  const [globalFilter, setGlobalFilter] = React.useState('')
  const [rowSelection, setRowSelection] = React.useState({})
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
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  return (
    <div className="p-6 space-y-2 rounded-xl bg-base-100/60">
      <Search<IAnggota>
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
        excel={anggotaToExcel}
        table={table}
        to={'anggota'}
      />

      <div className="overflow-x-auto rounded bg-base-100/90">
        <Table<IAnggota> table={table}/>
        <Divider className={'divide-primary'} name={''}/>
        <Pagination<IAnggota> table={table}/>
      </div>
    </div>
  )
}
