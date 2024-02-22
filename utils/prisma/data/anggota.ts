import prisma from "@/utils/prisma/client";
import {IAnggotaCreate} from "@/interface/type";

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
    console.log(id,json,'create with user')
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

  async deleted(id: string) {
    return prisma.anggota.delete({where: {id}})
  }
}

export const anggotaData = new Anggota()
