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
  // name: z.string(),
  // no_hp: z.string(),
  // email: z.string().email(),
  // alamat: z.string(),
  hewan: z.string(),
  warna: z.string(),
  // sensor: z.string(),
});

export const anggotaCreateSchema = z.object({
  hewan: z.string(),
  warna: z.string(),
});


export const sensorSchema = z.object({
  id: z.string().optional(),
  rfid: z.string().max(20),
  kode: z.string().max(10),
  status: z.string().max(10),
  warna: z.string().max(10),
});

export const recordSchema = z.object({
  id: z.string().optional(),
  tanggal: z.date(),
  jamMasuk: z.string(),
  lokasi: z.string(),
  // warna: z.string(),
});


export const userSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  email: z.string().email(),
  alamat: z.string(),
  no_hp: z.string(),
});
