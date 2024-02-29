import prisma from "@/utils/prisma/client";
import {IRecord, IRecordCreate} from "@/interface/type";
import {limitDataBase} from "@/utils/next/nextAdd";

class Record {
  async findAll(page: number = 0) {
    console.log(page)
    let limit = limitDataBase

    page = (page) * limit
    return prisma.record.findMany({
      take: limit, skip: page,
      include: {
        Sensor: {
          select: {
            kode: true,
            warna: true,
            rfid: true
          }
        }
      }
    })
  }


  async countRecordsByMonth() {
    const data = await prisma.$queryRaw`
        WITH year_filter AS (SELECT EXTRACT(YEAR FROM tanggal) AS year,
                                    to_char(tanggal, 'Month')  AS month,
                                    CAST(COUNT(*) AS INTEGER)  AS record_count
                             FROM "Record"
                             WHERE EXTRACT(YEAR FROM tanggal) = EXTRACT(YEAR FROM NOW())
                                OR EXTRACT(YEAR FROM tanggal) = EXTRACT(YEAR FROM NOW()) - 1
                             GROUP BY EXTRACT(YEAR FROM tanggal),
                                      to_char(tanggal, 'Month'))
        SELECT *
        FROM year_filter
        ORDER BY year, month;
    `;

    // console.log(data)
    return data
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
