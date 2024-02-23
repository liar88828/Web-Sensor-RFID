'use client'
import React from 'react';
import Record from "@/components/tabels/basic/record";
import {Paginations, usePaginations} from "@/components/elements/Paginations";

const dataRecord =
  [
    {
      "id": "164341",
      "jamMasuk": "Sun Jun 16 2024 19:53:03 GMT+0700 (Indochina Time)",
      "tanggal": "2023-06-08T18:25:35.932Z",
      "lokasi": "Tulsa"
    },
    {
      "id": "764999",
      "jamMasuk": "Fri Jul 28 2023 01:13:19 GMT+0700 (Indochina Time)",
      "tanggal": "2024-05-25T20:34:05.078Z",
      "lokasi": "Andalas"
    },
    {
      "id": "239781",
      "jamMasuk": "Sat Aug 12 2023 06:03:49 GMT+0700 (Indochina Time)",
      "tanggal": "2023-04-01T16:42:06.022Z",
      "lokasi": "North Saul"
    },
    {
      "id": "647521",
      "jamMasuk": "Wed Oct 23 2024 19:03:35 GMT+0700 (Indochina Time)",
      "tanggal": "2024-02-17T19:39:32.749Z",
      "lokasi": "West Rickiefort"
    },
    {
      "id": "269891",
      "jamMasuk": "Sun Jul 02 2023 15:11:13 GMT+0700 (Indochina Time)",
      "tanggal": "2023-09-16T21:58:51.622Z",
      "lokasi": "Dickifort"
    },
    {
      "id": "851682",
      "jamMasuk": "Wed Jan 10 2024 19:13:53 GMT+0700 (Indochina Time)",
      "tanggal": "2023-09-19T16:27:21.314Z",
      "lokasi": "Anaborough"
    },
    {
      "id": "502109",
      "jamMasuk": "Thu May 02 2024 19:08:02 GMT+0700 (Indochina Time)",
      "tanggal": "2023-05-09T07:19:58.310Z",
      "lokasi": "Felicitystad"
    },
    {
      "id": "262531",
      "jamMasuk": "Fri Nov 08 2024 03:57:27 GMT+0700 (Indochina Time)",
      "tanggal": "2024-05-05T08:19:40.291Z",
      "lokasi": "New Karinefield"
    },
    {
      "id": "16543241",
      "jamMasuk": "Sun Jun 16 2024 19:53:03 GMT+0700 (Indochina Time)",
      "tanggal": "2023-06-08T18:25:35.932Z",
      "lokasi": "Tulsa"
    },
    {
      "id": "76442999",
      "jamMasuk": "Fri Jul 28 2023 01:13:19 GMT+0700 (Indochina Time)",
      "tanggal": "2024-05-25T20:34:05.078Z",
      "lokasi": "Annandale"
    },
    {
      "id": "23937281",
      "jamMasuk": "Sat Aug 12 2023 06:03:49 GMT+0700 (Indochina Time)",
      "tanggal": "2023-04-01T16:42:06.022Z",
      "lokasi": "North Saul"
    },
    {
      "id": "64745421",
      "jamMasuk": "Wed Oct 23 2024 19:03:35 GMT+0700 (Indochina Time)",
      "tanggal": "2024-02-17T19:39:32.749Z",
      "lokasi": "West Rickiefort"
    },
    {
      "id": "26923891",
      "jamMasuk": "Sun Jul 02 2023 15:11:13 GMT+0700 (Indochina Time)",
      "tanggal": "2023-09-16T21:58:51.622Z",
      "lokasi": "Dickifort"
    },
    {
      "id": "38516482",
      "jamMasuk": "Wed Jan 10 2024 19:13:53 GMT+0700 (Indochina Time)",
      "tanggal": "2023-09-19T16:27:21.314Z",
      "lokasi": "Anaborough"
    },
    {
      "id": "50521509",
      "jamMasuk": "Thu May 02 2024 19:08:02 GMT+0700 (Indochina Time)",
      "tanggal": "2023-05-09T07:19:58.310Z",
      "lokasi": "Felicitystad"
    },
    {
      "id": "42662531",
      "jamMasuk": "Fri Nov 08 2024 03:57:27 GMT+0700 (Indochina Time)",
      "tanggal": "2024-05-05T08:19:40.291Z",
      "lokasi": "New Karinefield"
    },
    {
      "id": "1643241",
      "jamMasuk": "Sun Jun 16 2024 19:53:03 GMT+0700 (Indochina Time)",
      "tanggal": "2023-06-08T18:25:35.932Z",
      "lokasi": "Tulsa"
    },
    {
      "id": "7642999",
      "jamMasuk": "Fri Jul 28 2023 01:13:19 GMT+0700 (Indochina Time)",
      "tanggal": "2024-05-25T20:34:05.078Z",
      "lokasi": "Annandale"
    },
    {
      "id": "2393781",
      "jamMasuk": "Sat Aug 12 2023 06:03:49 GMT+0700 (Indochina Time)",
      "tanggal": "2023-04-01T16:42:06.022Z",
      "lokasi": "North Saul"
    },
    {
      "id": "6474521",
      "jamMasuk": "Wed Oct 23 2024 19:03:35 GMT+0700 (Indochina Time)",
      "tanggal": "2024-02-17T19:39:32.749Z",
      "lokasi": "West Rickiefort"
    },
    {
      "id": "2692891",
      "jamMasuk": "Sun Jul 02 2023 15:11:13 GMT+0700 (Indochina Time)",
      "tanggal": "2023-09-16T21:58:51.622Z",
      "lokasi": "Dickifort"
    },
    {
      "id": "8516482",
      "jamMasuk": "Wed Jan 10 2024 19:13:53 GMT+0700 (Indochina Time)",
      "tanggal": "2023-09-19T16:27:21.314Z",
      "lokasi": "Anaborough"
    },
    {
      "id": "5021509",
      "jamMasuk": "Thu May 02 2024 19:08:02 GMT+0700 (Indochina Time)",
      "tanggal": "2023-05-09T07:19:58.310Z",
      "lokasi": "Felicitystad"
    },
    {
      "id": "2662531",
      "jamMasuk": "Fri Nov 08 2024 03:57:27 GMT+0700 (Indochina Time)",
      "tanggal": "2024-05-05T08:19:40.291Z",
      "lokasi": "New Karinefield"
    }
  ]
export default function DataRecords() {

  const {currentItems, handlePageClick, pageCount} = usePaginations(dataRecord, 10)

  // console.log(fakerDataRecord)
  return (
    // <div className=" p-5 sm:w-[45%] ">
    <div className="rounded bg-blue-200 p-2">
      <h1 className="font-bold">Data Record</h1>

      <div className="overflow-x-auto h-60">
        <Record data={currentItems} dashboard={true}/>
        {/*</div>*/}
      </div>

      <Paginations pageCount={pageCount} handlePageClick={handlePageClick}/>


    </div>
  );
}
