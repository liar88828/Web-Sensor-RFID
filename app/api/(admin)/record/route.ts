import {NextRequest, NextResponse} from "next/server";
import {recordData} from "@/utils/prisma/data/record";
import {Inputs, tryCatch} from "@/utils/next/apiAdd";

export async function GET(req: NextRequest) {
  return tryCatch(async () => {
    const {id, page} = await Inputs(req)
    // console.log(id, page)


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

  })
}

export async function POST(req: NextRequest) {
  return tryCatch(async () => {
    const json = await req.json()

    const data = await recordData.create(json)
    return NextResponse.json(data, {status: 200})
  })
}

export async function PUT(req: NextRequest) {
  return tryCatch(async () => {

    const {id, json} = await Inputs(req)
    if (id) {
      const data = await recordData.update(id, json)
      return NextResponse.json(data, {status: 200})
    }
    return NextResponse.json({data: 'Error'}, {status: 404})
  })
}

export async function DELETE(req: NextRequest) {
  return tryCatch(async () => {

    const {id} = await Inputs(req)
    if (id) {

      const data = await recordData.deleted(id)
      return NextResponse.json(data, {status: 200})
    }
    return NextResponse.json({data: 'Error'}, {status: 404})

  })
}
