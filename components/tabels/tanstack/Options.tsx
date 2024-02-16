import {Column, Table} from "@tanstack/react-table";
import React, {HTMLProps} from "react";
import {ISensor} from "@/interface/type";
import {downloadToExcel} from "@/utils/excel";

export function Filter({
                         column,
                         table,
                       }: {
  column: Column<any, any>
  table: Table<any>
}) {
  const firstValue = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id)

  return typeof firstValue === 'number' ? (
    <div className="flex space-x-2">
      <input
        type="number"
        value={((column.getFilterValue() as any)?.[0] ?? '') as string}
        onChange={e =>
          column.setFilterValue((old: any) => [e.target.value, old?.[1]])
        }
        placeholder={`Min`}
        className="w-24 border shadow rounded"
      />
      <input
        type="number"
        value={((column.getFilterValue() as any)?.[1] ?? '') as string}
        onChange={e =>
          column.setFilterValue((old: any) => [old?.[0], e.target.value])
        }
        placeholder={`Max`}
        className="w-24 border shadow rounded"
      />
    </div>
  ) : (
    <input
      type="text"
      value={(column.getFilterValue() ?? '') as string}
      onChange={e => column.setFilterValue(e.target.value)}
      placeholder={`Search...`}
      className="w-36 border shadow rounded"
    />
  )
}

export function IndeterminateCheckbox({
                                        indeterminate,
                                        className = '',
                                        ...rest
                                      }: { indeterminate?: boolean } & HTMLProps<HTMLInputElement>) {
  const ref = React.useRef<HTMLInputElement>(null!)

  React.useEffect(() => {
    if (typeof indeterminate === 'boolean') {
      ref.current.indeterminate = !rest.checked && indeterminate
    }
  }, [ref, indeterminate])

  return (
    <input
      type="checkbox"
      ref={ref}
      className={className + ' cursor-pointer'}
      {...rest}
    />
  )
}


// A debounced input react component
export function DebouncedInput({
                                 value: initialValue,
                                 onChange,
                                 debounce = 500,
                                 ...props
                               }: {
  value: string | number
  onChange: (value: string | number) => void
  debounce?: number
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>) {
  const [value, setValue] = React.useState(initialValue)

  React.useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value)
    }, debounce)

    return () => clearTimeout(timeout)
  }, [value])

  return (
    <input {...props} value={value} onChange={e => setValue(e.target.value)}/>
  )
}

interface IOptionTable <T>{
  table: Table<T>;
  rerender: React.DispatchWithoutAction;
  rowSelection: {};
  refreshData: () => void;
}

export function Options<T>({rowSelection, table, refreshData, rerender}: IOptionTable<T>) {

  return (
    < >
      <br/>
      <div>
        {Object.keys(rowSelection).length} of{' '}
        {table.getPreFilteredRowModel().rows.length} Total Rows Selected
      </div>
      <hr/>
      <br/>
      <div>
        <button className="border rounded p-2 mb-2" onClick={() => rerender()}>
          Force Rerender
        </button>
      </div>
      <div>
        <button
          className="border rounded p-2 mb-2"
          onClick={() => refreshData()}
        >
          Refresh Data
        </button>
      </div>
      <div>
        <button
          className="border rounded p-2 mb-2"
          onClick={() =>
            console.info(
              'table.getSelectedRowModel().flatRows',
              table.getSelectedRowModel().flatRows
            )
          }
        >
          Log table.getSelectedRowModel().flatRows
        </button>
      </div>
      <div>
        <label>Row Selection State:</label>
        <pre>{JSON.stringify(table.getState().rowSelection, null, 2)}</pre>
      </div>
    </>
  );
}


export default Options;


export function Pagination<T>({table}: { table: Table<T> }) {
  return (
    <div className="flex items-center gap-2 pb-5">
      <button
        className="border rounded p-1"
        onClick={() => table.setPageIndex(0)}
        disabled={!table.getCanPreviousPage()}
      >
        {'<<'}
      </button>
      <button
        className="border rounded p-1"
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        {'<'}
      </button>
      <button
        className="border rounded p-1"
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        {'>'}
      </button>
      <button
        className="border rounded p-1"
        onClick={() => table.setPageIndex(table.getPageCount() - 1)}
        disabled={!table.getCanNextPage()}
      >
        {'>>'}
      </button>
      <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{' '}
            {table.getPageCount()}
          </strong>
        </span>
      <span className="flex items-center gap-1">
          | Go to page:
          <input
            type="number"
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              table.setPageIndex(page)
            }}
            className="border p-1 rounded w-16"
          />
        </span>

      {/*<input type="number"*/}
      {/*       className={'input input-primary'}*/}
      {/*       placeholder={`Total Row is ${table.getPreFilteredRowModel().rows.length}`}*/}
      {/*       onChange={e => setRowSize(Number(e.target.value))}/>*/}

      <select
        value={table.getState().pagination.pageSize}
        onChange={e => {
          table.setPageSize(Number(e.target.value))
        }}
      >

        {[10, 20, 30, 40, 50, table.getPreFilteredRowModel().rows.length].map(pageSize => (
          <option key={pageSize} value={pageSize}>
            Show {pageSize}
          </option>
        ))}
      </select>
    </div>
  );
}

export function Search<T>({globalFilter, setGlobalFilter, table}: {
  globalFilter: string,
  setGlobalFilter: React.Dispatch<React.SetStateAction<string>>,
  table: Table<T>
}) {
  return <div className={'flex justify-between'}>
    <div className="space-x-2">

      <input
        value={globalFilter ?? ''}
        onChange={e => setGlobalFilter(String(e.target.value))}
        className="   input input-primary"
        placeholder="Search all columns..."
      />
      <button className={'btn btn-secondary'}
        // onClick={() => downloadToExcel(table.getRowModel().rows.map(row => row.original))}
      >Deep Search
      </button>
    </div>

    <button className={'btn btn-primary'}
            onClick={() => downloadToExcel(table.getRowModel().rows.map(row => row.original))}>Download
    </button>
  </div>
}
