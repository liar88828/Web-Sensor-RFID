import prisma from "@/utils/prisma/client";
import {IUser} from "@/interface/type";
import {limitDataBase} from "@/utils/nextAdd";

class User {
  async findAll(page: number = 0) {
    let limit = limitDataBase

    page = (page) * limit
    return prisma.user.findMany({
      take: limit, skip: page,
      select: {
        name: true,
        email: true,
        no_hp: true,
        alamat: true,
        id: true
      }
    })
  }


  async status() {
    return prisma.$transaction(async (tx) => {
      return {
        anggota: await tx.anggota.count(),
        user: await tx.user.count(),
        sensor: await tx.sensor.count(),
        record: await tx.record.count(),
      }
    })
  }


  async findKey(keys: keyof IUser | 'id', value: string) {
    return prisma.user.findUnique({where: {id: value}})
  }

  async findProfile(id: string) {

    return prisma.$transaction(async (tx) => {
      const user = await tx.user.findUnique({
        where: {id: id},
        select: {
          name: true, no_hp: true, alamat: true, email: true, id: true,
          Anggota: {
            select: {
              id: true,
              warna: true,
              hewan: true,
              id_user: true,
              id_sensor: {
                select: {
                  id: true,
                  warna: true,
                  rfid: true,
                  kode: true,
                  id_record: true
                }
              }
            }
          }
        },
      })
      // console.log(user)
      if (!user) {
        return null
      }

      if (user.Anggota.length === 0) return {...user, record: null}

      const sensorNull = await tx.sensor.findMany({
        where: {id_anggota: null}
      })

      if (!sensorNull) return {...user, sensorNull: null}

      const id_anggota = user.Anggota.map(data => data.id)
      // console.log(id_anggota, 'anggota')

      const sensor = await tx.sensor.findMany({
        include: {
          id_record: true
        },
        where: {
          id_anggota: {in: id_anggota},
        }
      })
      if (sensor.length === 0) return {...user, sensor: null, sensorNull}
      const id_sensor = sensor.map(data => data.id)

      // console.log(id_sensor, 'sensor')
      const record = await tx.record.findMany({
        where: {id_sensor: {in: id_sensor}}
      })
      console.log(record,'record')
      if (record.length === 0) return {...user, sensor, record: null, sensorNull}

      return {...user, sensor, record, sensorNull}

    })

  }


  async findDontHaveUser() {
    return prisma.user.findMany({
      where: {
        Anggota: {
          every: {
            id_user: null
          }
        }
      }
    })
  }


  async create(json: IUser) {
    return prisma.user.create({
      data: {
        name: json.name,
        email: json.email,
        alamat: json.alamat,
        no_hp: json.no_hp,
        role: 'USER'
      }
    })
  }

  async update(id: string, json: IUser) {
    return prisma.user.update({
      where: {
        id
      },
      data: {
        name: json.name,
        email: json.email,
        alamat: json.alamat,
        no_hp: json.no_hp,
      }
    })
  }


  async deleted(id: string) {
    return prisma.user.delete({where: {id}})
  }
}

export const userData = new User()
