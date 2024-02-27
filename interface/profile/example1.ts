export interface DataProfile {
  user: User
  sensorNull: SensorNull[]
}

export interface User {
  name: string
  no_hp: string
  alamat: string
  email: string
  id: string
  Anggota: Anggoum[]
}

export interface Anggoum {
  id: string
  id_user: string
  warna: string
  hewan: string
  id_sensor: IdSensor[]
}

export interface IdSensor {
  id: string
  warna: string
  rfid: string
  kode: string,
  status: string
  id_anggota: any
  id_record: IdRecord[]
}

export interface IdRecord {
  id: string
  tanggal: string
  jamMasuk: string
  lokasi: string
  id_sensor: string,
  Sensor: null
}
type SensorRecord = { kode: string, warna: string, rfid: string }

export interface SensorNull {
  id: string
  rfid: string
  kode: string
  status: string
  warna: string
  id_anggota: any
}
