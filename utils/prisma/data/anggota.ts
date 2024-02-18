import prisma from "@/utils/prisma/client";
import {IAnggota, IAnggotaCreate} from "@/interface/type";

class Anggota {
  async findAll(limit: number = 100, page: number = 0) {

    page = (page) * limit
    return prisma.anggota.findMany({
      take: limit, skip: page,
      include: {
        id_sensor: {
          select: {kode: true}
        },
        user: {
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

  async findKey(keys: keyof IAnggota, value: string) {
    return prisma.anggota.findUnique({
      where: {id: value}
    })
  }

  async create(json: IAnggotaCreate) {
    return prisma.anggota.create({
      data: {
        warna: json.warna,
        hewan: json.hewan,
        id_user: '1',
      }
    })
  }

  async update(id: string, json: IAnggota) {
    return prisma.anggota.update({
      where: {
        id
      },
      data: {
        warna: json.warna,
        hewan: json.hewan,
      }
    })
  }

  async deleted(id: string) {
    return prisma.anggota.delete({where: {id}})
  }
}

export const anggotaData = new Anggota()
