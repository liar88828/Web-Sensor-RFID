import {NextRequest, NextResponse} from "next/server";
import {Inputs, tryCatch} from "@/utils/next/apiAdd";
import {userData} from "@/utils/prisma/data/user";
import {recordData} from "@/utils/prisma/data/record";

export async function GET(req: NextRequest) {
  return tryCatch(async () => {

    const {page, table} = await Inputs(req)
    if (page === 'status') {
      const data = await userData.status()
      return NextResponse.json(data, {status: 200})
    }

    if (page === 'line') {
      const data = await recordData.countRecordsByMonth()
      return NextResponse.json(data, {status: 200})
    }

      console.log(page, table)
    if (table === 'record') {

      const data = await recordData.findAll(Number(page))
      return NextResponse.json(data, {status: 200})
    }

    if (table === 'user') {
      const data = await userData.findAll(Number(page))
      return NextResponse.json(data, {status: 200})
    }

    // if (table === 'sensor') {
    //   const data = await sensorData.findAll(Number(page))
    //   return NextResponse.json(data, {status: 200})
    // }

  })
}
