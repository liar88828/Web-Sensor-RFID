export interface Root {
  name: string
  no_hp: string
  alamat: string
  email: string
  id: string
  Anggota: Anggoum[]
  sensor: Sensor[]
  record: Record[]
  sensorNull: Sensor[]
}

export interface Anggoum {
  id: string
  warna: string
  hewan: string
  id_user: string
  id_sensor: IdSensor[]
}

export interface IdSensor {
  id: string
  warna: string
  rfid: string
  kode: string
  id_record: IdRecord[]
}

export interface IdRecord {
  id: string
  tanggal: string
  jamMasuk: string
  lokasi: string
  id_sensor: string
}

export interface Sensor {
  id: string
  rfid: string
  kode: string
  status: string
  warna: string
  id_anggota: string
  id_record: IdRecord2[]
}

export interface IdRecord2 {
  id: string
  tanggal: string
  jamMasuk: string
  lokasi: string
  id_sensor: string
}

export interface Record {
  id: string
  tanggal: string
  jamMasuk: string
  lokasi: string
  id_sensor: string
}
