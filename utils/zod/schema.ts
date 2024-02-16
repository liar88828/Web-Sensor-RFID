import {z} from "zod";

export const anggotaSchema = z.object({
  id: z.string().optional(),
  nama: z.string(),
  no_hp: z.string(),
  email: z.string().email(),
  alamat: z.string(),
  hewan: z.string(),
  warna: z.string(),
  sensor: z.string(),
});

export const sensorSchema = z.object({
  id: z.string().optional(),
  rfid: z.string(),
  kode: z.string(),
  status: z.string(),
  warna: z.string(),
});

export const recordSchema = z.object({
  id: z.string().optional(),
  tanggal: z.date(),
  jamMasuk: z.date(),
  lokasi: z.string(),
  warna: z.string(),
});


export type IAnggotaCreate = z.infer<typeof anggotaSchema>
export type ISensorCreate = z.infer<typeof sensorSchema>
export type IRecordCreate = z.infer<typeof recordSchema>
