import {Column, Table} from "@tanstack/react-table";
import React from "react";

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


// A debounced input react component
export function DebouncedInput(
  {value: initialValue, onChange, debounce = 500, ...props}:
    {
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

interface IOptionTable<T> {
  table: Table<T>;
  rowSelection: {};
  // rerender: React.DispatchWithoutAction;
  // refreshData: () => void;
}

export function Options<T>({
                             rowSelection, table,
                             // refreshData,
                             // rerender
                           }: IOptionTable<T>) {

  return (
    < >
      <br/>
      <div>
        {Object.keys(rowSelection).length} of{' '}
        {table.getPreFilteredRowModel().rows.length} Total Rows Selected
      </div>
      <hr/>
      {/*<br/>*/}
      {/*<div>*/}
      {/*  <button className="border rounded p-2 mb-2"*/}
      {/*    // onClick={() => rerender()}*/}
      {/*  >*/}
      {/*    Force Rerender*/}
      {/*  </button>*/}
      {/*</div>*/}
      {/*<div>*/}
      {/*  <button*/}
      {/*    className="border rounded p-2 mb-2"*/}
      {/*    // onClick={() => refreshData()}*/}
      {/*  >*/}
      {/*    Refresh Data*/}
      {/*  </button>*/}
      {/*</div>*/}
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
