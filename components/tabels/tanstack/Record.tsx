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
import {recordToExcel} from "@/utils/lib/excel";
import {Pagination} from "@/components/tabels/tanstack/option/Pagination";
import {IndeterminateCheckbox} from "@/components/tabels/tanstack/option/IndeterminateCheckbox";
import {Search} from "@/components/tabels/tanstack/option/Search";
import {IRecord, TableProps} from "@/interface/type";
import Table from "@/components/tabels/tanstack/option/Table";
import {formatDate, formatTime} from "@/utils/next/formatIndonesia";

export function RecordTable({data}: TableProps<IRecord[]>) {
  const [globalFilter, setGlobalFilter] = React.useState('')
  const [rowSelection, setRowSelection] = React.useState({})
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
        cell: info => formatDate(info.getValue()),
        footer: props => props.column.id,
      },
      {
        accessorKey: 'jamMasuk',
        header: () => 'Jam Masuk',
        cell: info => formatTime(info.getValue()),
        footer: props => props.column.id,
      },
      {
        accessorKey: 'lokasi',
        header: () => 'Lokasi',
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
        <Divider className={'divide-primary'} name={''}/>
        <Pagination<IRecord> table={table}/>
      </div>
    </div>
  )
}
