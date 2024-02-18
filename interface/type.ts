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

export type Method = 'POST' | 'PUT'
export  type IPages = 'anggota' | 'sensor' | 'record'|'user'
export type TMethod = "PUT" | "POST" | "GET" | "DELETE" | "PATCH";

// type Data = keyof TDelivery;
export interface Anggota {
  id: string
  hewan: string
  warna: string
  id_user: string
  id_sensor: IdSensor[]
  user: User
}

export interface IdSensor {
  kode: string
}

export interface User {
  alamat: string
  name: string
  no_hp: string
  email: string
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
