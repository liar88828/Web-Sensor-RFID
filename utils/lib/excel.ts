import xlsx, {IJsonSheet} from "json-as-xlsx";

import {IAnggota, IRecord, ISensor, IUser} from "@/interface/type";

export function anggotaToExcel(data: IAnggota[]) {
  // console.log(data)
  const title = 'Anggota'
  console.log(data)
  let column: IJsonSheet[] = [
    {
      sheet: title,
      columns: [
        {label: "ID", value: "id",},
        {label: "Nama", value: "lomba.name",},
        {label: "No HP", value: "lomba.no_hp",},
        {label: "Email", value: "lomba.email",},
        {label: "Alamat", value: "lomba.alamat",},
        {label: "Hewan", value: "hewan",},
        {label: "Warna", value: "warna",},
        {
          label: "Sensor", value: row => {
            // @ts-ignore
            const data = row.id_sensor.map(d => `${d.kode}`)
            return data.join(', ')
          }
        },

      ],
      // @ts-ignore
      content: data,
    },
  ];

  let settings = {
    fileName: title + " Data " + new Date().toLocaleDateString('id-ID', {dateStyle: "full"}),
  };

  xlsx(column, settings);
}


export function sensorToExcel(data: ISensor[]) {
  // console.log(data)
  const title = 'Sensor'
  let column: IJsonSheet[] = [
    {
      sheet: title,
      columns: [
        {label: "ID", value: "id",},
        {label: "RFID", value: "rfid"},
        {label: "Kode", value: "kode"},
        {label: "Status", value: "status"},
        {label: "Warna", value: "warna"},
      ],
      content: data,
    },
  ];

  let settings = {
    fileName: title + " Data " + new Date().toLocaleDateString('id-ID', {dateStyle: "full"}),
  };

  xlsx(column, settings);
}


export function recordToExcel(data: IRecord[]) {
  // console.log(data)
  const title = 'Record'
  let column: IJsonSheet[] = [
    {
      sheet: title,
      columns: [
        {label: "ID", value: "id",},
        {label: "Tanggal", value: "tanggal",},
        {label: "Jam Masuk", value: "jamMasuk",},
        {label: "Lokasi", value: "lokasi",},
        {label: "Warna", value: "warna",},

      ],
      content: data,
    },
  ];

  let settings = {
    fileName: title + " Data " + new Date().toLocaleDateString('id-ID', {dateStyle: "full"}),
  };

  xlsx(column, settings);
}

export function userToExcel(data: IUser[]) {
  // console.log(data)
  const title = 'Anggota'
  console.log(data)
  let column: IJsonSheet[] = [
    {
      sheet: title,
      columns: [
        {label: "ID", value: "id",},
        {label: "Nama", value: "name",},
        {label: "No HP", value: "no_hp",},
        {label: "Email", value: "email",},
        {label: "Alamat", value: "alamat",},
             ],
      // @ts-ignore
      content: data,
    },
  ];

  let settings = {
    fileName: title + " Data " + new Date().toLocaleDateString('id-ID', {dateStyle: "full"}),
  };

  xlsx(column, settings);
}
