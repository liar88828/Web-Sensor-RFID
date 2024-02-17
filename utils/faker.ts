import {faker} from "@faker-js/faker";
import {IAnggota, IRecord, ISensor} from "@/utils/validator/zod";

export function makeData<T>(Datas: () => T, ...lens: number[]): T[] {
  const makeDataLevel = (depth = 0): T[] => {
    const len = lens[depth]!
    return range(len).map((d): T => {
      return {
        ...Datas(),
      }
    })
  }

  return makeDataLevel()
}


export const newAnggota = (): IAnggota => {
  return {
    id: faker.number.int({max: 999999}).toString(),
    nama: faker.animal.bird(),
    no_hp: faker.number.int({max: 1000000}).toString(),
    email: faker.internet.email(),
    alamat: faker.location.city(),
    warna: faker.color.human(),
    hewan: faker.animal.bird(),
    sensor: faker.number.int({max: 1000000}).toString(),

  }
}


export const newSensor = (): ISensor => {
  return {
    id: faker.number.int({max: 999999}).toString(),
    rfid: faker.animal.bird(),
    kode: faker.number.int({max: 1000000}).toString(),
    warna: faker.color.human(),
    status: faker.helpers.shuffle([
      'Active',
      'Invalid',
    ])[0]!,
  }
}

export const newRecord = (): IRecord => {
  return {
    id: faker.number.int({max: 999999}).toString(),
    tanggal: faker.date.anytime(),
    jamMasuk: faker.date.anytime(),
    warna: faker.color.human(),
    lokasi: faker.location.city()
  }
}


export const range = (len: number) => {
  const arr: number[] = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

export type RequiredWithoutUndefined<T> = {
  [K in keyof T]-?: Exclude<T[K], undefined>;
};

// Example usage
// interface User {
//   name: string;
//   email: string;
//   id?: number | undefined;
// }

// type UserWithoutUndefined = RequiredWithoutUndefined<User>;
// const user: UserWithoutUndefined = {
//   id: 1231231,
//   email: "asdasda",
//   name: "asdasda"
// }
