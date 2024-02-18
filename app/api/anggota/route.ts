import {NextRequest, NextResponse} from "next/server";
import {Inputs} from "@/utils/apiAdd";
import {anggotaData} from "@/utils/prisma/data/anggota";

export async function GET(req: NextRequest) {
  const {id, limit, page} = await Inputs(req)

  if (!id && limit && page) {
    const data = await anggotaData.findAll(Number(limit), Number(page))
    return NextResponse.json(data, {status: 200})
  }

  if (id !== null) {
    if (id.length >= 1) {
      const data = await anggotaData.findKey('id', id)
      return NextResponse.json(data, {status: 200})
    }
  }
  console.log(id, limit, page)

}

export async function POST(req: NextRequest) {
  // console.log('test')
  const json = await req.json()
  const data = await anggotaData.create(json)
  return NextResponse.json(data, {status: 200})
}

export async function PUT(req: NextRequest) {
  // console.log('test')
  const {id} = await Inputs(req)
  const json = await req.json()
  if (id) {
    const data = await anggotaData.update(id, json)
    return NextResponse.json(data, {status: 200})
  }
  return NextResponse.json({data: 'Error'}, {status: 404})
}

export async function DELETE(req: NextRequest) {
  const {id} = await Inputs(req)
  if (id) {

    const data = await anggotaData.deleted(id)
    return NextResponse.json(data, {status: 200})
  }
  return NextResponse.json({data: 'Error'}, {status: 404})

}
