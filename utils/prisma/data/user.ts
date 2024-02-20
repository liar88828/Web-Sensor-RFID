import prisma from "@/utils/prisma/client";
import {IUser} from "@/interface/type";

class User {
  async findAll(limit: number = 100, page: number = 0) {

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

  async findKey(keys: keyof IUser | 'id', value: string) {
    return prisma.$transaction(async (tx) => {
      const user = await tx.user.findUnique({
        where: {id: value},
        select: {
          name: true, no_hp: true, alamat: true, email: true, id: true
        }
      })
      if (!user) {
        return null
      }


      const anggota = await tx.anggota.findUnique({
        where: {
          id_user: user.id
        },
        include: {
          id_sensor: {
            include: {
              id_record: true
            }
          }
        }
      })


      if (!anggota) {
        return {...user, anggota:null, record:null}
      }
      const sensor = anggota.id_sensor.map(data => data.id)

      // console.log(sensor)

      const record = await tx.record.findMany({
        where: {
          id_sensor: {in: sensor}
        }
      })

      if (!record) {
        return {...user, anggota, record:null}
      }
      return {...user, anggota, record}


    })
    //
    // .user.findUnique({
    //  where: {id: value},
    //  select: {
    //    name: true,
    //    no_hp: true,
    //    alamat: true,
    //    email: true,
    // include: {
    //   Anggota: {
    //
    //     include: {
    //       id_sensor: {
    //
    //         include: {
    //           id_record: true
    //         }
    //       },
    //       user: {
    //         select: {
    //           name: true,
    //           no_hp: true,
    //           alamat: true,
    //           email: true,
    //         }
    //       }
    //     }
    //   }
    // }

    // select: {
    //   name: true,
    //   no_hp: true,
    //   alamat: true,
    //   email: true,
    // },
    // })
    // let {} = response

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
