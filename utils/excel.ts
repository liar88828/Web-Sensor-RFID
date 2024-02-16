import xlsx, {IJsonSheet} from "json-as-xlsx";
import {ISensor} from "@/interface/type";

export function downloadToExcel(data: ISensor[]) {
  // console.log(data.map(data=>data))
  console.log(data)
  let columns: IJsonSheet[] = [
    {
      sheet: "Sensor",
      columns: [
        {label: "Person ID", value: "id",},
        {label: "First Name", value: "rfid"},
        {label: "Last Name", value: "kode"},
        {label: "Email", value: "status"},
        {label: "Gender", value: "warna"},
      ],
      content: data,
    },
  ];

  let settings = {
    fileName: "Sensor Data " + new Date().toLocaleDateString('id-ID', {dateStyle: "full"}),
  };

  xlsx(columns, settings);
}
