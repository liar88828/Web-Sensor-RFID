'use client'
import React from 'react';
import {useDownloadImage} from "@/hook/useDownloadImage";
import Card from "@/app/(sites)/user/kartu-peserta/Card";

export default function Page() {
  const {ref, onButtonClick} = useDownloadImage()
  return (
    <div className={'flex-col space-y-3'}>
      <Card ref={ref}/>
      <div className="flex justify-center">
        <button
          className={'btn btn-primary text-white  rounded-2xl'}
          onClick={onButtonClick}>Download
        </button>
      </div>
    </div>
  )
}
