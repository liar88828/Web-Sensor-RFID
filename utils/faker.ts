import {ISensor} from "@/components/tabels/Sensor";
import {faker} from "@faker-js/faker";

export function makeData(...lens: number[]) {
  const makeDataLevel = (depth = 0): ISensor[] => {
    const len = lens[depth]!
    return range(len).map((d): ISensor => {
      return {
        ...newPerson(),
      }
    })
  }

  return makeDataLevel()
}

export const newPerson = (): ISensor => {
  return {
    id: faker.number.int({max: 999999}),
    rfid: faker.animal.bird(),
    kode: faker.number.int({max: 1000000}).toString(),
    warna: faker.color.human(),
    status: faker.helpers.shuffle([
      'Active',
      'Invalid',
    ])[0]!,
  }
}

export const range = (len: number) => {
  const arr: number[] = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}
