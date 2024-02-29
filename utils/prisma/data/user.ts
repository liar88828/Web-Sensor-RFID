import prisma from "@/utils/prisma/client";
import {IUser} from "@/interface/type";
import {limitDataBase} from "@/utils/next/nextAdd";

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


  async findKey(value: string) {
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
              Sensors: {
                select: {
                  id: true,
                  warna: true,
                  rfid: true,
                  kode: true,
                  Records: true
                }
              }
            }
          }
        },
      })
      // console.log(lomba)
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
          Records: true
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
      console.log(record, 'record')
      if (record.length === 0) return {...user, sensor, record: null, sensorNull}

      return {...user, sensor, record, sensorNull}

    })

  }


  async findProfileNew(id: string) {
    return prisma.$transaction(async (tx) => {

      const user = await tx.user.findUnique({
        where: {id: id},

        select: {
          name: true, no_hp: true, alamat: true, email: true, id: true,
          Anggota: {

            select: {
              id: true, id_user: true, warna: true, hewan: true,
              Sensors: {

                select: {
                  id: true, warna: true, rfid: true, kode: true, status: true, id_anggota: true,
                  Records:
                    {select: {id: true, tanggal: true, id_sensor: true, lokasi: true, jamMasuk: true, Sensor: true}}

                }
              }
            }
          }
        }
      })
      if (!user) {
        return null
      }

      if (user.Anggota.length === 0) return {...user, record: null}

      const sensorNull = await tx.sensor.findMany({
        where: {id_anggota: null}
      })

      return {user, sensorNull}
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

  async findEmail(email: string) {
    return prisma.user.findUnique({
      where: {
        email: email
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


  async getUserIDForUser(id: string) {
    return prisma.user.findUnique({
      where: {id},
      select: {
        name:true,
        no_hp:true,
        alamat:true,
        Anggota: {
          select: {
            Sensors: {
              select: {
                Records: true
              }
            }
          }
        }
      }
    })
  }

}


export const userData = new User()
