import xlsx, {IJsonSheet} from "json-as-xlsx";
import {IAnggota, IRecord, ISensor} from "@/utils/validator/zod";

export function anggotaToExcel(data: IAnggota[]) {
  // console.log(data)
  const title = 'Anggota'

  let column: IJsonSheet[] = [
    {
      sheet: title,
      columns: [
        {label: "ID", value: "id",},
        {label: "Nama", value: "nama",},
        {label: "No HP", value: "no_hp",},
        {label: "Email", value: "email",},
        {label: "Alamat", value: "alamat",},
        {label: "Hewan", value: "hewan",},
        {label: "Warna", value: "warna",},
        {label: "Sensor", value: "sensor",},

      ],
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
