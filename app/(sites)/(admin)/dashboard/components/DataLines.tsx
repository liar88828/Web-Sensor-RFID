'use client'
import React from 'react';
import {useGet} from "@/hook/useFetch";
import Loading from "@/components/elements/conditional/Loading";
import Errors from "@/components/elements/conditional/Errors";
import {LineChart} from "@/interface/type";
import {Lines} from "@/components/chart/Line";


function DataLines() {

  const {data, isLoading, isError} = useGet<LineChart[]>('dashboard', 'line')
  if (isLoading) return <Loading/>
  if (!data || isError) return <Errors/>


  return (
    <div className="rounded  bg-base-100 p-2 h-80 shadow-lg border-t-4 border-yellow-400">
      <Lines data={data}/>
    </div>
  );
}


export default DataLines;
