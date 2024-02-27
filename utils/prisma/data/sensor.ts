import prisma from "@/utils/prisma/client";
import {ISensor, ISensorCreate} from "@/interface/type";
import {limitDataBase} from "@/utils/nextAdd";

class Sensor {
  async findAll(page: number = 0) {
    let limit = limitDataBase

    page = (page) * limit
    return prisma.sensor.findMany({take: limit, skip: page,})
  }

  async findKey(keys: keyof ISensor, value: string) {
    return prisma.sensor.findUnique({
      where: {id: value}
    })
  }

  async findDontHaveSensor(id: string) {
    return prisma.sensor.findUnique({
      where: {
        id: id,
        id_anggota: null
      }
    })

  }

  async create(json: ISensorCreate) {
    return prisma.sensor.create({
      data: {
        rfid: json.rfid,
        kode: json.kode,
        status: json.status,
        warna: json.warna,
      }
    })
  }

  async createWithAnggota(id: string, json: ISensorCreate) {
    return prisma.sensor.create({
      data: {
        id_anggota: id,
        rfid: json.rfid,
        kode: json.kode,
        status: json.status,
        warna: json.warna,
      }
    })
  }

  async update(id: string, json: ISensor) {
    return prisma.sensor.update({
      where: {
        id
      },
      data: {
        rfid: json.rfid,
        kode: json.kode,
        status: json.status,
        warna: json.warna,
      }
    })
  }

  async patch(id: string, json: { id_anggota: string }) {
    return prisma.sensor.update({
      where: {
        id
      },
      data: {
        id_anggota: json.id_anggota
      }
    })
  }


  async deleted(id: string) {
    return prisma.sensor.delete({where: {id}})
  }

  async deleteValue(id: string) {
    return prisma.sensor.update(
      {
        where: {id},
        data: {id_anggota: null}
      }
    )
  }
}

export const sensorData = new Sensor()
