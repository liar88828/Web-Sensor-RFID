export interface IProfile {
  Anggota: Anggoum[]
  alamat: string
  email: string
  id: string
  name: string
  no_hp: string
  record: RelationalRecordSensor[]
  sensor: RelationalSensorRecord[]
  sensorNull: Sensor[]
}

export type  RelationalSensorRecord = Sensor & {
  id_record: Record[]
}
export type  RelationalRecordSensor = IdRecord & {}

export type  RelationalAnggotaSensor = Sensor & {
  id_record: Record[]
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
  warna: string
  rfid: string
  kode: string
  status: string
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
