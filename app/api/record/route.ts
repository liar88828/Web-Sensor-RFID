import {NextRequest, NextResponse} from "next/server";
import {recordData} from "@/utils/prisma/data/record";
import {Inputs} from "@/utils/apiAdd";

export async function GET(req: NextRequest) {
  const {id, page} = await Inputs(req)
  console.log(id, page)


  if (page === 'dashboard') {
    const data = await recordData.countRecordsByMonth()
    // console.log(data)
    return NextResponse.json(data, {status: 200})
  }


  if (!id && page) {
    const data = await recordData.findAll(Number(page))

    // console.log(data,'record')
    return NextResponse.json(data, {status: 200})
  }


  if (id !== null) {
    if (id.length >= 1) {
      const data = await recordData.findKey('id', id)
      return NextResponse.json(data, {status: 200})
    }
  }

}

export async function POST(req: NextRequest) {
  // console.log('test')
  const json = await req.json()
  console.log(json)
  const data = await recordData.create(json)
  return NextResponse.json(data, {status: 200})
}

export async function PUT(req: NextRequest) {
  // console.log('test')
  const {id} = await Inputs(req)
  const json = await req.json()
  if (id) {
    const data = await recordData.update(id, json)
    return NextResponse.json(data, {status: 200})
  }
  return NextResponse.json({data: 'Error'}, {status: 404})
}

export async function DELETE(req: NextRequest) {
  const {id} = await Inputs(req)
  if (id) {

    const data = await recordData.deleted(id)
    return NextResponse.json(data, {status: 200})
  }
  return NextResponse.json({data: 'Error'}, {status: 404})

}
