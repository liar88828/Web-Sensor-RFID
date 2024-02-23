import {NextRequest, NextResponse} from "next/server";
import {sensorData} from "@/utils/prisma/data/sensor";
import {Inputs} from "@/utils/apiAdd";

export async function GET(req: NextRequest) {
  const {id, page} = await Inputs(req)

  if (!id && page) {
    const data = await sensorData.findAll(Number(page))
    return NextResponse.json(data, {status: 200})
  }

  if (id !== null) {
    if (id.length >= 1) {
      const data = await sensorData.findKey('id', id)
      return NextResponse.json(data, {status: 200})
    }
  }
  console.log(id, page)

}

export async function POST(req: NextRequest) {
  const {id} = await Inputs(req)
  const json = await req.json()
  // console.log(id, json)
  if (id) {
    const data = await sensorData.createWithAnggota(id, json)
    return NextResponse.json(data, {status: 200})
  }
  const data = await sensorData.create(json)
  return NextResponse.json(data, {status: 200})
}

export async function PUT(req: NextRequest) {
  const {id} = await Inputs(req)
  const json = await req.json()
  if (id) {
    const data = await sensorData.update(id, json)
    return NextResponse.json(data, {status: 200})
  }
  return NextResponse.json({data: 'Error'}, {status: 404})
}

export async function PATCH(req: NextRequest) {
  const {id} = await Inputs(req)
  const json = await req.json()
  console.log({id, json})
  if (id) {
    const data = await sensorData.patch(id, json)
    return NextResponse.json(data, {status: 200})
  }
  return NextResponse.json({data: 'Error'}, {status: 404})
}


export async function DELETE(req: NextRequest) {
  const {id, page} = await Inputs(req)

  if (id) {
    if (page) {
      if (page === 'delete_anggota') {
        const data = await sensorData.deleteValue(id)
        return NextResponse.json(data, {status: 200})
      }
    }
    const data = await sensorData.deleted(id)
    return NextResponse.json(data, {status: 200})
  }

  return NextResponse.json({data: 'Error'}, {status: 404})

}
