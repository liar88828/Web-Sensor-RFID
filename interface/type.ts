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
import {IdRecord} from "@/interface/profile/example1";


export type Method = 'POST' | 'PUT'
export  type IPages = 'anggota' | 'sensor' | 'record' | 'user' | 'dashboard' | 'profile'
export type TMethod = "PUT" | "POST" | "GET" | "DELETE" | "PATCH";
export type PropsData = 'pagination' | 'number' | ''
export type ISize = 'sm' | 'xs' | 'md'

export interface IPagination {
  handlePageClick: (event: any) => void;
  pageCount: number;
  size?: ISize;
}

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

export interface StatusData {
  anggota: number;
  user: number;
  sensor: number;
  record: number;
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

export type IRegister = z.output<typeof registerSchema>
export type IUser = z.output<typeof userSchema>
export type ILogin = z.output<typeof loginSchema>

//
export type IAnggotaTable = z.output<typeof anggotaSchema>
export type IAnggotaCreate = z.output<typeof anggotaCreateSchema>
export type IAnggota = Required<IAnggotaTable>
//
export type ISensorCreate = z.output<typeof sensorSchema>
export type ISensor = Required<ISensorCreate>
//
export type IRecordCreate = z.output<typeof recordSchema>
export type IRecord = Required<IRecordCreate>
//
export type ISensorGlobal = { value: IdRecord[], rfid: string }
export type IDataOrang = { name: string, alamat: string, no_hp: string, id: string, email: string, }
//
export type IRecordRelational = Required<IRecordCreate> & {
  Sensor: ISensor
}


export interface LineChart {
  year: number,
  month: number,
  record_count: number
}

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
