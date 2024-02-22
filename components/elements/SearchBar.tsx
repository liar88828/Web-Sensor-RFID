'use client'

import React, {useState} from "react";
import {Icon} from "@iconify/react";

export function SearchBar<T>({title, reg, data, value, value2}: {
  data: T[],
  value: keyof T,
  value2: keyof T,
  reg: any,
  title: string
}) {
  const [search, setSearch] = useState<string>('')

  const result = data.filter((el) => {
    if (search === '') {
      return el;
    } else {
      // @ts-ignore
      return el[value].toLowerCase().includes(search)
    }
  })


  return <div className={"form-control w-full max-w-xs mt-1 static"}>
    {/*<label className={"label"} htmlFor={title}>*/}
    {/*  <span className={"label-text"}>{title}</span>*/}
    {/*</label>*/}
    <div className={'form-control w-full max-w-xs mt-1 flex static'} style={{position: "relative"}}>

      <input
        className={'input input-primary static'}
        onChange={e => setSearch(e.target.value)}
        placeholder={title}
        value={search}
      />
      <div style={{position: "absolute", bottom: 10, right: 20, top: 10}}>

        <Icon
          icon="ic:baseline-backspace"
          color={'red'}
          onClick={() => setSearch('')}
          fontSize={30}
        />
      </div>
    </div>

    <ul className="menu bg-base-200 w-56 rounded mt-2 static">
      {result.map((d: any) => <li key={d.id}>
          <input type="hidden" {...reg} value={d.id}/>
          <a onClick={() => setSearch(`${d[value]} ${d[value2]}`)}>
            {d[value]} {d[value2]}
          </a>
        </li>
      )}
    </ul>
  </div>
}

//----example
// <SearchBar<Anggota>
//   data={data}
//   value={'hewan'}
//   value2={'warna'} reg={register('id_anggota')}
//   title={'Cari Anggota... '}/>
