import prisma from "@/utils/prisma/client";
import {AnggotaRelational, IAnggotaCreate, IPages, PatchAnggotaSensor} from "@/interface/type";

class Anggota {
  async findAll(limit: number = 100, page: number = 0) {

    page = (page) * limit
    return prisma.anggota.findMany({
      take: limit, skip: page,
      include: {
        id_sensor: {
          select: {kode: true}
        },
        User: {
          select: {
            alamat: true,
            name: true,
            no_hp: true,
            email: true
          }
        }
      },
    })
  }

  async findKey(keys: keyof IAnggotaCreate, value: string) {
    return prisma.anggota.findUnique({
      where: {id: value}
    })
  }

  async findAllWithID(key: keyof AnggotaRelational, value: string,) {
    if (key === "id_user") {

      return prisma.$transaction(async (tx) => {
        const anggota = await tx.anggota.findMany({
          where: {id_user: value},
          select: {
            id_user: true,
            id: true,
            hewan: true,
            warna: true,
            id_sensor: true
          }
        })

        const sensor = await tx.sensor.findMany({
          where: {id_anggota: null}
        })
        return {anggota, sensor}
      })

    }
  }


  async findDontHaveUser() {
    return prisma.anggota.findMany({
      where: {
        id_sensor: {

          every: {
            id_anggota: null
          }
        }
      }
    })
  }


  async create(json: IAnggotaCreate,) {
    console.log(json)
    return prisma.anggota.create({
      data: {
        warna: json.warna,
        hewan: json.hewan,
        id_user: json.id_user,
      }
    })
  }

  async createWithUser(id: string, json: IAnggotaCreate,) {
    console.log(id, json, 'create with user')
    return prisma.anggota.create({
      data: {
        warna: json.warna,
        hewan: json.hewan,
        id_user: id,
      }
    })
  }

  async update(id: string, json: IAnggotaCreate) {
    return prisma.anggota.update({
      where: {
        id
      },
      data: {
        warna: json.warna,
        hewan: json.hewan,
        id_user: json.id_user,
      }
    })
  }


  async patchPage(id: string, page: IPages, json: PatchAnggotaSensor) {
    if (page === 'sensor') {
      return prisma.sensor.update({
        where: {id: json.id_sensor},
        data: {id_anggota: json.id_anggota}
      })
    }
  }

  async deleted(id: string) {
    return prisma.anggota.delete({where: {id}})
  }

  async deletedPage(id: string, page: IPages) {
    if (page === 'sensor') {
      return prisma.sensor.update({
        where: {id},
        data: {id_anggota: null}
      })

    }
  }
}

export const anggotaData = new Anggota()
