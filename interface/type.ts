import {z} from "zod";
import {
  anggotaCreateSchema,
  anggotaSchema,
  loginSchema,
  recordSchema,
  registerSchema,
  sensorSchema,
  userSchema
} from "@/utils/validator/zod";
import React from "react";
import {Table} from "@tanstack/react-table";

export type Method = 'POST' | 'PUT'
export  type IPages = 'anggota' | 'sensor' | 'record' | 'user'
export type TMethod = "PUT" | "POST" | "GET" | "DELETE" | "PATCH";


// type Data = keyof TDelivery;
export interface AnggotaRelational {
  id: string
  hewan: string
  warna: string
  id_user: string
  id_sensor: ISensor[]
}

// export interface IdSensor {
//   kode: string,
//   id: string
// }

export interface UserData {
  alamat: string
  name: string
  no_hp: string
  email: string
}

export type oldAnggota = UserData & IAnggota

export type DetailSensor = ISensor & {
  id_record: IRecord[]
  // rfid: string, kode: string, status: string, warna: string, id: string
  // record: {
  //   // id: string
  //   // tanggal: Date
  //   // jamMasuk: string
  //   // lokasi: string
  // }[]
}

export type DetailAnggota = IAnggota & {
  id_sensor: DetailSensor[]
}

export type DetailProfile = UserData & {
  anggota: DetailAnggota,
  record: IRecord[]
}

export interface PatchAnggotaSensor {
  id_anggota: string;
  id_sensor: string;
}

export type IRegister = z.infer<typeof registerSchema>
export type IUser = z.infer<typeof userSchema>
export type ILogin = z.infer<typeof loginSchema>

export type IAnggotaTable = z.infer<typeof anggotaSchema>
export type IAnggotaCreate = z.infer<typeof anggotaCreateSchema>
export type IAnggota = Required<IAnggotaTable>

export type ISensorCreate = z.infer<typeof sensorSchema>
export type ISensor = Required<ISensorCreate>

export type IRecordCreate = z.infer<typeof recordSchema>
export type IRecord = Required<IRecordCreate>

export type ISensorGlobal = { value: IRecord[], rfid: string }
export type IDataOrang = { name: string, alamat: string, no_hp: string, id: string }


export interface FormProps<T> {
  method: Method;
  defaultData?: T;
  fun: (data: T) => any;
}

export interface PageProps {
  searchParams: { page: string };
}

export interface PageId {
  searchParams: { id: string };
}


export interface TableProps<T> {
  data: T;
}

export interface SearchTable<T> {
  globalFilter: string;
  setGlobalFilter: React.Dispatch<React.SetStateAction<string>>;
  table: Table<T>;
  excel: (data: T[]) => void;
  to: IPages;
  detail?: boolean;
}

export interface PageData {
  value: boolean;
  pageState: number;
}


//
// export interface Root {
//   name: string
//   no_hp: string
//   alamat: string
//   email: string
//   id: string
//   anggota: Anggota
// }
//
// export interface Anggota {
//   id: string
//   hewan: string
//   warna: string
//   id_user: string
//   id_sensor: IdSensor[]
// }
//
// export interface IdSensor {
//   id: string
//   rfid: string
//   kode: string
//   status: string
//   warna: string
//   id_anggota: string
//   id_record: IdRecord[]
// }
//
// export interface IdRecord {
//   id: string
//   tanggal: Date
//   jamMasuk: string
//   lokasi: string
//   id_sensor: string
// }
