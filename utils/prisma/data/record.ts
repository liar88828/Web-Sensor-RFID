import prisma from "@/utils/prisma/client";
import {IRecord, IRecordCreate} from "@/interface/type";
import {limitDataBase} from "@/utils/nextAdd";

class Record {
  async findAll(page: number = 0) {

    let limit = limitDataBase

    page = (page) * limit
    return prisma.record.findMany({take: limit, skip: page})
  }

  async findKey(keys: keyof IRecord, value: string) {
    return prisma.record.findUnique({
      where: {id: value}
    })
  }

  async create(json: IRecordCreate) {
    return prisma.record.create({
      data: {
        lokasi: json.lokasi,
        tanggal: json.tanggal,
        jamMasuk: '2024-12-12T' + json.jamMasuk + ':00.000Z',
      }
    })
  }

  async update(id: string, json: IRecord) {
    return prisma.record.update({
      where: {
        id
      },
      data: {
        lokasi: json.lokasi,
        tanggal: json.tanggal,
        jamMasuk: '2024-12-12T' + json.jamMasuk + ':00.000Z',


      }
    })
  }

  async deleted(id: string) {
    return prisma.record.delete({where: {id}})
  }
}

export const recordData = new Record()
