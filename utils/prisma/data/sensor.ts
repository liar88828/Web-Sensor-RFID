import prisma from "@/utils/prisma/client";
import {ISensor, ISensorCreate} from "@/interface/type";

class Sensor {
  async findAll(limit: number = 100, page: number = 0) {

    page = (page) * limit
    return prisma.sensor.findMany({take: limit, skip: page})
  }

  async findKey(keys: keyof ISensor, value: string) {
    return prisma.sensor.findUnique({
      where: {id: value}
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

  async deleted(id: string) {
    return prisma.sensor.delete({where: {id}})
  }
}

export const sensorData = new Sensor()
