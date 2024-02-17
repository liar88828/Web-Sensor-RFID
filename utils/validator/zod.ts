import {z} from "zod";

export const registerSchema = z.object({
  name: z.string(),
  no_hp: z.string(),
  email: z.string().email(),
  alamat: z.string(),
  password: z.string().min(6),
  confirmPassword: z.string().min(6)
})
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"], // path of error
    message: "Password don't match",
  });

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().email(),
});


export const anggotaSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
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


export type IRegister = z.infer<typeof registerSchema>
export type ILogin = z.infer<typeof loginSchema>
export type IAnggotaCreate = z.infer<typeof anggotaSchema>
export type IAnggota = Required<IAnggotaCreate>

export type ISensorCreate = z.infer<typeof sensorSchema>
export type ISensor = Required<ISensorCreate>

export type IRecordCreate = z.infer<typeof recordSchema>
export type IRecord = Required<IRecordCreate>
