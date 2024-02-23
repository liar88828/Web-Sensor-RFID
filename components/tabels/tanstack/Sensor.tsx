import React from 'react'
import {
  ColumnDef,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table'
import Divider from "@/components/elements/Divider";
import {sensorToExcel} from "@/utils/excel";
import {Pagination} from "@/components/tabels/tanstack/option/Pagination";
import {IndeterminateCheckbox} from "@/components/tabels/tanstack/option/IndeterminateCheckbox";
import {Search} from "@/components/tabels/tanstack/option/Search";
import {ISensor, TableProps} from "@/interface/type";
import {cssValid} from "@/utils/css";
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


export function SensorTable({data,}: TableProps<ISensor[]>) {


  const [globalFilter, setGlobalFilter] = React.useState('')
  const [rowSelection, setRowSelection] = React.useState({})

  const columns = React.useMemo<ColumnDef<ISensor>[]>(
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
        id: 'rfid',
        accessorKey: 'rfid',
        header: () => 'RFID',
        cell: info => info.getValue(),
        footer: props => props.column.id,
      },
      {
        // id: 'kode',
        accessorKey: 'kode',
        header: () => 'Kode',
        cell: info => info.getValue(),
        footer: props => props.column.id,
      },

      {
        accessorKey: 'status',
        header: () => 'Status',
        cell: info => <span className={' text-white  p-1 rounded ' + cssValid('ACTIVE', info.getValue() as string)}
        >{info.getValue() as string}</span>,
        footer: props => props.column.id,
      },
      {
        accessorKey: 'warna',
        header: () => 'Warna',
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
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })


  return (
    <div className="p-6 space-y-2 rounded-xl bg-base-100/60">
      {/* ----- Search ----- */}
      <Search<ISensor>
        table={table}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
        excel={sensorToExcel}
        to={"sensor"}
      />

      <div className=" overflow-x-auto  rounded bg-base-100/90">
        <Table<ISensor> table={table}/>
        <Divider className={'divide-primary'} name={''}/>
        <Pagination<ISensor> table={table}/>
      </div>
    </div>
  )
}
